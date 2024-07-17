import { ToastAndroid } from 'react-native';
import { storage } from '../Shared/Storage';
import {SERVER_REQUEST} from './Api';

export const loginRequest = async body => {
  try {
    const response = await SERVER_REQUEST(body, '/login', 'POST');
    if(response.token){
        storage.set('token', response.token)
    }
  } catch (e) {
    ToastAndroid.showWithGravityAndOffset(
        e.message,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
  }
};