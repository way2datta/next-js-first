import Link from 'next/link';
import Table from 'react-bootstrap/Table';
import { AiOutlineFolderOpen, AiOutlineFile } from 'react-icons/ai';
import Button from 'react-bootstrap/Button';

function possiblyFilter(bucketObjects) {
  const transformed = bucketObjects.map(x => {
    const isFolder = x.Key.includes("/");
    const name = isFolder ? x.Key.split("/")[0] : x.Key;
    return { IsFolder: isFolder, Name: name, ...x };
  });
  return transformed;
}

function ObjectIcon({ isFolder }) {
  return isFolder ? <AiOutlineFolderOpen className="mr-2"/> : <AiOutlineFile className="mr-2"/>;
}

export function ObjectsListing({ datasource, onDeleteClicked }) {
  const filtered = possiblyFilter(datasource);
  const rows = filtered.map((x) =>
    <tr key={x.Name}>
      <td>
        <ObjectIcon isFolder={x.IsFolder} />
        <Link href={`/bucket/${x.Name}`}>{x.Name}</Link>
      </td>
      <td>{new Date(x.LastModified).toLocaleString(undefined, { timeZone: 'Asia/Kolkata' })}</td>
      <td>{x.Size}</td>
      <td><Button variant="danger" size="sm" onClick={e=>onDeleteClicked(x.Name)}>Delete</Button> </td>
    </tr>
  );
  return <Table striped bordered hover responsive >
    <thead>
      <tr>
        <th>Name</th>
        <th>Last Modified</th>
        <th>Size</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {rows}
    </tbody>
  </Table>
}