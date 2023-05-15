import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const SignUp = () => {
  const [error,setError]=useState('')
  const {createUser} = useContext(AuthContext)


    const handleSignUp =(e) =>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const confirm = form.confirm.value
        console.log(email,password,confirm)

        setError('')
        
        if(password !== confirm){
          setError("Your password did not match")
          return
        }else if(password.length < 6){
          setError('Password must be 6 character or longer')
          return
        }
        createUser(email,password)
        .then(result =>{
          const loggedUser = result.user
          console.log(loggedUser)
        }).catch(error=>{
          setError(error.message)
        })
    }
    return (
        <div className=" min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center ">
            <h1 className="text-4xl text-gray-600 font-bold">Sign up now!</h1>
            
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name='email' type="email" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name='password' type="password" placeholder="password" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input name='confirm' type="password" placeholder="confirm password" className="input input-bordered" />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-warning w-full bg-opacity-40  capitalize text-lg">Sign up</button>
              </div>
                <label className="label">
                  <small>Already have account? 
                  <Link to='/login' className=" link link-hover text-warning"> Sign in</Link></small>
                </label>
            <p className='text-error'>{error}</p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SignUp;