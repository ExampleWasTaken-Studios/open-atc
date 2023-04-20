@echo off
cd server
echo Building jar..
gradlew jar
cd ../client
echo Starting electron...
npx concurrently "npm run renderer" "npm run main"
