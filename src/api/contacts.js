import axios from 'axios';

axios.defaults.baseURL = 'https://683c446f28a0b0f2fdc6a359.mockapi.io/api/v1';

export const getContacts = async () => {
  const { data } = await axios({
    url: `/contacts`,
    method: 'get',
  });
  return data;
};

export const getContactById = async id => {
  const { data } = await axios({
    url: `/contacts/${id}`,
    method: 'get',
  });
  return data;
};

export const addContact = async body => {
  const { data } = await axios({
    url: `/contacts`,
    method: 'post',
    data: body,
  });
  return data;
};

export const deleteContactById = async id => {
  const { data } = await axios({
    url: `/contacts/${id}`,
    method: 'delete',
  });
  return data;
};
