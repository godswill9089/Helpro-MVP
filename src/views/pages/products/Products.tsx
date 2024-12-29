import BannerProducts from '../../molecules/banner-products/BannerProducts';
import Benefit from '../../molecules/benefit/Benefit';
import HowItWorks from '../../molecules/how-it-works/HowItWorks';
import Footer from '../../molecules/footer/Footer';
import './Products.css';

function Products() {
  return (
    <div className='products'>
      <BannerProducts />
      <Benefit />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default Products;
