import React, { useState, useContext } from "react";
import usePatient from '../../../api/usePatient'
import { useNavigate } from 'react-router-dom';

import toast from "react-hot-toast";
import { UserContext } from '../../../context/UserContext';

const PatientLogin = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [state, setState] = React.useState("Sign-Up"); // login or register
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [age, setage] = React.useState("");
  const [phoneNo, setPhoneNo] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const { registerPatient, loginPatient } = usePatient();
  const [error, setError] = useState("");
  const validateForm = () => {
    if (state === "Sign-Up") {
      if (phoneNo.length !== 10) {
         toast.error("Phone number must be exactly 10 digits");
        return false;
      }
      if (password.length < 6) {
        toast.error("Password must be at least 6 characters long");
        return false;
      }
    
    }
    
    return true;
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(name )
     if (!validateForm()) {
      return
     } // call validation function
    setLoading(true);
    
    const payload =
      state === "Sign-Up"
        ? { name, email, password, phoneNo, gender,age: Number(age) , role: "PATIENT" }
        : { email, password };

    if (state === "Sign-Up") {
      registerPatient(payload, (success, data) => {
        setLoading(false);
        if (success) {
          console.log("Signup successful:", data);
          setUser(data.user);
           localStorage.setItem("token", JSON.stringify(data.token));
          // localStorage.setItem("token", data.token);
          toast.success("Signup successful!");

          setState("Login");
          navigate('/patient/home');
        } else {
           toast.error("Signup failed. Try again.");
        }
      });
    } else {
      loginPatient(payload, (success, data) => {
        setLoading(false);
        if (success) {
          console.log("Login hogaya:", data);
           setUser(data.user);
          localStorage.setItem("token", data.token);
           toast.success("Login successful!");
          navigate("/patient/home");
          // You can save token in localStorage or context here
        } else {
          toast.error("Invalid email or password");
        }
      });
    }
  }
  return (
    <div>
      <form action="" className='min-h-[80vh] flex items-center h-screen' onSubmit={onSubmitHandler}>
        <div className='flex flex-col gap-4 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border border-gray-300 rounded-xl text-zinc-600 text-sm shadow-lg'>
          <p className='font-semibold text-2xl'>{state === 'Sign-Up' ? "Create Account" : "Login"}</p>
          <p>{state === 'Sign-Up' ? "Please sign up to book appointment" : "Please log in to book appointment"}</p>
          {state === 'Sign-Up' && (
            <>
              {/* 🔹 Name field */}
              <div className="w-full">
                <p>Name:</p>
                <input
                  className="border border-zinc-300 rounded p-2 w-full mt-1"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  required
                />
              </div>


              {/* 🔹 Phone Number field */}
              <div className="w-full">
                <p>Phone Number:</p>
                <input
                  className="border border-zinc-300 rounded p-2 w-full mt-1"
                  type="number"
                  onChange={(e) => setPhoneNo(e.target.value)}
                  value={phoneNo}
                  required
                />
              </div>
              {/* 🔹 Age field */}
              <div className="w-full">
                <p>Age:</p>
                <input
                  className="border border-zinc-300 rounded p-2 w-full mt-1"
                  type="number"
                  onChange={(e) => setage(e.target.value)}
                  value={age}
                  required
                />
              </div>
              {/* 🔹 Gender Dropdown */}
              <div className="w-full">
                <p>Gender:</p>
                <select
                  className="border border-zinc-300 rounded p-2 w-full mt-1"
                  onChange={(e) => setGender(e.target.value)}
                  value={gender}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  
                </select>
              </div>
            </>
          )}
          <div className='w-full'>
            <p>Email:</p>
            <input className='border border-zinc-300 rounded p-2 w-full mt-1' type="text" onChange={(e) => setEmail(e.target.value)} value={email} required />
          </div>
          <div className='w-full'>
            <p>Password:</p>
            <input className='border border-zinc-300 rounded p-2 w-full mt-1' type="password" onChange={(e) => setPassword(e.target.value)} value={password} required />
          </div>
          <button type="submit" className='w-full bg-green-500 text-white cursor-pointer p-2 rounded-md text-base'>{state === 'Sign-Up' ? "Create Account" : "Login"}</button>
          {state === 'Sign-Up' ?
            <p>Already have an account? <span className='text-green-500 cursor-pointer underline' onClick={() => setState('Login')}>Login here</span></p> :
            <p>Create an new account? <span className='text-green-500 cursor-pointer underline' onClick={() => setState('Sign-Up')}>Click here</span></p>}
        </div>
      </form>
    </div>
  )
}

export default PatientLogin