import fetch from 'isomorphic-unfetch';

import withLayout from '../../components/layout';

const Movie = props => (
  <>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
    {props.show.image ? <img src={props.show.image.medium} /> : null}
  </>
);

Movie.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();
  return { show };
};

export default withLayout(Movie);