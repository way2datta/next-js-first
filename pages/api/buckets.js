import { s3Client } from "./S3Client";

export default (req, res) => {
  console.log({method: req.method, time: Date()});
  
  s3Client.listBuckets(function (err, data) {
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