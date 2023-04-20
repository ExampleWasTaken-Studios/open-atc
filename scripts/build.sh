#!/usr/bin/env bash

cd server && ./gradlew build
cd ../client && npm start
