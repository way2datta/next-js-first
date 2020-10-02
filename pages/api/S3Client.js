import AWS from "aws-sdk";
import S3 from "aws-sdk/clients/s3";

var options = {
  region: "local/eu-west-2",
  endpoint: new AWS.Endpoint("http://localhost:4572"),
  accessKeyId: "S3RVER",
  secretAccessKey: "S3RVER",
  s3ForcePathStyle: true
};
console.log("options: ", options);

export const s3Client = new S3(options);
