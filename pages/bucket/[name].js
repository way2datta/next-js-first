import { useRouter } from 'next/router'
import { fetchBucketsObjects } from "./../http-client/fetchBucketsObjects";
import { useState, useLayoutEffect } from "react";
import { ObjectsListing } from "./../ObjectsListing";
import Layout from "./../components/shared/Layout";

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

const Index = () => <Layout><BucketView /></Layout>;

export default Index;