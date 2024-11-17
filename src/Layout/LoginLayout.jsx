import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const LoginLayout = () => {
    const { handleSign, setUser } = useContext(AuthContext);
    const [error, setError] = useState({});
    const location = useLocation();
    const navigate = useNavigate();
    const handleSignIn = (e) => {
        e.preventDefault();
        const form = new FormData(e.target)
        const password = form.get('password')
        const email = form.get('email')

        handleSign(email, password)
            .then(result => {
                const user = result.user;
                setUser(user)
                navigate(location.state ? location.state : '/')
            })
            .catch((err) => {
                setError({ ...error, login: err.code })
            })
    }
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-white w-full max-w-lg shrink-0 p-10">
                <h2 className="text-2xl font-semibold text-center">Login your account</h2>
                <form onSubmit={handleSignIn} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Email Address</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        {
                            error.login && <label className="label">
                                <h2 className="text-red-500">{error.login}</h2>
                            </label>
                        }
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral">Login</button>
                    </div>
                </form>
                <h2 className="text-center">Dont’t Have An Account ? <Link to='/auth/register' className="text-red-500">Register</Link></h2>
            </div>
        </div>
    );
};

export default LoginLayout;