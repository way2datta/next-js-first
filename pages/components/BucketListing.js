import Link from 'next/link'
import Table from 'react-bootstrap/Table'

export function BucketListing({ buckets }) {
  const rows = buckets.map((x) =>
    <tr key={x.Name}><td><Link href={`/bucket/${x.Name}`}>{x.Name}</Link></td>
      <td>{new Date(x.CreationDate).toLocaleString(undefined, { timeZone: 'Asia/Kolkata' })}</td> </tr>
  );

  return <Table striped bordered hover responsive >
    <thead>
      <tr>
        <th>Bucket Name</th>
        <th>Date Created</th>
      </tr>
    </thead>
    <tbody>
      {rows}
    </tbody>
  </Table>
}
