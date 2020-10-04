import { s3Client } from "./../api/S3Client";
export function createBucket(bucketName) {
    return s3Client.createBucket({ Bucket: bucketName }).promise();
}
