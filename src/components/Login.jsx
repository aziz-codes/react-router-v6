import React from "react";

const Login = () => {
  return (
    <div className="flex h-screen w-full justify-center items-center">
      <div className="w-96 h-96 rounded-md border px-2 py-2">
        <div className="flex flex-col gap-3 w-full">
          <input
            type="text"
            placeholder="username or email"
            className="outline-none border px-1 py-1 w-full"
          />
          <input
            type="password"
            placeholder="password"
            className="outline-none border px-1 py-1 w-full"
          />
          <button className="border-none rounded-sm font-bold px-1 py-1 bg-sky-600">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
