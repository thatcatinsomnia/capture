const ServiceCard = ({ children, title }) => {
  return(
    <div className="card">
      <div className="card__icon">
        <p>{title}</p>
        {children}
      </div>
    </div>
  );
};

export default ServiceCard;