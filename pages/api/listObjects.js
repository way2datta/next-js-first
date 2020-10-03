import { s3Client } from "./S3Client";

export default (req, res) => {
  var params = {
    Bucket:req.query.bucketName
   };
  // Call S3 to list the buckets
  s3Client.listObjects(params, function(err, data) {
    if (err) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(err));
      return
    } else {
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(data))
    }
  });
}


