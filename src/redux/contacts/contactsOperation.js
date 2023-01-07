// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const getContacts = createAsyncThunk(
//   'contacts/getContacts',
//   async () => {
//     try {
//       const { data } = await axios.get('/contacts');

//       return data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );
// export const getContactsById = createAsyncThunk(
//   'contacts/getContactById',
//   async id => {
//     try {
//       const { data } = await axios.get(`/contacts/${id}`);

//       return data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );
// export const createContact = createAsyncThunk(
//   'contacts/reateContact',
//   async (id, contact) => {
//     try {
//       const { data } = await axios.post(`/contacts`, contact);

//       return data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );
// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async id => {
//     try {
//       const { data } = await axios.post(`/contacts/${id}`);

//       return data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );
// export const editContact = createAsyncThunk(
//   'contacts/editContact',
//   async (id, contact) => {
//     try {
//       const { data } = await axios.patch(`/contacts/${id}`, contact);

//       return data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );
