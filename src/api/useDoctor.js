
import { axios_instance } from '../lib/axios';
import { useApiAction } from './useApiAction';

const useDoctor = () => {
  const { loading: doctorLoading, runApi } = useApiAction();

  // Register doctor
  const registerDoctor = (payload, callback) =>
    runApi(
      () => axios_instance.post('/doctor/create', payload),
      'Failed to register doctor. Please try again',
      callback,
    );

  // Doctor login
  const loginDoctor = (payload, callback) =>
    runApi(
      () => axios_instance.post('/doctor/login', payload),
      'Failed to login doctor. Please try again',
      callback,
    );

  // Get doctor profile (/doctor/me)
  const getDoctorProfile = (callback) =>
    runApi(
      () => axios_instance.get('/doctor/me'),
      'Failed to fetch doctor profile. Please try again',
      callback,
    );

  return {
    doctorLoading,
    registerDoctor,
    loginDoctor,
    getDoctorProfile,
  };
};

export default useDoctor;
