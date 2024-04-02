import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
  const {createUser} = useContext(AuthContext);
  console.log(createUser)
  const handleRegister = (e) => {
      e.preventDefault();
      const name = e.target.name.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
      console.log(name, email, password);

      // create user in firebase
      createUser(email, password)
      .then(result => {
        console.log(result.user)
      })
      .catch(error => {
        console.log(error)
      })
      
  }
  return (
    <div>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse py-24">
          <div className="card w-full  shadow-2xl bg-base-100">
            <form className="card-body w-[400px]" onSubmit={handleRegister}>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  name="name"
                  required
                />
              </div>
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
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <h1>Already have account? Please <span className="font-bold text-primary"><Link to="/login">Login</Link></span></h1>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
