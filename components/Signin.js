import { Card, CardBody, Link, Logo, Ripple } from "ui";
import { useForm } from "react-hook-form";
import axios from 'axios';
import Router from "next/router";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Signin = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    const fetchHello = axios.post('/api/login', {
      username: data.username,
      code: data.code
    }).then((data) => {
      Router.push({ pathname: "/main",  query: { jwt: data.data.data.jwt }});
    }).catch((err) => {
      console.log(err);
    });
  };

  return (
    <div className="flex flex-col justify-center items-center px-3 dark:bg-gray-600 min-h-screen">
      <div className="w-full max-w-screen-xl">
        <div className="block md:flex flex-wrap items-center -mx-2">
          <div className="w-full md:w-1/2 px-2 flex justify-center md:justify-end">
            <div className="w-full max-w-md">
              <div className="text-center mb-5 text-indigo-500">
                <img src="/images/upbase.png" width="100" className="inline-block" />
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="text-center mb-5">
                  <h1 className="uppercase text-2xl mb-3 font-bold leading-none text-indigo-500">
                    Login
                  </h1>
                  <p style={{color: 'white'}}>Login to continue</p>
                </div>

                <div className="rounded-lg shadow-sm">
                  <div className="block mb-3">
                    <label>{"username"}</label>
                    <input
                      aria-label={"username"}
                      name="username"
                      type="text"
                      required
                      className="appearance-none relative block w-full px-3 py-3 ring-1 ring-gray-300 dark:ring-gray-600 ring-opacity-80 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 text-sm leading-none"
                      placeholder={"username"}
                      {...register("username", { required: true })}
                    />
                  </div>
                  <div className="block mb-3">
                    <label>{"code"}</label>
                    <input
                      aria-label={"code"}
                      name="code"
                      type="text"
                      required
                      className="appearance-none relative block w-full px-3 py-3 ring-1 ring-gray-300 dark:ring-gray-600 ring-opacity-80 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 text-sm leading-none"
                      placeholder={"code"}
                      {...register("code", { required: true })}
                    />
                  </div>
                </div>

                <Button type="submit" style={{marginTop: '10px'}}>
                  <a>Login</a>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signin;
