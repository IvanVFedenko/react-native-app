import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { get_photos_reducer } from './reducers/reducers';

const rootReducer = combineReducers({
  photos_list: get_photos_reducer,
});

export const photos = ({ photos_list }) => photos_list.all_photos;

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
