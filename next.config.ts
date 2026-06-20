import type {NextConfig} from "next";
import {withPayload} from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.0.234', '192.168.0.234'],
};

export default withPayload(nextConfig);