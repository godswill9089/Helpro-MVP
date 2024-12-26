import './ContactUs.css';
import Footer from '../../molecules/footer/Footer';
import BannerContactUs from '../../molecules/banner-contact-us/BannerContactUs';
import GetInTouch from '../../molecules/get-in-touch/GetInTouch';

function ContactUs() {
  return (
    <div className='contact-us'>
      <BannerContactUs />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default ContactUs;
