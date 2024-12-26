import Banner from '../../molecules/banner/Banner';
import Footer from '../../molecules/footer/Footer';
import FrequentlyAskedQuestions from '../../molecules/frequently-asked-questions/FrequentlyAskedQuestions';
import GetInTouch from '../../molecules/get-in-touch/GetInTouch';
import './Faq.css';

function Faq() {
  return (
    <div className='contact-us'>
      <Banner title='FAQ' info='Get familiar with what we do at helproo' />
      <FrequentlyAskedQuestions />
      <Footer />
    </div>
  );
}

export default Faq;
