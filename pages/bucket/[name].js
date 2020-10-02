import { useRouter } from 'next/router'

function BucketView() {
  const router = useRouter()
  const { name } = router.query
  return (
    <>
      <h1>Bucket details: {name}</h1>
    </>
  );
}

export default BucketView