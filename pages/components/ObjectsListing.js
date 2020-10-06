import Link from 'next/link';
import Table from 'react-bootstrap/Table';

export function ObjectsListing({ datasource }) {
  debugger;
  const rows = datasource.map((x) =>
    <tr key={x.Key}>
      <td>
        <Link href={`/bucket/${x.Key}`}>{x.Key}</Link>
      </td>
      <td>{new Date(x.LastModified).toLocaleString(undefined, { timeZone: 'Asia/Kolkata' })}</td>
      <td>{x.Size}</td>
    </tr>
  );
  return <Table striped bordered hover responsive >
    <thead>
      <tr>
        <th>Name</th>
        <th>Last Modified</th>
        <th>Size</th>
      </tr>
    </thead>
    <tbody>
      {rows}
    </tbody>
  </Table>
}