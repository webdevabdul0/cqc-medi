import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { randomUUID } from "crypto";

const s3 = new S3Client({
  region: process.env.S3_REGION!,
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY_ID!,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
  },
});

const BUCKET = process.env.S3_BUCKET!;
const PREFIX = process.env.S3_PREFIX ?? "dev";
const BASE_URL = `https://${BUCKET}.s3.${process.env.S3_REGION}.amazonaws.com`;

export async function getPresignedUploadUrl(
  folder: string,
  ext: string,
  contentType: string,
): Promise<{ uploadUrl: string; publicUrl: string }> {
  const key = `${PREFIX}/${folder}/${randomUUID()}.${ext}`;
  const command = new PutObjectCommand({
    Bucket: BUCKET,
    Key: key,
    ContentType: contentType,
  });
  const uploadUrl = await getSignedUrl(s3, command, { expiresIn: 3600 });
  const publicUrl = `${BASE_URL}/${key}`;
  return { uploadUrl, publicUrl };
}
