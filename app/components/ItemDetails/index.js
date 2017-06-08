import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
`;

const Hero = styled.div`
  background: url('${(props) => props.image}');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 400px;
`;

const Paper = styled.div`
  padding: 24px;
`;

const Name = styled.h4`
`;

const Description = styled.p`
`;

const ItemDetails = ({ item }) => (
  <Wrapper>
    <Hero
      image={item.picture}
    />
    <Paper>
      <Name>{item.name}</Name>
      <Description>{item.description}</Description>
    </Paper>
  </Wrapper>
);

ItemDetails.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired,
};

export default ItemDetails;
