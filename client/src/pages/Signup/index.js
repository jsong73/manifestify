import React from "react";


const Signup = () => {
    return (
      <div className="circular-gradient text-white">
        <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-center text-3xl text-shadow">Create a new account</h1>

                <form  
             className="mt-8 space-y-6" 
             onSubmit= {signupFormHandler}>
              <input
                className="relative block w-full appearance-none rounded-md rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Email"
                name="email"
                type="email"
                autoComplete="off"
                value= {formState.email}
                onChange={handleChange}/>

              <input
                className="relative block w-full appearance-none rounded-md rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Username"
                name="username"
                type="username"
                autoComplete="off"
                value= {formState.username}
                onChange={handleChange}/>

              <input
                className="relative block w-full appearance-none rounded-md rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Password"
                name="password"
                type="password"
                autoComplete="off"
                value= {formState.password}
                onChange={handleChange}/>

              <button 
              className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" type="submit"> Create account </button>
            </form>
        </div>
      </div>
    );
  };
  
  export default Signup;
  