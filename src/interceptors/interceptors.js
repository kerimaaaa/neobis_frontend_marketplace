import { useContext } from "react";
import { AuthContext } from "./authProvider";
import axios from "axios";
import jwt_decode from 'jwt-decode';
import dayjs from "dayjs";

export const useAxios = () => {
  const { setIsLogged } = useContext(AuthContext);

  const privateApi = axios.create({
    baseURL: 'http://165.22.86.200:8000/auth/'
  });

  privateApi.interceptors.request.use(
    async req => {
      let authToken = localStorage.getItem('access-token');
      if (!localStorage.getItem('access-token')) {
        setIsLogged(false);
        return req;
      }
      const user = jwt_decode(authToken);
      const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
      if (isExpired) {
        try {
          const res = await axios.post(
            'http://165.22.86.200:8000/auth/token/refresh/', 
            { 
              refreshToken: localStorage.getItem('refresh-token') 
            }
          );
          localStorage.setItem('access-token', res.data.accessToken);
          req.headers.Authorization = 'Bearer ' + res.data.accessToken;
        } catch (err) {
          setIsLogged(false);
          localStorage.removeItem('access-token');
          localStorage.removeItem('refresh-token');
        }
      }
      return req;
    },
    err => {
      console.log('Error: ', err.status);
      return err;
    }
  );
  privateApi.interceptors.response.use(
    res => res,
    err => {
      if (err.response.status === 401) {
        setIsLogged(false);
        localStorage.removeItem('access-token');
        localStorage.removeItem('refresh-token');
      }
      return err;
    }
  )

  return privateApi;
}