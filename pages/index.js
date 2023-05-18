import Home from "../Components/home";
import { Fragment } from 'react';
import Head from 'next/head';

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React NextJS App</title>
        <meta
          name="description"
          content="This is my first app with tailwind and NextJS"
        />
      </Head>
      <Home />
    </Fragment>
  );
}

export default HomePage;
