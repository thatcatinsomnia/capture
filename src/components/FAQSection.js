import FAQGroup from "./FAQGroup";

const FAQSection = () => {
  const faqs = [
    {
      title: 'How do I start ?',
      desc: [
        'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet consectetur',
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae culpa, quis soluta, quibusdam itaque repellendus praesentium obcaecati cupiditate blanditiis deserunt et id harum molestiae explicabo. Dolorem blanditiis eveniet non temporibus.'
      ]
    },
    {
      title: 'Daily Schedule',
      desc: [
        'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet consectetur',
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae culpa, quis soluta, quibusdam itaque repellendus praesentium obcaecati cupiditate blanditiis deserunt et id harum molestiae explicabo. Dolorem blanditiis eveniet non temporibus.'
      ]
    },
    {
      title: 'Different Payments',
      desc: [
        'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet consectetur',
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae culpa, quis soluta, quibusdam itaque repellendus praesentium obcaecati cupiditate blanditiis deserunt et id harum molestiae explicabo. Dolorem blanditiis eveniet non temporibus.'
      ]
    },
    {
      title: 'What product do you offer ?',
      desc: [
        'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet consectetur',
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae culpa, quis soluta, quibusdam itaque repellendus praesentium obcaecati cupiditate blanditiis deserunt et id harum molestiae explicabo. Dolorem blanditiis eveniet non temporibus.'
      ]
    }
  ];
  return (
    <div className="faq">
      <h2>Ayy Questions ? <span>FAQ</span> </h2>
      <div className="faq__body">
        {faqs.map(faq => {
          return <FAQGroup faq={faq} key={faq.title} />
        })}
      </div>
    </div>
  );
};

export default FAQSection;