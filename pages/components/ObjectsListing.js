export function ObjectsListing({ datasource }) {
  const listItems = datasource.map((x) =>
    <li key={x.Key}><b>Name:</b>
      <a href={`/bucket/${x.Name}`}>{x.Key}</a>,
   <b>Last Modified: </b>{x.LastModified},
   <b>Size  : </b>{x.Size}
    </li>
  );

  return <ul> {listItems} </ul>;
}
