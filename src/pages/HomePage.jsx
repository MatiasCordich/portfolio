import "./homepage.css";
import image from "../images/matias.png";
import pdf from "../files/CV.pdf";

const HomePage = () => {
  return (
    <section
      className="home"
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-delay="500"
    >
      <div className="home__image">
        <div className="circle">
          <img className="circle__image" src={image} alt="matias" />
        </div>
      </div>
      <div className="home__content">
        <div className="home__text">
          <h3>Hola</h3>
          <h2>
            Me llamo <span>Matias</span>{" "}
          </h2>
          <p>
            Soy <span>Full Stack Developer</span> orientado al{" "}
            <span>Front End</span> y trabajando con el stack <span>MERN</span>.
            Actualmente me encuentro realizando mis propios proyectos.
          </p>
        </div>
        <div className="home__btn-social">
          <a
            href="https://github.com/MatiasCordich"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/matiassiocordich/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>

        <div className="home__btn-contact">
          <a href="mailto:m.cordich20@gmail.com">
            <i className="far fa-envelope"></i> Contacto
          </a>
          <a href={pdf} target="_blank" rel="noreferrer">
            <i className="far fa-file"></i> Mi CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
