import Link from "next/link";
import React from "react";
import { Button } from "../src/components";
import Layout from "../src/components/Layout";

export default function Login() {
  return (
    <Layout title="Login">
      <form className="max-auto max-w-screen-md">
        <h1 className="mb-4 text-xl"> Login </h1>
        <div className="mb-4 flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            className="shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            autoFocus
            type="email"
          ></input>
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            className="shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            autoFocus
            type="password"
          ></input>
        </div>
        <Button className="bg-yellow-400 hover:bg-yellow-600"> Login </Button>
        <div className="mb-4 py-4">
          {" "}
          Don't have an account?{" "}
          <Link href={"/register"}>
            <a className="text-blue-600">Register</a>
          </Link>{" "}
        </div>
      </form>
      {/* <div className='grid justify-items-center py-11'>
        <div className='items-start bg-gray-700 w-1/3'> <h1> Login </h1> </div>
        <div className='flex flex-col w-1/3 my-3 mx-0.5'>
            <label>Email</label>
            <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"></input>
        </div>
        <div className='flex flex-col w-1/3 my-3'>
            <label>Password</label>
            <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password"></input>
        </div>
        <Button className='bg-yellow-400 hover:bg-yellow-600'> Login </Button>
    </div> */}
    </Layout>
  );
}
