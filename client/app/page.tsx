import Image from "next/image";
import "./styles.css";

export default function Home() {
  return (
    <div className="container">
      <div className="header">Pokedex</div>

      <div className="card">
        <div className="poke-image">
          <Image
            src="/hatdog.jpg"
            alt="Hatdog Image"
            width={500}
            height={300}
            className="image"
          />
        </div>

        <div className="card-info">
          <h2 className="header2">Catch 'Em All</h2>
          <p className="description">Explore with our interactive Pokedex</p>

          <div className="button-container">
            <button className="button">View Pokedex</button>
          </div>
        </div>
      </div>
    </div>
  );
}
