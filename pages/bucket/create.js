import { useState } from "react";
import { s3Client } from "./../api/S3Client";
import { withRouter } from 'next/router';


function createBucket(bucketName) {
    return s3Client.createBucket({ Bucket: bucketName }).promise();
}   

function CreateBucketView(props) {
    const [newBucketName, setNewBucketName] = useState("")
    const createBucketClick = async () => {
        await createBucket(newBucketName);
        props.router.push('/')
    };
    const onNewBucketNameChange = ({ target }) => {
        const { value } = target;
        setNewBucketName(value);
    }

    return (
        <>
            <h1>Create new bucket</h1>
            <input
                placeholder="Enter bucket name" value={newBucketName}
                onChange={onNewBucketNameChange} />
            <button onClick={createBucketClick}>Create bucket</button>
        </>
    );
}



import Layout from "./../Layout";

const CreateBucketViewWithRouter = withRouter(CreateBucketView);

const Index = (props) => <Layout><CreateBucketViewWithRouter /></Layout>;

export default Index;