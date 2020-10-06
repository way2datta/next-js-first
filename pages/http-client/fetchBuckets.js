import axios from "axios";

export async function fetchBuckets() {
  const bucketsResponse = await axios.get('/api/buckets');
  return bucketsResponse.data.Buckets;
}

export async function createBucket(bucketName) {
  const bucketsResponse = await axios.post('/api/buckets', {bucketName});
  return bucketsResponse.data.Buckets;
}
