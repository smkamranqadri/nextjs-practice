import Head from 'next/head'
import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Head>
      <title>Next.js Practice</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css?family=Exo+2&display=swap" rel="stylesheet" />
    </Head>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/blog">
      <a style={linkStyle}>Blog</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <Link href="/quotes">
      <a style={linkStyle}>Qutoes</a>
    </Link>
  </div>
);

export default Header;