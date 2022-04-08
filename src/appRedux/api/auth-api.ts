import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BACKEND_API,
  }),
  endpoints: builder => ({
    postLoginUser: builder.mutation({
      query: ({email, password}) => ({
        url: '/login',
        method: 'post',
        body: {
          email,
          password,
        },
      }),
      transformResponse: response => response,
    }),
    postEmailTokenValidation: builder.query({
      query: ({token}) => ({
        url: '/emailtokenvalidation',
        method: 'post',
        body: {
          token,
        },
      }),
      transformResponse: response => response,
    }),
    postRegisterUser: builder.mutation({
      query: ({name, email, password, passwordConfirmation, addresses}) => ({
        url: '/signup',
        method: 'post',
        body: {
          name,
          email,
          password,
          passwordConfirmation,
          addresses,
        },
      }),
      transformResponse: response => response,
    }),
    postRecoverPasswordEmail: builder.mutation({
      query: ({email}) => ({
        url: '/recoverpasswordemail',
        method: 'post',
        body: {
          email,
        },
      }),
      transformResponse: response => response,
    }),
    postPasswordChange: builder.mutation({
      query: ({token, password, passwordConfirmation}) => ({
        url: '/recoverpassword',
        method: 'post',
        body: {
          token,
          password,
          passwordConfirmation,
        },
      }),
      transformResponse: response => response,
    }),
  }),
});

export const {
  usePostLoginUserMutation,
  usePostEmailTokenValidationQuery,
  usePostRegisterUserMutation,
  usePostRecoverPasswordEmailMutation,
  usePostPasswordChangeMutation,
} = authAPI;
