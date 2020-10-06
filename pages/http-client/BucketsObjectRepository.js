import axios from "axios";
export async function fetchBucketsObjects(bucketName) {
  const listObjectsResponse = await axios.get('/api/bucketObjects',
    {
      params: {
        bucketName: bucketName
      }
    });
  return listObjectsResponse.data.Contents;
}

export async function deleteBucketObject(bucketName, objectKey) {
  const params = { bucketName, objectKey };
  console.log({ params });
  const listObjectsResponse = await axios.delete('/api/bucketObjects',
    {
      params: params
    });
  return listObjectsResponse;
}
