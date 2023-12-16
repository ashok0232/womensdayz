import React from 'react';
import { useForm } from 'react-hook-form';

const Login = ({setShowLogin}) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Handle login logic here (e.g., validate credentials)
    console.log('Login data:', data);
  };

  return (
    <>
      <h3 className="text-center">Login</h3>
      <form className="border w-50 mx-auto p-5 mt-4" onSubmit={handleSubmit(onSubmit)}>
        <label className="mb-3">Username</label>
        <input type="text" {...register('username', { required: 'Username is required' })} className="form-control rounded-0" />
        {errors.username && <p className="text-danger">{errors.username.message}</p>}

        <label className="mb-3">Password</label>
        <input type="password" {...register('password', { required: 'Password is required' })} className="form-control rounded-0" />
        {errors.password && <p className="text-danger">{errors.password.message}</p>}

        <label className="mt-3">
          <input type="checkbox" className="p-2" />
          <span className="ps-1">Remember me</span>
        </label>

        <button className="d-block btn btn-dark mt-3 rounded-0 w-100" type="submit">Login</button>

        <button onClick={()=>setShowLogin(false)} className="mt-3 w-100 text-center border-0 bg-white">Don’t have an Account. <a href="#" className='text-decoration-none'>Sign up</a> here</button>
      </form>
    </>
  );
};

export default Login;
     