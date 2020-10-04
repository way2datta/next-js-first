import { useState, useEffect } from "react";
import { fetchBuckets } from "./fetchBuckets";
import { BucketListing } from "./components/BucketListing";
import Link from 'next/link';
import Layout from "./components/shared/Layout";

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
      <Link href="/bucket/create"  >Create bucket</Link>
      <BucketListing buckets={existingBuckets} />
    </>
  );
}

const Index = () => <Layout><Home /></Layout>;

export default Index;
