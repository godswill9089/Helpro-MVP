import './Home.css';
import BannerHome from '../../molecules/banner-home/BannerHome';
import Explore from '../../molecules/explore/Explore';
import ExploreOurServices from '../../molecules/explore-our-services/ExploreOurServices';
import Expand from '../../molecules/expand/Expand';

function Home() {
  return (
    <div className='home'>
      <BannerHome />
      <Explore />
      <ExploreOurServices />
      <Expand />
    </div>
  );
}

export default Home;
