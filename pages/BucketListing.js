import Link from 'next/link'
//import './BucketListing.scss';
import Table from 'react-bootstrap/Table'

export function BucketListing({ buckets }) {
  const listItems = buckets.map((x) =>
    <tr key={x.Name}><td><Link  href={`/bucket/${x.Name}`}>{x.Name}</Link></td>
    <td>{new Date(x.CreationDate).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'})}</td> </tr>
  );

  // return <ul> {listItems} </ul>;
  return <Table striped bordered hover responsive >
    <thead>
        <tr>
            <th>Bucket Name</th>
            <th>Date Created</th>
        </tr>
    </thead>
    <tbody>
      
            {listItems}
      
    </tbody>
</Table>
}
