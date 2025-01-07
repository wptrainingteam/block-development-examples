#!/bin/bash

echo "Starting dates update process..."

# Read examples.json
EXAMPLES_FILE="_data/examples.json"
TEMP_FILE="_data/examples.temp.json"

# Create temp file if needed
if [ ! -f "$TEMP_FILE" ]; then
    cp "$EXAMPLES_FILE" "$TEMP_FILE"
fi

# Function to get Git dates for a folder
get_git_dates() {
    local folder=$1
    
    # Get first commit date (creation date)
    local created=$(git log --reverse --format=%aI -- "$folder" | head -n 1)
    
    # Get last commit date (modification date)
    local lastModified=$(git log -1 --format=%aI -- "$folder")
    
    # Return both dates in JSON format
    echo "{\"created\":\"$created\",\"lastModified\":\"$lastModified\"}"
}

# Read examples.json into a variable
EXAMPLES=$(cat "$EXAMPLES_FILE")

# Process each example
UPDATED_EXAMPLES=$(echo "$EXAMPLES" | jq -c '.[]' | while read -r example; do
    slug=$(echo "$example" | jq -r '.slug')
    folder="plugins/$slug"
    
    if [ -d "$folder" ]; then
        # Get dates from Git history
        dates=$(get_git_dates "$folder")
        created=$(echo "$dates" | jq -r '.created')
        lastModified=$(echo "$dates" | jq -r '.lastModified')
        
        # Update the example with new dates
        echo "$example" | jq --arg created "$created" --arg lastModified "$lastModified" \
            '. + {created: $created, lastModified: $lastModified}'
    else
        echo "$example"
    fi
done | jq -s '.')

# Write the updated content back to examples.json
echo "$UPDATED_EXAMPLES" > "$EXAMPLES_FILE"

echo "Finished dates update process. ✅" 