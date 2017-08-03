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
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { FormattedMessage } from 'react-intl';
import ItemsGrid from 'components/ItemsGrid';
import { setHeroStartingStyle } from 'containers/App/actions';
import fakeItems from './fakeItems';
import messages from './messages';

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  onItemClick = (item, event) => {
    const width = event.currentTarget.offsetWidth;
    const height = event.currentTarget.offsetHeight;
    const x = event.currentTarget.offsetLeft;
    const y = event.currentTarget.offsetTop - window.scrollY;

    this.props.setHeroStartingStyle({ width, height, x, y });
    // Redirect to item page
    this.props.push(`/item`);
  }

  render() {
    return (
      <ItemsGrid
        items={fakeItems}
        onItemClick={this.onItemClick}
      />
    );
  }
}

const mapDispatchToProps = {
  push,
  setHeroStartingStyle,
};

export default connect(null, mapDispatchToProps)(HomePage);
