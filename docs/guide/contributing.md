# Contributing Guide

## Development Setup

Developing aya requires [Node.js](https://nodejs.org) and Android SDK tools.

After cloning the repository, run the following commands:

```bash
# Install npm dependencies.
npm install
# Download adb tools.
npm run adb
```

## Common NPM Scripts

```bash
# Build the server that runs on the device.
npm run server
# Watch and automatically rebuild.
npm run dev
# Start development.
npm start
# Generate build artifacts in the dist directory.
npm run build
# Package the application into the release directory.
npm run pack
```

## Project Structure

- **src**: Client source code
- **server**: Server source code
