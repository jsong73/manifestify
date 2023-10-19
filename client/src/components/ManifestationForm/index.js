import React, {useState , useRef } from "react";
import { ADD_MANIFESTATION } from "../../utils/mutations";
import { useMutation } from "@apollo/client";

const ManifestationForm = () => {
    
    const [ addManifestation ]= useMutation(ADD_MANIFESTATION);
    const formRef = useRef(null);

    const [formState, setFormState] = useState({
        todaysFeeling:"",
        whatToManifest:"",
        manifestationAction:"",
        manifestationObstacles:"",
        todayImGratefulFor:"",
        details:"",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormState({
            ...formState,
            [name]:value,
         })
    };


    const manifestationFormHandler = async (e) => {
        e.preventDefault();
        try{
            const { data } = await addManifestation({
                variables: {...formState},
            })
        console.log(data)
        formRef.current.reset();

      setFormState({
        todaysFeeling:"",
        whatToManifest:"",
        manifestationAction:"",
        manifestationObstacles:"",
        todayImGratefulFor:"",
        details:"",
      });

        } catch(error){
        console.log(error)
        }
    }

    return (
        <div className="flex justify-center h-screen text-center">

          <form ref={formRef} className="button space-y-2 border-2" onSubmit={manifestationFormHandler}>
       
          <div className="mt-3">
          <label> Today I am feeling... </label>
          <input
            className="w-5/6 mt-2 bg-transparent border border-white rounded-full px-1 py-1 text-center"
            name="todaysFeeling"
            onChange={handleChange}
          />
          </div>
   
          <div>
          <label> I want to manifest... </label>
            <input
              className="w-5/6 mt-2 bg-transparent border border-white rounded-full px-1 py-1 text-center"
              name="whatToManifest"
              onChange={handleChange}
            />
          </div>
    
          <div>
          <label> To achieve my manifestations, I will... </label>
            <input
              className="w-5/6 mt-2 bg-transparent border border-white rounded-full px-1 py-1 text-center"
              name="manifestationAction"
              onChange={handleChange}
            />
          </div>

          <div>
          <label> To overcome my manifestation obstacles, I will.. </label>
            <input
              className="w-5/6 mt-2 bg-transparent border border-white rounded-full px-1 py-1 text-center"
              name="manifestationObstacles"
              onChange={handleChange}
            />
          </div>

          <div>
          <label> Today I am grateful for.. </label>
            <input
              className="w-5/6 mt-2 bg-transparent border border-white rounded-full px-1 py-1 text-center"
              name="todayImGratefulFor"
              onChange={handleChange}
            />
          </div>

          <div>
          <label> I would like to share the following details about my manifestations... </label>
            <input
              className="w-5/6 mt-2 bg-transparent border border-white rounded-full px-1 py-1 text-center mb-3"
              name="details"
              onChange={handleChange}
            />
          </div>

            <button className="text-md text-shadow border border-white rounded-full px-3 py-3" type="submit">
             Save my manifestation
            </button>
          </form>
        </div>
      );
    };
    
export default ManifestationForm;