# shellcheck disable=SC2164
cd server
echo "Building jar..."
./gradlew jar
# shellcheck disable=SC2164
cd ../client
echo "Starting electron..."
npx concurrently "npm run renderer" "npm run main"
