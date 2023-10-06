import React, {useState} from "react";
import Auth from "../../utils/Auth"
import { LOGIN_USER } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";

const Login = () => {
    const [formState, setFormState] = useState({
        email: "",
        password: "",
      });
    
      const [ login, {error} ] = useMutation(LOGIN_USER);
      
      const handleChange = (event) => {
        const {name, value} = event.target;
    
        setFormState({
          ...formState,
          [name]: value,
        });
      };
    
      const loginFormHandler = async (event) => {
        event.preventDefault();
        try{
          const { data } = await login({
            variables: {...formState},
          });
          Auth.login(data.login.token);
        } catch (error) {
          console.log(error)
        }
    
        setFormState({
          email: "",
          password: "",
          birthday:""
        })
      };
    
    return (
      <div className="circular-gradient text-white">
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-center text-3xl text-shadow"> Sign in </h1>

            <p className="button mt-2 text-sm">  Or{' '}
                <button> <Link to="/signup" className ="mt-2"> create an account </Link></button>
            </p>


            <form  
             className="button mt-8 space-y-6" 
             onSubmit= {loginFormHandler}>

            <input
                className="w-5/6 bg-transparent border border-white rounded-full px-4 py-4"
                placeholder="Email"
                name="email"
                type="email"
                autoComplete="off"
                value= {formState.email}
                onChange={handleChange}/>

            <input
                className="w-5/6 bg-transparent border border-white rounded-full px-4 py-4"
                placeholder="Password"
                name="password"
                type="password"
                autoComplete="off"
                value= {formState.password}
                onChange={handleChange}/>

            
            {error && (
                <div className="mt-2 text-center text-sm text-red-600">
                    {error.message.includes("duplicate key value") ? (
                        "Email already exists."
                        ) : (
                        "Please fill out all required fields."
                    )}
                </div>
            )}

              <button 
              className="text-md text-shadow border border-white rounded-full px-4 py-4 mt-12" type="submit"> Welcome back </button>
            </form>

        </div>
      </div>
    );
  };
  
  export default Login;
  