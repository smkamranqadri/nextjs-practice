import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

import withLayout from '../components/layout';

const Index = (props) => {
  console.log('props', props)
  return (
    <>
      <h1>Batman TV Shows</h1>
      <ul>
        {props.shows.map(show => (
          <li key={show.id}>
            <Link href="/m/[id]" as={`/m/${show.id}`}>
              <a>{show.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();
  return {
    shows: data.map(entry => entry.show)
  };
};

export default withLayout(Index);
