import { useNavigate } from 'react-router-dom';
import useReview from '../../hooks/useReview';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    const [reviews, setReviews] = useReview();
    const navigate = useNavigate();
    return (
        <div className='mt-[1vw]'>
          <Banner></Banner>
          <div className='md:flex justify-around'>
            <Services></Services>
          </div>
          <div className='md:flex justify-around'>
            <Reviews></Reviews>
          </div>
        </div>
    );
};

export default Home;<h1>Home</h1>