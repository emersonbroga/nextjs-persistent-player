import Head from 'next/head';
import Link from 'next/link';
import { withPlayer } from '../hoc/WithPlayer';
const Test = () => (
  <div className="container">
    <Link href="/">
      <a>Home</a>
    </Link>
  </div>
);

export default withPlayer(Test);
