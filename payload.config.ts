import {fileURLToPath} from 'url';
import path from 'path';
import {lexicalEditor} from '@payloadcms/richtext-lexical';
import {buildConfig} from 'payload';
import {postgresAdapter} from '@payloadcms/db-postgres';
import sharp from 'sharp';
import {Media} from '@/payload/collections/media';
import {Users} from '@/payload/collections/users';
import {vercelBlobStorage} from '@payloadcms/storage-vercel-blob';
import {PreviewBlock} from '@/payload/blocks/preview';
import {BlogHeroBlock} from '@/payload/blocks/blog-hero';
import {Blogs} from '@/payload/collections/blogs';
import {Categories} from '@/payload/collections/categories';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    importMap: {
      baseDir: path.resolve(dirname),
    },
    avatar: "default",
  },
  blocks: [
    BlogHeroBlock,
    PreviewBlock,
  ],
  globals: [],
  collections: [
    Users,
    Media,
    Categories,
    Blogs,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    autoGenerate: false,
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
