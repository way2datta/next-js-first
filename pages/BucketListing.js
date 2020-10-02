export function BucketListing({ buckets }) {
  const listItems = buckets.map((x) =>
    <li key={x.Name}>Bucket Name:
  <a href={`/bucket/${x.Name}`}>{x.Name}</a>, Date Created: {x.CreationDate} </li>
  );

  return <ul> {listItems} </ul>;
}
