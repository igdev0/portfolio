import type {NextConfig} from "next";
import {withPayload} from "@payloadcms/next/withPayload";

const mediaStorageUrl = process.env.NEXT_PUBLIC_MEDIA_STORAGE_URL as string;
const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.0.234', '192.168.0.234'],
  images: {
    remotePatterns: [new URL(`${mediaStorageUrl}/**`)],

  },
  serverExternalPackages: ['sharp', '@img/sharp-linux-x64'],
};

export default withPayload(nextConfig);