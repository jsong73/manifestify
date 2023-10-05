import React, {useState} from "react";
import Auth from "../../utils/Auth"
import { ADD_USER } from "../../utils/mutations";
import { useMutation } from "@apollo/client";

const Signup = () => {
    const [formState, setFormState] = useState({
        email: "",
        password: "",
        birthday: "",
      });
    
      const [ addUser] = useMutation(ADD_USER);
      
      const handleChange = (event) => {
        const {name, value} = event.target;
    
        setFormState({
          ...formState,
          [name]: value,
        });
      };
    
      const signupFormHandler = async (event) => {
        event.preventDefault();
        try{
          const { data } = await addUser({
            variables: {...formState},
          });
          Auth.login(data.addUser.token);
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
                <h1 className="text-center text-3xl text-shadow">Create a new account</h1>

            <form  
             className="button mt-8 space-y-6" 
             onSubmit= {signupFormHandler}>

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

            <input
                className="w-5/6 bg-transparent border border-white rounded-full px-4 py-4 text-white"
                placeholder="Birthday"
                name="birthday"
                type="Date"
                autoComplete="off"
                value= {formState.birthday}
                onChange={handleChange}/>


              <button 
              className="text-md text-shadow border border-white rounded-full px-4 py-4 mt-12" type="submit"> Create account </button>
            </form>
        </div>
      </div>
    );
  };
  
  export default Signup;
  