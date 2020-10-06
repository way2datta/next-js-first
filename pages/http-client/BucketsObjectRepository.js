import axios from "axios";
export async function fetchBucketsObjects(bucketName) {
  const listObjectsResponse = await axios.get('/api/bucketObjects',
  {
    params: {
      bucketName: bucketName
    }});
  return listObjectsResponse.data.Contents;
}
