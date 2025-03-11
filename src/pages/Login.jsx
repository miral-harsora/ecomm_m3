import React, { useState } from 'react';
import {  emailRegex, passwordRegex } from '../helper/Regex';
const Login = () => {
    const [email,setEmail]=useState()
    const [password,setPassword] = useState()
    const [error,setError] = useState({emailError:"",passwordError:""})
    const [islogin,setIsLogin]=useState(false)
    const [formValid, setFormValid] = useState(false)
    const validate=(e)=>{
        if(e.target.id=="email"){
            console.log(e.target.value)
            handleEmail(e.target.value)
        }else if(e.target.id=="password"){
            handlePassword(e.target.value)
        }
    }
    const handleEmail=(email)=>{
        let err = error.emailError;
        let isValid = formValid
        if (email.trim() === "") {
            err = "This is required!"
            isValid = false;
        } else if (!emailRegex.test(email)) {
            err = "Enter a valid email"
            isValid = false;
        } else {
            err = ""
            isValid = true;
        }
        setError({ ...error, emailError: err })
        setFormValid(isValid)
        setEmail(email)
        return isValid
    }
    const handlePassword=(password)=>{
        let err = error.passwordError;
        let isValid = formValid
        if (password.trim() === "") {
            err = "This is required!"
            isValid = false;
        } else if (password.trim().length<8) {
            err = "Enter atleast 8 characters including uppercase,lowercase and a special character!"
            isValid = false;
        }else if (!passwordRegex.test(password)) {
            err = "Enter a valid password"
            isValid = false;
        } else {
            err = ""
            isValid = true;
        }
        setError({ ...error, passwordError: err })
        setFormValid(isValid)
        setPassword(password)
        return isValid
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(handleEmail(email)  &&  handlePassword(password)){
            setEmail("")
            setPassword("")
            setFormValid(false)
            //setError({fnError:"",lnError:"",emailError:"",contactError:"",passwordError:""})
            alert("Account created successfully!")
        }
        else{
            alert("Please enter correct details!")
        }
    
    }
    return (
        <div className="bg-[#F7A8C4] h-screen">
            <div className='mx-auto  w-[100%]'>
                <div className='flex justify-center my-4 relative top-25'>
                    <form onSubmit={(e)=>handleSubmit(e)}>
                        <div className='flex flex-col p-4  bg-white my-4 rounded'>
                            <p className='font-bold text-3xl'>Connect with Us – Login | Sign Up</p>
                            <label htmlFor='email' className='my-2'>Email</label>
                           
                            <input type='email' id='email' placeholder='Enter your email' className='border-[1px] border-gray-300 p-2 rounded' onChange={(e)=>validate(e)} value={email}/>
                            
                            <p className='text-red-300'>{error.emailError}</p>
                            <label htmlFor='password' className='my-2'>Password</label>
                            <input type='password' id='password' placeholder='Enter your password' className='border-[1px] border-gray-300 p-2 rounded' onChange={(e)=>validate(e)} value={password}/>
                            <p className='text-red-300'>{error.passwordError}</p>
                            <button className='bg-[#F7569B] p-2 my-2 rounded text-white'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;