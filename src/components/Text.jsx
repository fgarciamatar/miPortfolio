import Typewriter from "typewriter-effect";
import "../pages/style.css";


function Text() {
  return (
    <Typewriter 
      options={{
        strings: [
          "Frontend React Developer",
          "Mobile Developer",
          "Frontend Developer",
          "Backend Node Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
      }}
    />
  )
}

export default Text