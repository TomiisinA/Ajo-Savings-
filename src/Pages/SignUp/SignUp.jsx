import "./SignUp.css";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="form-container">
      <div className="logo"></div>
      <div className="form-body">
        <div>
          <h1>Create Account</h1>
        </div>
        <div>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-input">
              <label htmlFor="firstName">First Name</label>
              <input
                {...register("firstName", {
                  required: "Enter first name",
                })}
                type="text"
              />
        
            </div>
            <div className="form-input">
              <label htmlFor="lastName">Last Name</label>
              <input
                {...register("lastName", {
                  required: true,
                })}
                type="text"
              />
            </div>
            <div className="form-input">
              <label htmlFor="email">Email</label>
              <input
                {...register("email", {
                  required: true,
                  validate: (value) => value.includes("@"),
                })}
                type="email"
              />
              {errors.email && (
                <div className="error-msg">{errors.email.message}</div>
              )}
            </div>
            <div className="form-input">
              <label htmlFor="password">Password</label>
              <input
                {...register("password", { required: true, minLength: 2 })}
                type="password"
              />
              {errors.password && <div>{errors.password.message}</div>}
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
