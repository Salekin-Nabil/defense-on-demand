import Banner from '../Banner/Banner';
import Quotes from '../Quotes/Quotes';
import Reviews from '../Reviews/Reviews';
import Seperator from '../Seperator/Seperator';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div className=''>
          <Banner></Banner>
          <div className='md:flex justify-around'>
            <Services></Services>
          </div>
          <Seperator></Seperator>
          <div className='md:flex justify-around'>
            <Quotes></Quotes>
          </div>
          <Seperator></Seperator>
          <div className='md:flex justify-around'>
            <Reviews></Reviews>
          </div>
        </div>
    );
};

export default Home;<h1>Home</h1>