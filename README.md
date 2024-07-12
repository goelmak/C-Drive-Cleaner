
---

# File Deletion Script for C Drive Cleanup

Used when your c drive fills up with unnecessary files

This TypeScript script is designed to delete unnecessary files from specific directories on the C drive in Windows.

## Prerequisites

Before running this script, ensure you have the following installed:

- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine. Includes npm.
  - [Download Node.js](https://nodejs.org/) and follow the installation instructions for your operating system.

## Installation

1. **Clone the repository:**
   ```
   git clone https://github.com/goelmak/C-Drive-Cleaner.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd path/to/your/project
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

## Usage
To run the script in admin mode on Windows:

1. **Open Command Prompt as Administrator:**
   - Right-click on Command Prompt and select "Run as administrator".

2. **Navigate to the project directory:**
   ```bash
   cd path/to/your/project
   ```

3. **Run the script with elevated privileges:**
   ```bash
   npm run build
   npm run start
   ```

### Configuration(optional)

Modify the script to specify the directories to clean up:

- Open [`index.ts`](./index.ts) and update the `directoryPaths` array to include the directories you want to clean.

## Features

- Deletes files from specified directories: `%temp%`, `C:\\Windows\\Temp`, `C:\\Windows\\Prefetch`.
- Uses async functions for file operations.
- Empties the trash after deleting files using [`empty-trash`](https://www.npmjs.com/package/empty-trash).

## Example

```typescript
import fs from "fs/promises";
import os from "os";
import path from "path";
import emptyTrash from "empty-trash";

// Your script code here
// Include relevant parts of your script or a usage example.
```

## Contributing

Feel free to fork the repository and contribute to the project!

---

In this template, I've added clickable links for downloading Node.js, viewing the `index.ts` file, and accessing the `empty-trash` npm package. Adjust the links and paths as needed for your specific project.
