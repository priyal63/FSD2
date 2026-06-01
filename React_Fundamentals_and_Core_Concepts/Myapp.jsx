import img1 from "./assets/hero.png";
import "./Myapp.css";
function Myapp() {
  var n = "student";
  return (
    <div>
      <h1>Hello B2 Students!</h1>
      <h2> Hii Medam 👋🌺</h2>
      <img src={img1} className="i1" />

      <h3 style={{ color: "blue", fontSize: "35px", fontStyle: "italic" }}>
        Welcome to {n}
      </h3>

      <img src="/favicon.svg"></img>
    </div>
  );
  // return only single root
} 

export default Myapp;
