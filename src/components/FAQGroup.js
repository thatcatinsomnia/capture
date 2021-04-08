const FAQGroup = ({faq}) => {
  return (
    <div className="faq__group" key={faq.title}> 
      <h4 className="faq__question">{faq.title}</h4>
      <div className="faq__answer">
        {faq.desc.map(desc => (<p key={Math.random().toString(16).substring(2)}>{desc}</p>))}
      </div>
    </div>
  );
};

export default FAQGroup;