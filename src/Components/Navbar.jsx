import { Link, NavLink, Outlet } from "react-router-dom";
import userImg from '../assets/assets/user.png';
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
    const {user,signOutBtn} = useContext(AuthContext)
    return (
        <div className="flex justify-between items-center py-3">
            <div>
                {user?.email}
            </div>
            <div className="flex space-x-4">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className="flex gap-2 items-center">
                <div>
                    {
                        user && user.email ? <div className="flex gap-1 items-center"><img className="w-12 rounded-full" src={user.photoURL} alt="" /> <h2>{user.displayName}</h2></div> : <img src={userImg} alt="" />
                    }
                    
                </div>
                {
                    user ? <button onClick={signOutBtn} className="btn btn-neutral">Log-Out</button> : <Link to='/auth/login' className="btn btn-neutral">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;