import { useRouter } from 'next/router'
import { fetchBucketsObjects, deleteBucketObject } from "../http-client/BucketsObjectRepository";
import { useState, useLayoutEffect } from "react";
import { ObjectsListing } from "../components/UniqueObjectsListing";
import Layout from "../components/shared/Layout";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'

function CreateFolderView(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          New Folder
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          When you create a folder, S3 console creates an object with the above name appended by suffix "/" and that object is displayed as a folder in the S3 console.
        </p>
        <br />
        <input placeholder="New folder" />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function BucketView() {
  const router = useRouter();
  const { name } = router.query;
  const [objectsInBucket, setObjectsInBuckets] = useState([])
  const [modalShow, setModalShow] = useState(false);

  const onDeleteClicked = async (objectName) => {
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
      <Button variant="primary" size="sm" onClick={() => setModalShow(true)}>Create Folder</Button>
      <br />
      <br />
      <ObjectsListing datasource={objectsInBucket}
        onDeleteClicked={onDeleteClicked}
        bucketName={name}
      />

      <CreateFolderView
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

const Index = () => <Layout><BucketView /></Layout>;

export default Index;