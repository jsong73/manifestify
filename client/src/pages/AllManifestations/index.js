import { useQuery } from "@apollo/client";
import React ,{ useState } from "react";
import { QUERY_ME } from "../../utils/queries";
import DeleteBtn from "../../components/DeleteBtn";

const AllManifestations = () => {

    const { data } = useQuery(QUERY_ME)

    const manifestations = data?.me.manifestations || []

    console.log(manifestations)

    // expand manifestations 
    const [expandedButton, setExpandedButton] = useState({})

    const toggleButton = (manifestationId) => {
        setExpandedButton((prev) =>({
            ...prev,
            [manifestationId]:!prev[manifestationId]
        }))
    }

return (
<div className="button ">

    <h1>Manifestations</h1>
    {manifestations.map((manifestation) => (
        <div 
        className="w-full mt-2 bg-transparent border border-white rounded-full px-1 py-1 text-center "
        key={manifestation._id}>
            
          <button 
          className="w-full h-10 text-md "
          onClick={() => toggleButton(manifestation._id)}>
          {manifestation.createdAt} 
         
          </button>
          
          <DeleteBtn 
            manifestationId={manifestation._id}/>
            {expandedButton[manifestation._id] &&(
        <div>
            <p> Today I'm feeling {manifestation.todaysFeeling}</p>
            <p> I want to manifest {manifestation.whatToManifest}</p>
            <p> To achieve my manifestations, I will {manifestation.manifestationAction}</p>
            <p> To overcome my manifestation obstacles, I will {manifestation.manifestationObstacles}</p>
            <p> Today I am grateful for {manifestation.todayImGratefulFor}</p>
           {/* if manifestation details isnt null then display the details */}
            {manifestation.details && (
            <p> {manifestation.details}</p>
            )}
            </div>
            )}    
        </div>
    ))}

</div>
    );
}
export default AllManifestations;
  