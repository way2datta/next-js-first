import AWS from "aws-sdk";
import S3 from "aws-sdk/clients/s3";

export default (req, res) => {
  var options = {
    region: "local/eu-west-2",
    endpoint: new AWS.Endpoint("http://localhost:4572"),
    accessKeyId: "S3RVER",
    secretAccessKey: "S3RVER"
  };
  console.log("options: ", options);
  const s3Client = new S3(options);

  // Call S3 to list the buckets
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