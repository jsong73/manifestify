import React from "react";
import { REMOVE_MANIFESTATION } from "../../utils/mutations";
import { QUERY_ME } from "../../utils/queries";
import { useMutation } from "@apollo/client";


const DeleteBtn = ({manifestationId}) => {
    console.log(manifestationId)

    const [ removeManifestation ] = useMutation(REMOVE_MANIFESTATION, {
        update(cache, {data: { removeManifestation }}) {
            try{
                cache.readQuery({
                    query: QUERY_ME,
                    data: { me: removeManifestation },
                })
            } catch (error) {
                console.log(error)
            }
        }
    })



const removeManifestationHandler = async ( manifestationId ) =>{
    console.log(manifestationId); 
    try{
        const {data} = await removeManifestation({
            variables: {  manifestationId },
        });
        console.log(data)
        window.location.reload();
    } catch(error) {
        console.log(error)
    }
}

return(

<div className="flex justify-end ">
    <button 
        className="relative top-[-20px] mr-12"
        onClick={() => removeManifestationHandler(manifestationId)}>X</button>
</div>

)
}
export default DeleteBtn;
