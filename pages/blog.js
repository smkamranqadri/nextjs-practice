import Link from 'next/link';

import withLayout from '../components/layout';

const PostLink = props => (
  <>
    <li>
      <Link href={`/post?title=${props.title}`}>
        <a>{props.title}</a>
      </Link>
    </li>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: 'Arial';
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </>
);

const PostLink2 = props => (
  <>
    <li>
      <Link href="/p/[id]" as={`/p/${props.id}`}>
        <a>{props.id}</a>
      </Link>
    </li>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: 'Arial';
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </>
);

const Blog = () => {
  return (
    <>
      <h1>My Blog</h1>
      <ul>
        <PostLink title="Hello Next.js" />
        <PostLink title="Learn Next.js is awesome" />
        <PostLink title="Deploy apps with Zeit" />
        <PostLink2 id="hello-nextjs" />
        <PostLink2 id="learn-nextjs" />
        <PostLink2 id="deploy-nextjs" />
      </ul>
      <style jsx>{`
        h1{
          font-family: 'Arial';
        }

        ul {
          padding: 0;
        }
      `}</style>
    </>
  );
};

export default withLayout(Blog);
