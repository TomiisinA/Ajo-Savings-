import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log("Login Data:", data);
    // navigate("/dashboard");

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      alert("No account found. Please sign up.");
      return;
    }

    if (
      data.email === savedUser.email &&
      data.password === savedUser.password
    ) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/dashboard");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* ================= LEFT (FORM) ================= */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          {/* Logo */}
          <Link to="/">
            <img src="logo.png" alt="MoneyBag" className="w-40 h-auto" />
          </Link>

          {/* Heading */}
          <h1 className="text-4xl font-semibold text-gray-300 mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-300 mb-8">
            Welcome back! please enter your details
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email",
                  },
                })}
                type="email"
                placeholder="Enter your email"
                className="w-full h-11 px-4 rounded-md border border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters",
                  },
                })}
                type="password"
                placeholder="********"
                className="w-full h-11 px-4 rounded-md border border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Remember / Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" className="accent-purple-600" />
                Keep me signed in
              </label>

              <Link
                to="/forgot-password"
                className="text-primary-100 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-primary-100 text-white h-11 rounded-md font-medium hover:bg-purple-700 transition"
            >
              Login
            </button>
          </form>

          {/* Footer Links */}
          <div className="mt-6 text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-purple-600 font-medium hover:underline"
            >
              Signup
            </Link>
          </div>

          <p className="mt-4 text-center text-sm text-gray-400">
            Login to Admin
          </p>
        </div>
      </div>

      {/* ================= RIGHT (IMAGE) ================= */}
      <div className="hidden lg:flex w-1/2 bg-[#C4B5FD] items-center justify-center">
        <img src="image1.svg" alt="Illustration" className="max-w-md" />
      </div>
    </div>
  );
};

export default SignIn;
