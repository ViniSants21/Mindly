import "./banner.css";
import bannerImg from "../assets/banners.png";

function Banner() {
  return (
    <section
      className="banner"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <button className="btn-orange">
        Começar agora
      </button>
    </section>
  );
}

export default Banner;