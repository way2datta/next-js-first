import { s3Client } from "./S3Client";

export default async (req, res) => {
  const { method, } = req;
  switch (method) {
    case 'GET':
      var s3Response = await getBuckets();
      res.end(JSON.stringify(s3Response))
      break;
    case 'POST':
      var s3Response = await createBucket(req.body);
      res.end(JSON.stringify(s3Response))
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
      break;
  }
}

function getBuckets() {
  return s3Client.listBuckets().promise();
}

export function createBucket({ bucketName }) {
  return s3Client.createBucket({ Bucket: bucketName }).promise();
}
