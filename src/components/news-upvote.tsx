import { useMutation } from '@apollo/client';
import Router from 'next/router';
import * as React from 'react';
import { parse } from 'url';

import { UPVOTE_NEWS_ITEM_MUTATION } from '../data/mutations/upvote-news-item-mutation';

export interface INewsUpvoteProps {
  id: number;
  isUpvoteVisible?: boolean;
  upvoted?: boolean;
  upvoteCount: number;
}

export const newsUpvoteFragment = `
  fragment NewsUpvote on NewsItem {
    id
    upvoted
    upvoteCount
  }
`;

export function NewsUpvote(props: INewsUpvoteProps): JSX.Element {
  const { id, isUpvoteVisible = true, upvoted, upvoteCount } = props;

  const [upvoteNewsItem] = useMutation(UPVOTE_NEWS_ITEM_MUTATION, {
    onError: () => Router.push('/login', `/vote?id=${id}&how=up&goto=news`),
    variables: { id },
  });

  return (
    <div style={{ verticalAlign: 'top', textAlign: 'center', float: 'left' }} className="votelinks">
      <div>
        {isUpvoteVisible && (
          <a
            className={upvoted ? 'nosee' : ' '}
            onClick={(): Promise<any> => upvoteNewsItem()}
            style={{ cursor: 'pointer' }}
          >
            <div className="votearrow" title="upvote" />
          </a>
        )}
      </div>
      <div>
        <span style={{ padding: '1px' }}>{upvoteCount}</span>
      </div>
      <div>
        {isUpvoteVisible && (
          <a
            className={upvoted ? 'nosee' : ' '}
            onClick={(): Promise<any> => upvoteNewsItem()}
            style={{ cursor: 'pointer' }}
          >
            <div className="downarrow" title="downvote" />
          </a>
        )}
      </div>
    </div>
  );
}
