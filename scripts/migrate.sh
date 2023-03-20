#!/bin/bash

# Create a directory for the compiled files
mkdir -p dist

# Compile the TypeScript files and output them to the dist directory
npx tsc --outDir dist backend/database/migrator.ts

# Compile the Migration TypeScript files and output them to the dist directory
npx tsc --outDir ./dist/backend/database/migrations ./backend/database/migrations/*.ts

# Run the migrator.js script from the dist directory
node dist/database/migrator.js

# Delete the dist directory and all of its contents
rm -rf dist
