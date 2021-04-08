import hero from '../assets/img/hero.jpg';
import styled from 'styled-components';
import CTAButton from './UI/Buttons';

const AboutSection = () => {
  return(
    <About>
      <AboutWrapper>
        <AboutSlogan>
          <AboutTitle>
            <span>We work to make</span>
          </AboutTitle>

          <AboutTitle> 
            <span>your <Strong>dreams</Strong> come</span>
          </AboutTitle>

          <AboutTitle>
            <span>come true.</span>
          </AboutTitle>
        </AboutSlogan>

        <Description>Contact us for any photograhpy or videgraphy ideas that you have.We have proffessionals with amazing skills to help you achieve it.</Description>
        <CTAButton color='transparent'>Contact Us</CTAButton>
      </AboutWrapper>

      <AboutWrapper>
        <AboutImage src={hero} alt="a guy with camera"/>
      </AboutWrapper>
    </About>
  );
};

const About = styled.div`
  padding: 3rem 6rem;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
`;

const AboutSlogan = styled.div`
  margin-bottom: 3rem;
`;

const AboutTitle = styled.h2`
  font-size: 4.5rem;
  font-weight: bold;
  line-height: 1.3;
  overflow: hidden;
`;

const Strong = styled.span`
  color: #23d997;
`;

const Description = styled.p`
  margin-bottom: 2.5rem;
  padding-right: 15rem;
`;

const AboutWrapper = styled.div`
  flex: 1;
  overflow: hidden;
`;

const AboutImage = styled.img`
  display: block;
  margin-left: auto;
  width: 80%;
  height: 90vh;
  object-fit: cover;
  object-position: top;
`;

export default AboutSection;