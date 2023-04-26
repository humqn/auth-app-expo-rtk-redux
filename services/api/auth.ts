// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type AuthResponseOk = {
  access_token: string;
};

export type AuthResponseError = {
  message: string;
  statusCode: number;
};

export type AuthResponse = AuthResponseOk & AuthResponseError;

export type AuthApiArg = {
  username: string;
  password: string;
};
// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: 'jwt',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (build) => ({
    login: build.mutation<AuthResponse, AuthApiArg>({
      query: (queryArg) => ({
        url: 'auth/login',
        method: 'POST',
        body: queryArg,
      }),
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useLoginMutation } = authApi;
