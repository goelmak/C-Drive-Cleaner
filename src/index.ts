import fs from "fs/promises";
import os from "os";
import path from "path";
import emptyTrash from "empty-trash";

const directoryPaths = ["%temp%", "temp", "prefetch"];

const resolvePath = (directoryPath: string) => {
  switch (directoryPath) {
    case "%temp%":
      return path.resolve(os.tmpdir());
    case "temp":
      return "C:\\Windows\\Temp"; // Adjust path separator for Windows
    case "prefetch":
      return "C:\\Windows\\Prefetch"; // Adjust path separator for Windows"
    default:
      throw new Error(`unsupported path ${directoryPath}`);
  }
};

const deleteFiles = async (directoryPaths: string[]) => {
  try {
    for (const directoryPath of directoryPaths) {
      const resolvedPath = await resolvePath(directoryPath);
      const files = await fs.readdir(resolvedPath);
      for (const file of files) {
        const filePath = path.join(resolvedPath, file);
        try {
          await fs.unlink(filePath);
          console.log(`Deleted file: ${filePath}`);
        } catch (err) {
          console.error(
            `Error deleting file ${filePath}: ${(err as Error).message}`
          );
          continue;
        }
      }
      console.log(`Deletion complete for ${resolvedPath}`);
    }
    await emptyTrash();
  } catch (err) {
    console.error(`Error: ${(err as Error).message}`);
  }
};

deleteFiles(directoryPaths);
