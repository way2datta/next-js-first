import axios from "axios";
export async function fetchBuckets() {
  const bucketsResponse = await axios.get('/api/buckets');
  return bucketsResponse.data.Buckets;
}
