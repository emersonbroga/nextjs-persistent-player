import { useState, useEffect } from 'react';
import fetch from 'node-fetch';
import Link from 'next/link';

import { withPlayer } from '../hoc/WithPlayer';

const fetchStuff = async (id) => {
  const res = await fetch(`https://swapi.co/api/people/${id}`);
  const data = await res.json();
  return data;
};

const Home = ({ data: propData }) => {
  const [stateData, setData] = useState(propData);

  useEffect(() => {
    fetchStuff(2).then(setData);
  }, []);

  console.log('*** Home', stateData, propData);
  const data = stateData || propData || { name: 'Emerson' };

  return (
    <div className="container">
      <Link href="/test">
        <a>TEST</a>
      </Link>

      <h1>{data.name}</h1>
    </div>
  );
};

export async function getStaticProps() {
  const data = await fetchStuff(1);
  return {
    props: {
      data,
    },
  };
}

export default withPlayer(Home);
