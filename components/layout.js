import Header from './Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const withLayout = Page => {
  function Layout(props) {
    return (
      <>
        <div style={layoutStyle}>
          <Header />
          <Page {...props} />
        </div>
        <style jsx global>{`
          * {
            padding: 0;
            margin: 0;
          }
          body {
            font-family: 'Exo 2', sans-serif;
          }
        `}</style>
      </>
    );
  }
  if (Page.getInitialProps) Layout.getInitialProps = Page.getInitialProps;
  return Layout;
};

export default withLayout;
