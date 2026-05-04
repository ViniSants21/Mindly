import "./banner.css";
import bannerImg from "../assets/banners.png";

function Banner() {
  return (
    <section className="banner">
      <img src={bannerImg} className="banner-img" alt="Banner Mindly" />

      <button className="btn-orange">
        Começar agora
      </button>
    </section>
  );
}

export default Banner;