import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ItemDetails from 'components/ItemDetails';
import { makeSelectHeroStartingStyle } from 'containers/App/selectors';
import fakeItem from './fakeItem';

class ItemPage extends React.Component {
  render() {
    const {
      heroStartingStyle,
    } = this.props;
    return (
      <ItemDetails
        item={fakeItem}
        startingX={heroStartingStyle.get('x')}
        startingY={heroStartingStyle.get('y')}
        startingWidth={heroStartingStyle.get('width')}
        startingHeight={heroStartingStyle.get('height')}
      />
    );
  }
}

const selector = () => createStructuredSelector({
  heroStartingStyle: makeSelectHeroStartingStyle(),
});

export default connect(selector())(ItemPage);
