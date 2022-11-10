import { useState,useEffect } from "react";
import logoImg from "./media/logo.png";
function App() {
  /*   let x = event.offsetX 
    let y = event.offsetY

    document.body.style.backgroundPositionX = -x + "px"
    document.body.style.backgroundPositionX = -y + "px"
     */

  /*  document.onmousemove = function(e){
    const moForce = 25;
    let height = moForce / window.screen.height
    let width = moForce / window.screen.width
    
              let pageX = e.pageX - width / 2;
              let pageY = e.pageY - height / 2;
              let newvalueX = width * pageX * -1 - 25;
              let newvalueY = height * pageY * -1 - 50;
              document.body.style.backgroundPosition = newvalueX + "px" + newvalueY + "px"
              /* ('#top-image').css("background-position", newvalueX+"px     "+newvalueY+"px"); */
  const [positionX, setPositionX] = useState();
  const [positionY, setPositionY] = useState();

  const [animateText,setAnimateText] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setAnimateText(true)
    }, 1000);
  }, [])
  

  function backgroundAnimation(event) {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const mousePositionX = event.clientX;
    const mousePositionY = event.clientY;

    const calculateXaxis = mousePositionX / (windowWidth / 2);
    const calculateYaxis = mousePositionY / (windowHeight / 2);

    setPositionX(-calculateXaxis + "%");
    setPositionY(-calculateYaxis + "%");
  }

  /*  backgroundPositionX : `${positionX}`,
    backgroundPositionY : `${positionY}`
 */

  const styles = {
    transform: `translate3d(${positionX} , ${positionY}, 100px)`,
  };

  
  

  

  
  return (
    <div className="app">
      <div className="hero-section" onMouseMove={backgroundAnimation}>
        <div className="header-container">
          <div className="logo-container">
            <ul><li>Here goes a logo</li></ul>
          </div>
          <ul>
            <li>Home</li>
            <li>Our services</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={animateText ? "hero-text hero-text-active" : "hero-text"} >
          
          <h2>Hero copy</h2>
          <button>Schedule a trip</button>
        </div>
        <div className="hero-image" style={styles}></div>
      </div>


      
    </div>
  );
}

export default App;
