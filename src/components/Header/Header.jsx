import sunIcon3 from '../../assets/img/iconHeader2.png';
import '../Header/Header.css';

export const Header = () => {
  return (
    <div className='header d-flex align-items-center'>
      <img className='sunIcon' src={sunIcon3} alt='Sun Icon' />
      <h1>
        Weather App<span className='span'> - Developed by Drishti Rani</span>
      </h1>
    </div>
  );
};
