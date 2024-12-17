#!/bin/bash

echo "Starting contributor details fetch process..."

# Configuration
CONTRIBUTORS_FILE="_data/contributors.json"
EXAMPLES_FILE="_data/examples.json"
TOKEN="${GITHUB_TOKEN}"

# Extract unique contributors from examples.json
echo "Extracting unique contributors..."
CONTRIBUTORS=$(cat "$EXAMPLES_FILE" | jq -r '[.[].contributors[]?] | unique | .[]')

# Initialize empty array for results
echo "[]" > "$CONTRIBUTORS_FILE"

# Process each contributor
echo "$CONTRIBUTORS" | while read -r username; do
    if [ -n "$username" ]; then
        echo "Fetching details for $username..."
        
        # Fetch user details from GitHub API
        user_data=$(curl -s -H "Authorization: token $TOKEN" \
            "https://api.github.com/users/$username")
        
        # Extract full name (use username if name is null)
        name=$(echo "$user_data" | jq -r '.name // .login')
        
        # Add to contributors.json
        existing_content=$(cat "$CONTRIBUTORS_FILE")
        echo "$existing_content" | jq --arg username "$username" \
                                   --arg name "$name" \
                                   '. + [{"username": $username, "name": $name}]' > "$CONTRIBUTORS_FILE"
        
        # Respect GitHub API rate limits
        sleep 1
    fi
done

echo "Finished fetching contributor details. Results saved to $CONTRIBUTORS_FILE ✅" 