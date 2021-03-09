import React from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import "bootstrap/dist/css/bootstrap.min.css";
import start from "./start.gif";
import "./Speech.css";
import {About, Skill, Contact, CommandStr} from './Text'

const Home = () => {
  const { speak } = useSpeechSynthesis();
  const handlePress = (e) => {
    let value = e.target.value;
    const str = value.toLowerCase();
    if (e.key === "Enter") {
      if (str === "about") {
        speak({ text: About });
      } else if (str === "skill") {
        speak({ text: Skill });
      }else if(str === 'contact'){
        speak({text: Contact})
      }
       else {
        speak({ text: CommandStr });
      }
      e.target.value = ''
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2 className='text-center text-white mb-4'>React Voice Command Portfolio Website</h2>
          <div className="wrapper text-center">
            <input
              onKeyPress={handlePress}
              type="text"
              placeholder="Type A Command..."
              className="form-control"
            />
            <br />
            <br />
            <img src={start} id="start" className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
