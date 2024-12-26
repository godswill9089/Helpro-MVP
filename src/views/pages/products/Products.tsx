import BannerHome from '../../molecules/banner-home/BannerHome';
import Explore from '../../molecules/explore/Explore';
import ExploreOurServices from '../../molecules/explore-our-services/ExploreOurServices';
import Expand from '../../molecules/expand/Expand';
import Seeing from '../../molecules/seeing/Seeing';
import SitBack from '../../molecules/sit-back/SitBack';
import Footer from '../../molecules/footer/Footer';
import './Products.css';
import BannerProducts from '../../molecules/banner-products/BannerProducts';

function Products() {
  return (
    <div className='products'>
      <BannerProducts />
      <Explore />
      <ExploreOurServices />
      <Expand />
      <Seeing />
      <SitBack />
      <Footer />
    </div>
  );
}

export default Products;
