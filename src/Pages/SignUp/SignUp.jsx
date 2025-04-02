import "./SignUp.css";
import {useForm} from "react-hook-form"

const SignUp = () => {
  const {register}= useForm();
  return (
    <div className="form-container">
      <div className="logo"></div>
      <div className="form-body">
        <div>
          <h1>Create Account</h1>
        </div>
        <div>
          <form action="">
            <div className="form-input">
              <label htmlFor="firstName">First Name</label>
              <input {...register("firstName")} type="text" />
            </div>
            <div className="form-input">
              <label htmlFor="lastName">Last Name</label>
              <input {...register("firstName")} type="text" />
            </div>
            <div className="form-input">
              <label htmlFor="email">Email</label>
              <input type="email" />
            </div>
            <div className="form-input">
              <label htmlFor="password">Password</label>
              <input type="password" />
            </div>
            <div className="form-input">
              <label htmlFor="email">Country</label>
              <input type="" />
            </div>
            <button>Submit</button>
          </form>
          <div>
            <p>
              Already have an Account? <span>Sign In</span>
            </p>
          </div>
        </div>
      </div>
      <div className="right">
        <img src="image1.svg" alt="" />
      </div>
    </div>
  );
};

export default SignUp;
