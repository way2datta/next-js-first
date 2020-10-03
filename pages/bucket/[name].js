import { useRouter } from 'next/router'
import { fetchBucketsObjects } from "./../fetchBucketsObjects";
import { useState, useLayoutEffect } from "react";
import { ObjectsListing } from "./../ObjectsListing";

function BucketView() {
  const router = useRouter()
  const { name } = router.query
  const [objectsInBucket, setObjectsInBuckets] = useState([])

  useLayoutEffect(() => {
    async function loadObjectsInBucket() {
      const objectsInBucket = await fetchBucketsObjects(name);
      setObjectsInBuckets(objectsInBucket);
    }
    loadObjectsInBucket();
  }, []);

  return (
    <>
      <h1>Bucket details: {name}</h1>
      <ObjectsListing datasource={objectsInBucket}/>
    </>
  );
}

import Layout from "./../Layout";

const Index = () => <Layout><BucketView /></Layout>;

export default Index;