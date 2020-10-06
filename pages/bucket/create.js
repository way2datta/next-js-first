import { useState } from "react";
import { withRouter } from 'next/router';
import Layout from "./../components/shared/Layout";
import { createBucket } from "../http-client/BucketRepository";

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

const CreateBucketViewWithRouter = withRouter(CreateBucketView);

const Index = (props) => <Layout><CreateBucketViewWithRouter /></Layout>;

export default Index;