import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
const Login = () => {

  const {logInUser, loginWithGoogle} = useContext(AuthContext);
  console.log(logInUser)
  const navigate = useNavigate()


  const handleLogin = (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      console.log(email, password);

      //login user
      logInUser(email, password)
      .then(result => {
        console.log(result);
        e.target.reset();
        navigate('/')
      })
      .catch(error => {
        console.log(error);
      })
  }
  const handleGoogleLogin = () =>{
    loginWithGoogle()
    .then(result => {
      console.log(result);
      navigate('/')
    })
    .catch(error => {
        console.log(error);
    })
  }
  return (
    <div>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse py-24">
          <div className="card w-full  shadow-2xl bg-base-100">
            <form className="card-body w-[400px]" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <h1>New here? Please <span className="font-bold text-primary"><Link to="/register">Register</Link></span></h1>
            </form>
            <button onClick={handleGoogleLogin} className="btn">Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
