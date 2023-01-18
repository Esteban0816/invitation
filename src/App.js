import "./App.css";
import anime from "animejs";
import ImageEmblema from "./assets/Emblema_nacional_Francia.svg";

function App() {
  const animateBlueCard = () => {
    console.log("click");
    anime({
      targets: ".blueCard",
      rotate: {
        value: 90,
        duration: 800,
        easing: "cubicBezier(.5, .05, .1, .3)",
      },
      translateX: {
        value: 90,
        delay: 1000,
        easing: "cubicBezier(.5, .05, .1, .3)",
      },
    });
  };

  return (
    <div className="container">
      <div className="book">
        <div id="pages" className="pages">
          <div className="page blueCard" onClick={() => animateBlueCard()}>
            <h1 className="title pt2">PASAPORTE</h1>
            <h4 className="subtitle">A LA FELICIDAD</h4>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                paddingTop: "24px",
              }}
            >
              <img
                src={ImageEmblema}
                alt="Emblema nacional de Francia"
                className="imageEmblema"
              />
            </div>
            <h5 className="subtitle pt3">23 DE SEPTIEMBRE</h5>
            <h2 className="subtitleCursive font-size-3rem pt1">Ivan & Lea</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
