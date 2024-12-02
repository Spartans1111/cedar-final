import React from 'react';
import Accordion from './Accordion'; // Import your Accordion component
import './accordian.css'; // Import your CSS file

const AccordianPage = () => {
  // Define your accordion items here
  const items = [
    {
      title: 'Can your company handle both residential and commercial projects?',
      content: 'Yes, we specialize in designing both residential and commercial spaces with tailored solutions that meet your specific needs.',
    },
    {
      title: 'What’s the typical timeline for completing a project?',
      content: 'The timeline varies based on the project’s scope, but most of our projects are completed within 45 days, ensuring quality without delays.',
    },
    {
      title: 'Do you offer design customization services?',
      content: 'Absolutely! Our team works closely with you to create designs that align with your vision and requirements.',
    },
    {
          title:'Are your interior solutions budget-friendly?',
          content:'Yes, we offer flexible packages and solutions to fit various budgets without compromising on quality or style.'
    },
  ];

  return (
    <div className='accordian'>
      <div className="accordian-col">
        <p className='qa'>QUESTIONS & ANSWERS</p>
        <h2 className='header2'>Let us help you find clarity</h2>
        <p className='qa-exp'>
        We’re here to answer your queries and guide you through every step of your journey with us. Explore our frequently asked questions below.
          {/* <br /><br />
          Experience the ultimate getaway at our luxurious resort,
          where every detail is designed to offer. */}
        </p>
      </div>
      
      <div className="accordian-col">
        {/* Place the Accordion component here */}
        <Accordion items={items} />
      </div>
    </div>
  );
};

export default AccordianPage;
