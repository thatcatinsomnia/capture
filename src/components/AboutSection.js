import hero from '../assets/img/hero.jpg';

const AboutSection = () => {
  return(
    <div className="about">
      <div className="about__wrapper">
        <div className="about__slogan">
          <div className="about__title is-hide">
            <h2>We work to make</h2>
          </div>

          <div className="about__title is-hide"> 
            <h2>your <span>dreams</span> come</h2>
          </div>

          <div className="about__title is-hide">
            <h2>come true.</h2>
          </div>
        </div>

        <p className="about__text">Contact us for any photograhpy or videgraphy ideas that you have.We have proffessionals with amazing skills to help you achieve it.</p>
        <button>Contact Us</button>
      </div>

      <div className="about__wrapper">
        <img src={hero} alt="a guy with camera"/>
      </div>
    </div>
  )
}

export default AboutSection;