import { s3Client } from "./../S3Client";

export default async (req, res) => {
    const { method, } = req;
    switch (method) {
        case 'DELETE':
            await deleteBucket(req.query.name);
            res.status(200).end();
            break;
        default:
            res.setHeader('Allow', ['DELETE'])
            res.status(405).end(`Method ${method} Not Allowed`)
            break;
    }
}

function deleteBucket(bucketName) {
    return s3Client.deleteBucket({ Bucket: bucketName }).promise();
}
