import "./styles.css";
import carImg from "../../assets/car.png";

export default function Card() {
  return (
    <div className="ct-card">
      <h1>Venha nos visitar</h1>
      <div className="ct-card-img">
        <img src={carImg} alt="Carro" />
      <h3>Lorem ipsum dolor</h3>
      </div>

    </div>
  );
}
