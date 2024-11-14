import moment from 'moment';
import logo from '../assets/assets/logo.png';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center py-3 gap-2'>
            <div>
                <img className='w-[300px]' src={logo} alt="" />
            </div>
            <h2 className='text-gray-400'>Journalism Without Fear or Favour</h2>
            <p className='text-base'>{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;