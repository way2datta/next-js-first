import { useRouter } from 'next/router'
import { fetchBucketsObjects, deleteBucketObject } from "../http-client/BucketsObjectRepository";
import { useState, useLayoutEffect } from "react";
import { ObjectsListing } from "../components/ObjectsListing";
import Layout from "../components/shared/Layout";

function BucketView() {
  const router = useRouter();
  const { name } = router.query;
  const [objectsInBucket, setObjectsInBuckets] = useState([])
  
  const onDeleteClicked = async (objectName) => {
    console.log("Deleting the object...",objectName);
    await deleteBucketObject(name, objectName);
    await loadObjectsInBucket();
  }
  async function loadObjectsInBucket() {
    const objectsInBucket = await fetchBucketsObjects(name);
    setObjectsInBuckets(objectsInBucket);
  }

  useLayoutEffect(() => {
    loadObjectsInBucket();
  }, []);

  return (
    <>
      <h1>Bucket details: {name}</h1>
      <ObjectsListing datasource={objectsInBucket}  onDeleteClicked={onDeleteClicked} />
    </>
  );
}

const Index = () => <Layout><BucketView /></Layout>;

export default Index;