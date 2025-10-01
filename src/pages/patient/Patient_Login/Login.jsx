import React from 'react'
import usePatient from '../../../api/usePatient'
import { useNavigate } from 'react-router-dom';

const PatientLogin = () => {
    const navigate = useNavigate();
    const [state, setState] = React.useState("Sign-Up"); // login or register
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [name, setName] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const { registerPatient, loginPatient} = usePatient();
    const onSubmitHandler = (e) => {
        e.preventDefault();
        setLoading(true);
      const payload =
      state === "Sign-Up"
        ? { name, email, password }
        : { email, password };

        if (state === "Sign-Up") {
      registerPatient(payload, (success, data) => {
        setLoading(false);
        if (success) {
          console.log("Signup successful:", data);
          
          setState("Login");
          navigate(()=>'/patient/home')
        } else {
          console.error("Signup failed");
        }
      });
    } else {
      loginPatient(payload, (success, data) => {
        setLoading(false);
        if (success) {
          console.log("Login successful:", data);
          alert("Login successful!");
          // You can save token in localStorage or context here
        } else {
          console.error("Login failed ");
        }
      });
    }
    }
  return (
    <div>
        <form action="" className='min-h-[80vh] flex items-center h-screen' onSubmit={onSubmitHandler}>
            <div className='flex flex-col gap-4 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border border-gray-300 rounded-xl text-zinc-600 text-sm shadow-lg'>
                <p className='font-semibold text-2xl'>{state==='Sign-Up' ? "Create Account" : "Login"}</p>
                <p>{state==='Sign-Up' ? "Please sign up to book appointment" : "Please log in to book appointment"}</p>
                {state==='Sign-Up' && (
                    <div className='w-full'>
                        <p>Name:</p>
                        <input className='border border-zinc-300 rounded p-2 w-full mt-1' type="text" onChange={(e)=>setName(e.target.value)} value={name} required/>
                    </div>
                )}
                <div className='w-full'>
                    <p>Email:</p>
                    <input className='border border-zinc-300 rounded p-2 w-full mt-1' type="text" onChange={(e)=>setEmail(e.target.value)} value={email} required/>
                </div>
                <div className='w-full'>
                    <p>Password:</p>
                    <input className='border border-zinc-300 rounded p-2 w-full mt-1' type="text" onChange={(e)=>setPassword(e.target.value)} value={password} required/>
                </div>
                <button className='w-full bg-green-500 text-white cursor-pointer p-2 rounded-md text-base'>{state==='Sign-Up' ? "Create Account" : "Login"}</button>
                {state==='Sign-Up' ? 
                 <p>Already have an account? <span className='text-green-500 cursor-pointer underline' onClick={()=>setState('Login')}>Login here</span></p> :
                 <p>Create an new account? <span className='text-green-500 cursor-pointer underline' onClick={()=>setState('Sign-Up')}>Click here</span></p>}
            </div>
        </form>
    </div>
  )
}

export default PatientLogin