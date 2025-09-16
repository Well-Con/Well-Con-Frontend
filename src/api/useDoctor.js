
import { axios_instance } from '../lib/axios';
import { useApiAction } from './useApiAction';

const useDoctor = () => {
  const { loading: doctorLoading, runApi } = useApiAction();

  // Register doctor
  const registerDoctor = (payload, callback) =>
    runApi(
      () => axios_instance.post('/v1/signup', payload),
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
  const getDoctorProfile = (email, callback) =>
  runApi(
    () => axios_instance.get(`/getDoctorbyEmail?email=${encodeURIComponent(email)}`),
    "Failed to fetch doctor profile. Please try again",
    callback
  );

  const getAllDoctors = (callback) =>
    runApi(
      () => axios_instance.get('/doctor/getAllDoctors'),
      "Failed to fetch doctors. Please try again",
      callback
    );


  const getDoctorsBySpeciality = (speciality, callback) =>
    runApi(
      () => axios_instance.get(`/getDoctorbySpecialization?speciality=${encodeURIComponent(speciality)}`),
      "Failed to fetch doctors by speciality. Please try again",
      callback
    );  

  return {
    doctorLoading,
    registerDoctor,
    loginDoctor,
    getDoctorProfile,
    getAllDoctors,
    getDoctorsBySpeciality,
  };
};

export default useDoctor;
