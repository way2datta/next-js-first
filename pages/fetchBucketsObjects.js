import axios from "axios";
export async function fetchBucketsObjects() {
  const listObjectsResponse = await axios.get('/api/listObjects');
  return listObjectsResponse.data.Contents;
}
