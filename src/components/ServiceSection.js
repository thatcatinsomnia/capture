import ServiceCard from './ServiceCard';
import videoCamera from '../assets/img/video-camera.jpg';
import { ReactComponent as ApertureIcon } from '../assets/svg/aperture.svg';
import { ReactComponent as CashIcon } from '../assets/svg/cash.svg';
import { ReactComponent as FlashIcon } from '../assets/svg/flash.svg';
import { ReactComponent as PeopleIcon } from '../assets/svg/aperture.svg';

const ServiceSection = () => {
  const cards = [
    { SVGIcon: ApertureIcon, title: 'lorem1' },
    { SVGIcon: CashIcon, title: 'lorem2' },
    { SVGIcon: FlashIcon, title: 'lorem3' },
    { SVGIcon: PeopleIcon, title: 'lorem4' }
  ];

  return (
    <div className="service">
      <div className="service__img">
        <img src={videoCamera} alt="video camera"/>
      </div>

      <div className="service__content">
        <p>High <span>quality</span> services</p>
        <div className="cards">
          {cards.map(({SVGIcon, title}) => {
            return (
              <ServiceCard title={title} key={Math.random().toString(16).substring(2)}> 
                <SVGIcon />
              </ServiceCard>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;