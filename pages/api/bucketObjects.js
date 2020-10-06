import { s3Client } from "./S3Client";
export default async (req, res) => {
  switch (req.method) {
    case 'GET':
      var s3Response = await getBucketObjects(req);
      res.end(JSON.stringify(s3Response))
      break;
    case 'DELETE':
      var s3Response = await deleteBucketObjects(req.query);
      res.end(JSON.stringify(req.query))
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
      break;
  }
}
function getBucketObjects(req) {
  var params = {
    Bucket: req.query.bucketName
  };
  return s3Client.listObjects(params).promise();
}


function deleteBucketObjects( { bucketName, objectKey }) {
  var params = {  Bucket: bucketName, Key: objectKey };
  console.log({params});
  return s3Client.deleteObject(params).promise();
}
