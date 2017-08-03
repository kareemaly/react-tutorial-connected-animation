import { fromJS } from 'immutable';
import {
  SET_HERO_STARTING_STYLE,
} from './constants';

const initialState = fromJS({
  startingHeroStyle: {
    x: 0,
    y: 0,
    height: 0,
    width: 0,
  },
});

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_HERO_STARTING_STYLE:
      return state
        .setIn(['startingHeroStyle', 'x'], action.x)
        .setIn(['startingHeroStyle', 'y'], action.y)
        .setIn(['startingHeroStyle', 'width'], action.width)
        .setIn(['startingHeroStyle', 'height'], action.height);
    default:
      return state;
  }
}
