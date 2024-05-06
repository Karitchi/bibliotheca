import { dirname, resolve, join } from "path";
import { fileURLToPath } from "url";

const currentDirectoryPath = dirname(fileURLToPath(import.meta.url));
const projectDirectoryPath = resolve(currentDirectoryPath, "..");
const publicDirectoryPath = join(projectDirectoryPath, "public");

export default publicDirectoryPath;
