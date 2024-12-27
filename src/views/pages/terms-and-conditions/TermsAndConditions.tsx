import Footer from '../../molecules/footer/Footer';
import GetInTouch from '../../molecules/get-in-touch/GetInTouch';
import Banner from '../../molecules/banner/Banner';
import './TermsAndConditions.css';
import SitBack from '../../molecules/sit-back/SitBack';

function TermsAndConditions() {
  return (
    <div className='contact-us'>
      <Banner
        title='Terms and conditions'
        info='Pls take a moment to review our terms and conditions to familiarize yourself with our values, guidelines and policies'
      />
      <SitBack />
      <Footer />
    </div>
  );
}

export default TermsAndConditions;