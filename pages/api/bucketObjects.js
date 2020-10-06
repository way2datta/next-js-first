import { s3Client } from "./S3Client";
export default async(req, res) => {
  switch (req.method) {
    case 'GET':
      var s3Response = await getBucketObjects(req);
      res.end(JSON.stringify(s3Response))
      break;
    case 'POST':
        var s3Response = await createBucket( req.body);
        res.end(JSON.stringify(s3Response))
        break;
    default:
      console.log({requestMethod: req.method});
      console.log({requestBody: req.body});

      break;
  }
}
function getBucketObjects(req) {
  var params = {
    Bucket:req.query.bucketName
   };
  return  s3Client.listObjects(params).promise();
}
 