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
import fakeItems from './fakeItems';
import messages from './messages';

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  onItemClick = (item) => {
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
};

export default connect(null, mapDispatchToProps)(HomePage);
