import React from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import "bootstrap/dist/css/bootstrap.min.css";
import start from "./start.gif";
import "./Speech.css";

const Home = () => {
  const { speak, voice } = useSpeechSynthesis();
  let about = "I am Abul Bashar and front-end-developer";
  let skill = 'my skills, html5, css3, bootstrap5, wordpress, javascript, reactjs, jquery, php, typescript';
  let contact = 'address, gurudaspur natore, email, webdeveloperbashar@gmail.com, phone, 01700000000'
  let commandStr = 'please type a valid command. for example, about, skill, contact';
  console.log(useSpeechSynthesis());
  const handlePress = (e) => {
    let value = e.target.value;
    const str = value.toLowerCase();
    if (e.key === "Enter") {
      if (str == "about") {
        speak({ text: about });
      } else if (str == "skill") {
        speak({ text: skill });
      }else if(str == 'contact'){
        speak({text: contact})
      }
       else {
        speak({ text: commandStr });
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
