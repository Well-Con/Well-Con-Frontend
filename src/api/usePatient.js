import { axios_instance } from '../lib/axios';
import { useApiAction } from './useApiAction';

const usePatient = () => {
  const { loading: patientLoading, runApi } = useApiAction();

  // Register patient
  const registerPatient = (payload, callback) =>
    runApi(
      () => axios_instance.post('/auth/signupUser', payload),
      'Failed to register patient. Please try again',
      callback,
    );

  // Patient login
  const loginPatient = (payload, callback) =>
    runApi(
      () => axios_instance.post('/auth/loginUser', payload),
      'Failed to login patient. Please try again',
      callback,
    );

  // Get patient profile
  const getPatientProfile = (email, callback) =>
    runApi(
      () => axios_instance.get(`/patient/getByEmail?email=${encodeURIComponent(email)}`),
      'Failed to fetch patient profile. Please try again',
      callback,
    );

  return {
    patientLoading,
    registerPatient,
    loginPatient,
    getPatientProfile,
  };
};

export default usePatient;
