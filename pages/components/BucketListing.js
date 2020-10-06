import Link from 'next/link';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export function BucketListing({ buckets, onDeleteClicked }) {
  const rows = buckets.map((x) =>
    <tr key={x.Name}>
      <td>
        <Link href={`/bucket/${x.Name}`}>{x.Name}</Link>
      </td>
      <td>{new Date(x.CreationDate).toLocaleString(undefined, { timeZone: 'Asia/Kolkata' })}</td>
      <td><Button variant="danger" size="sm" onClick={e=>onDeleteClicked(x.Name)}>Delete Bucket</Button> </td>
    </tr>
  );

  return <Table striped bordered hover responsive >
    <thead>
      <tr>
        <th>Bucket Name</th>
        <th>Date Created</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {rows}
    </tbody>
  </Table>
}
