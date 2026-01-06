import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

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
    <div className="min-h-screen my-6 flex items-center justify-center px-6">
      <div className="max-w-6xl w-full flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden">
        {/* ================= LEFT / FORM ================= */}
        <div className="flex-3 bg- p-8 md:p-14">
          <div>
            <img src="logo.png" alt="Logo" className="w-40 h-auto" />
          </div>
          <div className="bg-white-200 p-6">
            <h1 className="text-2xl text-black-100 font-semibold mb-8">Create Account</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* First Name */}
              <div className="flex flex-col">
                <label className="text-body mb-1">First Name</label>
                <input
                  {...register("firstName", { required: "Enter first name" })}
                  type="text"
                  className="h-12 px-4 rounded-md border border-primary-100 focus:outline-none focus:ring-2 focus:ring-primary-100"
                />
                {errors.firstName && (
                  <span className="text-red-500 text-xs mt-1">
                    {errors.firstName.message}
                  </span>
                )}
              </div>

              {/* Last Name */}
              <div className="flex flex-col">
                <label className="text-body mb-1">Last Name</label>
                <input
                  {...register("lastName", { required: "Enter last name" })}
                  type="text"
                  className="h-12 px-4 rounded-md border border-primary-100 focus:outline-none focus:ring-2 focus:ring-primary-100"
                />
                {errors.lastName && (
                  <span className="text-red-500 text-xs mt-1">
                    {errors.lastName.message}
                  </span>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label className="text-body mb-1">Email</label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    validate: (value) =>
                      value.includes("@") || "Enter a valid email",
                  })}
                  type="email"
                  className="h-12 px-4 rounded-md border border-primary-100 focus:outline-none focus:ring-2 focus:ring-primary-100"
                />
                {errors.email && (
                  <span className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </span>
                )}
              </div>

              {/* Password */}
              <div className="flex flex-col">
                <label className="text-body mb-1">Password</label>
                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Minimum 6 characters",
                    },
                  })}
                  type="password"
                  className="h-12 px-4 rounded-md border border-primary-100 focus:outline-none focus:ring-2 focus:ring-primary-100"
                />
                {errors.password && (
                  <span className="text-red-500 text-xs mt-1">
                    {errors.password.message}
                  </span>
                )}
              </div>

              {/* Country */}
              <div className="flex flex-col">
                <label className="text-body mb-1">Country</label>
                <input
                  type="text"
                  className="h-12 px-4 rounded-md border border-primary-100 focus:outline-none focus:ring-2 focus:ring-primary-100"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-50 bg-primary-100 text-white text-lg py-3 rounded-md hover:opacity-90 transition"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Sign in link */}
          <p className="text-body mt-6 text-center">
            Already have an account?{" "}
            <Link
              to="/signIn"
              className="text-primary-100 font-semibold hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>

        {/* ================= RIGHT / IMAGE ================= */}
        <div className="hidden md:flex flex-2 items-center justify-center bg-purple-200">
          <img src="image1.svg" alt="" className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
