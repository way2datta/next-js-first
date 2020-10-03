import Link from 'next/link'

export function BucketListing({ buckets }) {
  const listItems = buckets.map((x) =>
    <li key={x.Name}>Bucket Name:
  <Link  href={`/bucket/${x.Name}`}>{x.Name}</Link>, Date Created: {x.CreationDate} </li>
  );

  return <ul> {listItems} </ul>;
}
