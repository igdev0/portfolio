import {fileURLToPath} from 'url';
import path from 'path';
import {lexicalEditor} from '@payloadcms/richtext-lexical';
import {buildConfig} from 'payload';
import {postgresAdapter} from '@payloadcms/db-postgres';
import sharp from 'sharp';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  blocks: [],
  globals: [],
  collections: [],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
  plugins: [],
});
