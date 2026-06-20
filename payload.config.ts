import {fileURLToPath} from 'url';
import path from 'path';
import {lexicalEditor} from '@payloadcms/richtext-lexical';
import {buildConfig} from 'payload';
import {postgresAdapter} from '@payloadcms/db-postgres';
import sharp from 'sharp';
import {Media} from '@/payload/collections/media';
import {Users} from '@/payload/collections/users';
import {vercelBlobStorage} from '@payloadcms/storage-vercel-blob';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    importMap: {
      baseDir: path.resolve(dirname),
    },
    avatar: "default",
  },
  blocks: [],
  globals: [],
  collections: [
    Users,
    Media
  ],
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
  sharp: sharp as keyof object,
  plugins: [
      vercelBlobStorage({
        enabled: true,
        collections: {
          media: true,
        },
        addRandomSuffix: true,
        access: "public",
        clientUploads: true,
        token: process.env.BLOB_READ_WRITE_TOKEN,
      })
  ],
});
