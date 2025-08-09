import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setemail("");
    setpassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="border border-emerald-500 rounded-2xl p-10 bg-gray-900 shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-emerald-400 mb-6 text-center">
          Welcome Back
        </h2>
        <form
          onSubmit={submitHandler}
          className="flex flex-col gap-4"
        >
          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            required
            type="email"
            placeholder="Enter your E-mail"
            className="w-full outline-none bg-gray-800 text-white border border-emerald-500 text-lg rounded-full py-3 px-5 placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-500 transition"
          />
          <input
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            required
            type="password"
            placeholder="Enter your Password"
            className="w-full outline-none bg-gray-800 text-white border border-emerald-500 text-lg rounded-full py-3 px-5 placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-500 transition"
          />
          <button
            type="submit"
            className="mt-2 w-full bg-emerald-600 hover:bg-emerald-700 text-white text-lg font-medium rounded-full py-3 px-5 transition duration-300"
          >
            Log in
          </button>
        </form>

        {/* Sample Credentials */}
        <div className="mt-6 bg-gray-800 border border-gray-700 rounded-lg p-4 text-sm text-gray-300">
          <p className="font-semibold text-emerald-400 mb-2">💡 Sample Credentials</p>
          <div className="mb-2">
          <div>
            <p className="text-emerald-300">Employee</p>
            <p>Email: <span className="text-white">empname@example.com eg.rahul@example.com</span></p>
            <p>Password: <span className="text-white">123</span></p>
          </div>
        </div>
            <p className="text-emerald-300">Admin</p>
            <p>Email: <span className="text-white">admin@example.com</span></p>
            <p>Password: <span className="text-white">123</span></p>
          </div>
      </div>
    </div>
  );
};

export default Login;
