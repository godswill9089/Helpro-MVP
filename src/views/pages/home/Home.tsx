import './Home.css';
import BannerHome from '../../molecules/banner-home/BannerHome';
import Explore from '../../molecules/explore/Explore';
import ExploreOurServices from '../../molecules/explore-our-services/ExploreOurServices';
import Expand from '../../molecules/expand/Expand';
import Seeing from '../../molecules/seeing/Seeing';
import SitBack from '../../molecules/sit-back/SitBack';
import Footer from '../../molecules/footer/Footer';

function Home() {
  return (
    <div className='home'>
      <BannerHome />
      {/* <Explore />
      <ExploreOurServices />
      <Expand />
      <Seeing />
      <SitBack />
      <Footer /> */}
    </div>
  );
}

export default Home;
