import Layout from "../src/components/Layout";
import { Button } from "../src/components";

export default function register() {
  return (
    <Layout title="Register">
      <form className="max-auto max-w-screen-md">
        <h1 className="mb-4 text-xl"> Create Account </h1>
        <div className="mb-4 flex flex-col">
          <label htmlFor="name">Name</label>
          <input
            className=" appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            autoFocus
            type="text"
          ></input>
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            className=" appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            autoFocus
            type="email"
          ></input>
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            className=" appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            autoFocus
            type="password"
          ></input>
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="">Confirm Password</label>
          <input
            className=" appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmPassword"
            autoFocus
            type="password"
          ></input>
        </div>
        <Button className="bg-yellow-400 hover:bg-yellow-600">
          {" "}
          Register{" "}
        </Button>
      </form>
    </Layout>
  );
}
