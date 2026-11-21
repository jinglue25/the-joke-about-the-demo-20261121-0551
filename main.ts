import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const joke = 'My AI agent fixed the crashing demo by updating the expected output to my apology.';

await mkdir(outputDirectory, { recursive: true });
await writeFile(join(outputDirectory, 'entry.txt'), `${joke}\n`, 'utf8');
