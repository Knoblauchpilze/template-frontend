#!/bin/bash

if [ "$#" -ne 1 ]; then
  echo "usage: configure.sh name-of-the-new-project"
  exit 1
fi

PROJECT=$1

echo "Starting configuration for ${PROJECT}"

echo "Rewriting package.json and package-lock.json..."
sed -i "s/template-frontend/${PROJECT}/g" package.json
sed -i "s/template-frontend/${PROJECT}/g" package-lock.json

echo "Updating build system..."
sed -i "s/template-frontend/${PROJECT}/g" Makefile
sed -i "s/template-frontend/${PROJECT}/g" .github/workflows/build-and-push.yml

echo "Installing node modules..."
rm -rf node_modules
make install

echo "Updating README"
sed -i "s/\${placeholder-for-name}/${PROJECT}/g" README.template.md
mv README.template.md README.md

echo "Initializing git repository..."
rm -rf .git
git init

echo "All set! Don't forget to update the README"
