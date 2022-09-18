import Link from 'next/link';
import * as React from 'react';

import { HeaderNav } from './header-nav';

export interface IHeaderProps {
  me: { id: string; karma: number } | undefined;
  currentUrl: string;
  isNavVisible: boolean;
  title: string;
}

export function Header(props: IHeaderProps): JSX.Element {
  const { currentUrl, isNavVisible, me, title } = props;

  return (
    <tr>
      <td style={{ backgroundColor: '#9971cd', padding: '0px' }}>
        <table style={{ border: '0px', padding: '2px', borderSpacing: '0px', width: '100%' }}>
          <tbody>
            <tr>
              <td style={{ width: '18px', padding: '0px', paddingRight: '4px' }}>
                <Link href="/">
                  <a>
                    <img
                      src="/static/y18.gif"
                      style={{
                        border: '1px',
                        borderColor: 'white',
                        borderStyle: 'solid',
                        height: '18px',
                        width: '18px',
                      }}
                    />
                  </a>
                </Link>
              </td>
              <td style={{ lineHeight: '20px', height: '60px', padding: '4px' }}>
                <HeaderNav currentUrl={currentUrl} isNavVisible={isNavVisible} title={title} />
              </td>
              <td
                style={{
                  textAlign: 'right',
                  padding: '0px',
                  paddingRight: '4px',
                }}
              >
                {me ? (
                  <span className="pagetop">
                    <Link href={`/user?id=${me.id}`}>
                      <a id="navbarcolor">{me.id}</a>
                    </Link>
                    {` (${me.karma}) | `}
                    <a
                      href={`/logout?auth=d78ccc2c6120ffe08f32451519c2ff46d34c51ab&amp;goto=${currentUrl}`}
                      id="navbarcolor"
                    >
                      logout
                    </a>
                  </span>
                ) : (
                  <span className="pagetop">
                    <Link href={`/login?goto=${currentUrl}`}>
                      <a id="navbarcolor">login</a>
                    </Link>
                  </span>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
}
