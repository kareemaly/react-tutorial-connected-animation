/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import ImageAnimation from 'components/ImageAnimation';
import messages from './messages';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ImageAnimation
        startingWidth={400}
        startingHeight={200}
        startingX={400}
        startingY={400}

        endingWidth={1000}
        endingHeight={400}
        endingX={0}
        endingY={0}

        image={'https://s-media-cache-ak0.pinimg.com/originals/08/26/6b/08266ba5ae9c33e5522903779bd72330.jpg'}
      />
    );
  }
}
