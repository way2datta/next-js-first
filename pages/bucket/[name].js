import { useRouter } from 'next/router'
import { fetchBucketsObjects } from "./../fetchBucketsObjects";
import { useState, useEffect } from "react";
import { ObjectsListing } from "./../ObjectsListing";

function BucketView() {
  const router = useRouter()
  const { name } = router.query

  const [objectsInBucket, setObjectsInBuckets] = useState([])

  useEffect(() => {
    async function loadObjectsInBucket() {
      const objectsInBucket = await fetchBucketsObjects();
      setObjectsInBuckets(objectsInBucket);
    }
    loadObjectsInBucket();
  }, []);

  console.log({objectsInBucket});
  return (
    <>
      <h1>Bucket details: {name}</h1>
      <ObjectsListing datasource={objectsInBucket}/>
    </>
  );
}

export default BucketView