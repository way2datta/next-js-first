import { useState, useEffect } from "react";
import { fetchBuckets } from "./fetchBuckets";
import { BucketListing } from "./BucketListing";

function Home() {
  const [existingBuckets, setBuckets] = useState([])

  useEffect(() => {
    async function loadBuckets() {
      const buckets = await fetchBuckets();
      setBuckets(buckets);
    }
    loadBuckets();
  }, []);

  return (
    <>
      <h1>S3 buckets</h1>
      <BucketListing buckets={existingBuckets} />
    </>
  );
}

export default Home