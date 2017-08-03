import {
  SET_HERO_STARTING_STYLE
} from './constants';

export const setHeroStartingStyle = ({ width, height, x, y }) => ({
  type: SET_HERO_STARTING_STYLE,
  width,
  height,
  x,
  y,
});
