import React, { useState } from 'react';
import './FrequentlyAskedQuestions.css';
import Button from '../button/Button';
import { getImages } from '../../../hooks/getImages';

const FrequentlyAskedQuestions = () => {
  const { circleMinus, circlePlus } = getImages();
  const accordions = [
    {
      id: 1,
      qstn: 'Is an account for a service provider free',
      answer:
        'Yes, you can download our app for free or visit our website. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
    },
    {
      id: 2,
      qstn: 'How fast can I order a service?',
      answer:
        'Yes, you can download our app for free or visit our website. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
    },
    {
      id: 3,
      qstn: 'How can I cancel a service that I have requested for?',
      answer:
        'Yes, you can download our app for free or visit our website. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
    },
    {
      id: 4,
      qstn: 'What security measures is put in place for service providers ',
      answer:
        'Yes, you can download our app for free or visit our website. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
    },
  ];
  const [activeAccordion, setActiveAccordion] = useState({
    id: 0,
    qstn: '',
    answer: '',
  });

  return (
    <div className='frequently-asked-questions'>
      <div className='container'>
        <h1 className='title'> Frequently asked questions</h1>
        <p className='info'>Everything you need to know on how helproo works</p>
      </div>
      <div className='questions'>
        {accordions.map((accordion) => (
          <div
            key={accordion.id}
            className={`accordion ${
              accordion.id === activeAccordion.id && 'active'
            }`}
          >
            <div className='question-wrapper'>
              <p className='qstn'>{accordion.qstn}</p>
              <button
                onClick={() => {
                  if (accordion.id === activeAccordion.id) {
                    setActiveAccordion({
                      id: 0,
                      qstn: '',
                      answer: '',
                    });
                  } else {
                    setActiveAccordion(accordion);
                  }
                }}
              >
                <img
                  src={
                    accordion.id === activeAccordion.id
                      ? circleMinus
                      : circlePlus
                  }
                  alt='accordion toggle'
                />
              </button>
            </div>
            <div
              className={`answer-wrapper ${
                accordion.id === activeAccordion.id && 'show'
              }`}
            >
              <p className='answer'>{accordion.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
