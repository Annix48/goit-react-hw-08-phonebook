// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints

export const contactsApi = createApi({
  reducerPath: 'contacts',
  // baseQuery: fetchBaseQuery({
  //   baseUrl: 'https://6263d2ab005a66e1e3b76fcd.mockapi.io',
  // }),
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      } else {
        headers.delete('authorization');
      }

      return headers;
    },
  }),

  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contacts'],
      keepUnusedDataFor: 2,
    }),
    // getContactById: builder.query({
    //   query: id => ({
    //     url: `/contacts/${id}`,
    //     method: 'GET',
    //   }),
    //   providesTags: ['Contacts'],
    // }),
    createContact: builder.mutation({
      query: contact => ({
        url: `/contacts`,
        method: 'POST',
        body: contact,
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),

    editContact: builder.mutation({
      query: ({ id, name, number }) => ({
        url: `/contacts/${id}`,
        method: 'PATCH',
        body: { name, number },
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const {
  useGetContactsQuery,
  // useGetContactByIdQuery,
  useCreateContactMutation,
  useDeleteContactMutation,

  useEditContactMutation,
} = contactsApi;
