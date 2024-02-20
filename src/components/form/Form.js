import React from "react";
import Button from "../button/Button";

export default function Form() {
  return (
    <div className="bg-bgSecondary p-8 rounded-xl shadow-md w-96 mx-auto mt-28">
      <h2 className="text-2xl text-textPrimary font-semibold mb-6 font-secondary">
        Login
      </h2>
      <form>
        <div className="mb-4">
          <label
            for="username"
            className="block text-textPrimary font-bold mb-2"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="xyz@gmail.com"
            className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label
            for="password"
            className="block text-textPrimary font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <Button />
      </form>
    </div>
  );
}
