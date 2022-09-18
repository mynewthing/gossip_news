import Link from 'next/link';
import * as React from 'react';

interface IHeaderNavProps {
  userId?: string;
  currentUrl: string;
  isNavVisible: boolean;
  title: string;
}

export function HeaderNav(props: IHeaderNavProps): JSX.Element {
  const { userId, currentUrl, isNavVisible, title } = props;

  return isNavVisible ? (
    <span className="pagetop">
      <b className="hnname">
        <Link href="/" as="/news">
          <a id="navbarcolor">{title}</a>
        </Link>
      </b>
      <br />
      &nbsp;
      {userId && (
        <Link href="/newswelcome">
          <a id="navbarcolor">welcome</a>
        </Link>
      )}
      {userId && ' | '}
      <Link href="/newest">
        <a className={currentUrl === '/newest' ? 'topsel' : ''} id="navbarcolor">
          NEWS
        </a>
      </Link>
      {' | '}
      <Link href="/newcomments">
        <a className={currentUrl === '/newcomments' ? 'topsel' : ''} id="navbarcolor">
          PAST
        </a>
      </Link>
      {' | '}
      <Link href="/show">
        <a className={currentUrl === '/show' ? 'topsel' : ''} id="navbarcolor">
          TV
        </a>
      </Link>
      {' | '}
      <Link href="/ask">
        <a className={currentUrl === '/ask' ? 'topsel' : ''} id="navbarcolor">
          FILM
        </a>
      </Link>
      {' | '}
      <Link href="/submit">
        <a className={currentUrl === '/submit' ? 'topsel' : ''} id="navbarcolor">
          SUBMIT
        </a>
      </Link>
      {currentUrl === '/best' && ' | '}
      {currentUrl === '/best' && (
        <Link href="/best">
          <a className="topsel" id="navbarcolor">
            best
          </a>
        </Link>
      )}
    </span>
  ) : (
    <span className="pagetop">
      <b>{title}</b>
    </span>
  );
}
