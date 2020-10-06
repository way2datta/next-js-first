import Link from 'next/link';
import Table from 'react-bootstrap/Table';

function possiblyFilter(bucketObjects) {
  const transformed = bucketObjects.map(x => {
    const isFolder = x.Key.includes("/");
    const name = isFolder ? x.Key.split("/")[0] : x.Key;
    return { IsFolder: isFolder, Name: name, ...x };
  });
  return transformed;
}

export function ObjectsListing({ datasource }) {
  const filtered = possiblyFilter(datasource);
  const rows = filtered.map((x) =>
    <tr key={x.Name}>
      <td>
        <Link href={`/bucket/${x.Name}`}>{x.Name}</Link>
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