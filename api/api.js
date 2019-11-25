import axios from 'axios';
import { URL } from './api_constants';

export const getPhotos = async () => {
  const request = await axios.get(URL);
  const photos = request.data;
  return photos;
};
