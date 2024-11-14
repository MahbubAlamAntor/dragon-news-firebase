import { Link, NavLink, Outlet } from "react-router-dom";
import user from '../assets/assets/user.png';

const Navbar = () => {
    return (
        <div className="flex justify-between items-center py-3">
            <div></div>
            <div className="flex space-x-4">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className="flex gap-2 items-center">
                <div>
                    <img src={user} alt="" />
                </div>
                <Link to='/auth/login' className="btn btn-neutral">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;