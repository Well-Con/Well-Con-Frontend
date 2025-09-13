import React from 'react'

const PatientLogin = () => {
    const [state, setState] = React.useState("Sign-Up"); // login or register
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [name, setName] = React.useState("");
    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(email,password,name);
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
                        <input className='border border-zinc-300 rounded p-2 w-full mt-1' type="text" onChange={()=>setName(e.target.value)} value={name} required/>
                    </div>
                )}
                <div className='w-full'>
                    <p>Email:</p>
                    <input className='border border-zinc-300 rounded p-2 w-full mt-1' type="text" onChange={()=>setEmail(e.target.value)} value={email} required/>
                </div>
                <div className='w-full'>
                    <p>Password:</p>
                    <input className='border border-zinc-300 rounded p-2 w-full mt-1' type="text" onChange={()=>setPassword(e.target.value)} value={password} required/>
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