import Head from 'next/head';
import * as React from 'react';
import { useQuery } from '@apollo/client';

import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { IMeQuery, ME_QUERY } from '../data/queries/me-query';

interface IMainLayoutProps {
  children: React.ReactChild;
  currentUrl: string;
  isNavVisible?: boolean;
  isUserVisible?: boolean;
  isFooterVisible?: boolean;
  title?: string;
}

export function MainLayout(props: IMainLayoutProps): JSX.Element {
  const { data } = useQuery<IMeQuery>(ME_QUERY);

  const {
    children,
    currentUrl,
    isNavVisible = true,
    isFooterVisible = true,
    title = 'Gossip Nation',
  } = props;

  return (
    <div>
      <Head>
        <title>Gossip Nation</title>
        <meta name="referrer" content="origin" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" type="text/css" href="/static/news.css" />
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <table
        id="hnmain"
        style={{
          backgroundColor: '#ffffff',
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: '0px',
          width: '85%',
          boxShadow: '0px 0px 10px rgb(246,245,245,1)',
        }}
      >
        <tbody>
          <Header
            currentUrl={currentUrl}
            isNavVisible={!!isNavVisible}
            me={data?.me}
            title={title!}
          />
          <tr style={{ height: '10px', backgroundColor: '#ffffff' }} />
          {children}
          {isFooterVisible && <Footer />}
        </tbody>
      </table>
    </div>
  );
}
