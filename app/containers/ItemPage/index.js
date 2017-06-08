import React from 'react';
import ItemDetails from 'components/ItemDetails';
import fakeItem from './fakeItem';

class ItemPage extends React.Component {
  render() {
    return (
      <ItemDetails
        item={fakeItem}
      />
    );
  }
}

export default ItemPage;
