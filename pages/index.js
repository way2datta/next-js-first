import { useState, useEffect } from "react";
import { fetchBuckets, deleteBucket } from "./http-client/BucketRepository";
import { BucketListing } from "./components/BucketListing";
import Link from 'next/link';
import Layout from "./components/shared/Layout";

function Home() {
  const [existingBuckets, setBuckets] = useState([])
  async function loadBuckets() {
    const buckets = await fetchBuckets();
    setBuckets(buckets);
  }
  const onDeleteClicked =async(bucketName)=> {
    await deleteBucket(bucketName);
    await loadBuckets();
  }
  useEffect(() => {
    loadBuckets();
  }, []);

  return (
    <>
      <h1>S3 buckets</h1>
      <Link href="/bucket/create"  >Create bucket</Link>
      <BucketListing buckets={existingBuckets}  onDeleteClicked={onDeleteClicked}/>
    </>
  );
}

const Index = () => <Layout><Home /></Layout>;

export default Index;
