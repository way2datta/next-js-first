import axios from "axios";
import { useState, useEffect } from "react";

function Home() {
  const [existingBuckets, setBuckets] = useState([])

  useEffect(() => {
    async function fetchBuckets() {
      const bucketsResponse = await axios.get('/api/buckets');
      console.log({ data: bucketsResponse.data.Buckets });
      setBuckets(bucketsResponse.data.Buckets);
    }
    fetchBuckets();
  }, []);
 
  const listItems = existingBuckets.map((x) =>
  <li key={x.Name}>Bucket Name: {x.Name}, Date Created: {x.CreationDate} </li>
  );
 

  return (
    <>
      <h1>Bucket lists</h1>
      <ul> {listItems} </ul>
    </>
  );
}

export default Home