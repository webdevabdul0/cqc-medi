import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
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

// 7 days in seconds — long enough for webhook + email links to remain usable
const READ_EXPIRY = 60 * 60 * 24 * 7;

export async function getPresignedUploadUrl(
  folder: string,
  ext: string,
  contentType: string,
): Promise<{ uploadUrl: string; readUrl: string; key: string }> {
  const key = `${PREFIX}/${folder}/${randomUUID()}.${ext}`;
  const uploadUrl = await getSignedUrl(
    s3,
    new PutObjectCommand({ Bucket: BUCKET, Key: key, ContentType: contentType }),
    { expiresIn: 3600 },
  );
  const readUrl = await getSignedUrl(
    s3,
    new GetObjectCommand({ Bucket: BUCKET, Key: key }),
    { expiresIn: READ_EXPIRY },
  );
  return { uploadUrl, readUrl, key };
}
