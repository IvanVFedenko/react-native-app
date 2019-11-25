import { GET_PHOTOS } from '../actions/action_constants';

const initialState = {
  all_photos: [],
};

export const get_photos_reducer = (state = initialState, action) => {
  const actions = {
    [GET_PHOTOS]: () => ({
      ...state,
      all_photos: action.value,
    }),
  };
  if (action.type in actions) {
    return actions[action.type](action);
  }
  return state;
};
