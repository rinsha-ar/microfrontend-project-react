# Microfrontend Project

A demonstration of microfrontend architecture using Webpack Module Federation with React.

## Project Structure

- **language-explorer** (Port 3001): Translation microfrontend
- **calorie-tracker** (Port 3002): Calorie tracking microfrontend  
- **container-app** (Port 3000): Host application that integrates both microfrontends

## Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm

### Installation & Running

1. **Install dependencies for all apps:**
   ```bash
   # Language Explorer
   cd language-explorer && npm install
   
   # Calorie Tracker  
   cd ../calorie-tracker && npm install
   
   # Container App
   cd ../container-app && npm install
   ```

2. **Start all applications:**

   **Terminal 1** - Language Explorer:
   ```bash
   cd language-explorer && npm start
   ```
   
   **Terminal 2** - Calorie Tracker:
   ```bash
   cd calorie-tracker && npm start
   ```
   
   **Terminal 3** - Container App:
   ```bash
   cd container-app && npm start
   ```

3. **Access the applications:**
   - Language Explorer: http://localhost:3001
   - Calorie Tracker: http://localhost:3002
   - **Main Dashboard**: http://localhost:3000 (combines both microfrontends)

## Features

### Language Explorer
- Multi-language translation interface
- Language selection dropdown
- Translation results display

### Calorie Tracker
- Add food items with calorie counts
- View calorie entries list
- Track total daily calories

### Container App
- Unified dashboard combining both microfrontends
- Module Federation integration
- Lazy loading of remote components

## Technology Stack

- **Frontend**: React 19
- **Build Tool**: Webpack 5
- **Module Federation**: Webpack Module Federation Plugin
- **Styling**: SCSS
- **Development**: Webpack Dev Server with Hot Module Replacement

## Architecture

This project demonstrates the microfrontend pattern where:
- Each microfrontend runs independently on its own port
- The container app dynamically loads and integrates the microfrontends
- Shared dependencies (React, ReactDOM) are shared between applications
- Each microfrontend can be developed, tested, and deployed independently
