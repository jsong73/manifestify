import React , {useState} from "react";
import axios from "axios"


const Fortune = () => {
    const [fortuneText, setFortuneText] = useState("");
  
    const fetchFortune = async () => {
      try {
        const options = {
          method: 'GET',
          url: 'https://fortune-cookie4.p.rapidapi.com/slack',
          headers: {
            'X-RapidAPI-Key': '8a9925bfe5mshb2fda82cd5c3acbp140841jsn675dbba9e459',
            'X-RapidAPI-Host': 'fortune-cookie4.p.rapidapi.com'
          }
        };
        const response = await axios.request(options);
        const fortuneData = response.data;
 
        // console.log(fortuneData);

        if (fortuneData.response_type === 'in_channel' && fortuneData.text) {
          const fortune = fortuneData.text;

          const filteredFortune = fortune.split(":")[1]
          setFortuneText(filteredFortune);
        } else {
          throw new Error('Invalid response format');
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <div>
        <button className="button text-xl text-shadow border border-white rounded-full px-3 py-3 mt-5" onClick={fetchFortune}>
            Reveal daily quote
        </button>
        <div className="button text-xl mt-5">{fortuneText}</div>
      </div>
    );
  };
  
  export default Fortune;
