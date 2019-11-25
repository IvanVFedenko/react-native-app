import * as action from './action_constants';
import * as api from '../../api/api';

export const get_photos = value => ({ type: action.GET_PHOTOS, value });

export const get_photos_thunk = () => async dispatch => {
  const photos = await api.getPhotos();
  dispatch(get_photos(photos));
};
