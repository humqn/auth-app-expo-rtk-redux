import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { set_jwt } from '../store/authSlice';
import * as SecureStore from 'expo-secure-store';
import { useEffect } from 'react';

export const useJwt = () => {
  const jwt = useSelector((state: RootState) => state.jwt);
  const dispatch = useDispatch();
  useEffect(() => {
    /* Get jwt from localStorage and mount it in Redux Store */
    SecureStore.getItemAsync('jwt')
      .then((jwt) => {
        if (jwt) {
          dispatch(set_jwt(jwt));
        } else {
          dispatch(set_jwt('null'));
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(set_jwt('null'));
      });
  }, []);

  return jwt;
};
