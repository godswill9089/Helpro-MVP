import './ContactUs.css';
import Footer from '../../molecules/footer/Footer';
import GetInTouch from '../../molecules/get-in-touch/GetInTouch';
import Banner from '../../molecules/banner/Banner';

function ContactUs() {
  return (
    <div className='contact-us'>
      <Banner
        title='Contact Us'
        info='Got a thing or two to tell us? Reach out to us'
      />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default ContactUs;
