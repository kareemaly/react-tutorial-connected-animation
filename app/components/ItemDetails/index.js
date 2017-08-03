import React from 'react';
import PropTypes from 'prop-types';
import ImageAnimation from 'components/ImageAnimation';
import styled from 'styled-components';

const Wrapper = styled.div`
`;

const HeroSpace = styled.div`
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

const getWindowWidth = () => {
  const w = window;
  const d = document;
  const e = d.documentElement;
  const g = d.getElementsByTagName('body')[0];
  return w.innerWidth || e.clientWidth || g.clientWidth;
}

const ItemDetails = ({
  startingX,
  startingY,
  startingWidth,
  startingHeight,
  item,
}) => (
  <Wrapper>
    <HeroSpace />
    <ImageAnimation
      image={item.picture}
      startingX={startingX}
      startingY={startingY}
      startingWidth={startingWidth}
      startingHeight={startingHeight}
      endingX={0}
      endingY={0}
      endingWidth={getWindowWidth()}
      endingHeight={400}
    />
    <Paper>
      <Name>{item.name}</Name>
      <Description>{item.description}</Description>
    </Paper>
  </Wrapper>
);

ItemDetails.propTypes = {
  startingX: PropTypes.number.isRequired,
  startingY: PropTypes.number.isRequired,
  startingWidth: PropTypes.number.isRequired,
  startingHeight: PropTypes.number.isRequired,
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired,
};

export default ItemDetails;
