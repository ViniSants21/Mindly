import "./hero.css";
import homeImg from "../assets/home.jpg"; // ajuste o caminho conforme seu projeto

function Hero() {
  return (
    <section className="hero">

      <div className="hero-text">
        <h1>
          Organize seus estudos <br />
          com a Mindly
        </h1>

        <p>
          Crie planos sob medida, acompanhe seu progresso e
          ganhe recompensas enquanto aprende.
        </p>

        <button className="btn-primary">
          Crie uma conta
        </button>
      </div>

      <div className="hero-image">
        <img src={homeImg} alt="Estudando" />
      </div>

    </section>
  );
}

export default Hero;