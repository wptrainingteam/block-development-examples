#!/bin/bash

echo "Starting contributor update process..."

# Read examples.json and extract contributors
EXAMPLES_FILE="_data/examples.json"
TEMP_FILE="_data/examples.temp.json"

REPO_OWNER="${REPO_OWNER}"
REPO_NAME="${REPO_NAME}"
TOKEN="${GITHUB_TOKEN}" 

# Create temp file if needed
if [ ! -f "$TEMP_FILE" ]; then
    cp "$EXAMPLES_FILE" "$TEMP_FILE"
fi

# Function to extract folder name from slug
get_folder_name() {
    local slug=$1
    echo "plugins/$slug"
}

# Function to update example contributors
update_example_contributors() {
    local folder=$1
    local contributors=$(curl -s -H "Authorization: token $TOKEN" \
        "https://api.github.com/repos/$REPO_OWNER/$REPO_NAME/commits?path=$folder" \
        | jq -r '.[].author.login' | sort | uniq)    # Added missing closing parenthesis
    echo "$contributors"
}

# Read examples.json into a variable
EXAMPLES=$(cat "$EXAMPLES_FILE")

# Process each example
UPDATED_EXAMPLES=$(echo "$EXAMPLES" | jq -c '.[]' | while read -r example; do
    slug=$(echo "$example" | jq -r '.slug')
    folder=$(get_folder_name "$slug")
    if [ -d "$folder" ]; then
        new_contributors=$(update_example_contributors "$folder")
        # Convert contributors to JSON array format before passing to jq
        contributors_json=$(echo "$new_contributors" | jq -R -s 'split("\n")[:-1]')
        echo "$example" | jq --argjson contributors "$contributors_json" '.contributors = $contributors'
    else
        echo "$example"
    fi
done | jq -s '.')

# Write the updated content back to examples.json
echo "$UPDATED_EXAMPLES" > "$EXAMPLES_FILE"

echo "Finished contributor update process. ✅"