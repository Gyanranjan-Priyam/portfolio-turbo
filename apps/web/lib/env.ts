import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";
 
export const env = createEnv({
  server: {
    GMAIL_USER: z.string().optional(),
    GMAIL_APP_PASSWORD: z.string().optional(),
    GMAIL_FROM_NAME: z.string().optional(),
    ARCJET_KEY: z.string().optional(),
    AWS_ACCESS_KEY_ID: z.string().optional(),
    AWS_SECRET_ACCESS_KEY: z.string().optional(),
    AWS_REGION: z.string().optional(),
    AWS_ENDPOINT_URL_S3: z.string().optional(),
    AWS_ENDPOINT_URL_IAM: z.string().optional(),
  },

  client: {
    NEXT_PUBLIC_S3_BUCKET_NAME_IMAGES: z.string().optional(),
    NEXT_PUBLIC_S3_BUCKET_NAME_FILES: z.string().optional(),
    NEXT_PUBLIC_APP_URL: z.string().optional(),
  },

  // For Next.js >= 13.4.4, you only need to destructure client variables:
  experimental__runtimeEnv: {
    NEXT_PUBLIC_S3_BUCKET_NAME_IMAGES: process.env.NEXT_PUBLIC_S3_BUCKET_NAME_IMAGES || "",
    NEXT_PUBLIC_S3_BUCKET_NAME_FILES: process.env.NEXT_PUBLIC_S3_BUCKET_NAME_FILES || "",
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || "",
  },
  skipValidation: true,
});