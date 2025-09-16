import { axios_instance } from '../lib/axios';
import { useApiAction } from './useApiAction';

const useUser = () => {
  const { loading: userLoading, runApi } = useApiAction();

  // Get user by ID
  const getUserById = (id, callback) =>
    runApi(
      () => axios_instance.get(`/getUserbyId/${id}`),
      'Failed to fetch user details. Please try again',
      callback
    );

  // (Optional) Get all users
  const getAllUsers = (callback) =>
    runApi(
      () => axios_instance.get('/user/getAllUsers'),
      'Failed to fetch users. Please try again',
      callback
    );

  // (Optional) Update user
  const updateUser = (id, payload, callback) =>
    runApi(
      () => axios_instance.put(`/user/update/${id}`, payload),
      'Failed to update user. Please try again',
      callback
    );

  return {
    userLoading,
    getUserById,
    getAllUsers,
    updateUser,
  };
};

export default useUser;
