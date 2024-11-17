import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
    const { handleRegister, setUser,updateUserProfile } = useContext(AuthContext)
    const [error, setError] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        const from = new FormData(e.target);
        const name = from.get('name');
        if (name.length < 5) {
            return setError('Minimum Need 5 character')
        }
        const email = from.get('email');
        const password = from.get('password');
        const photo = from.get('photo')
        handleRegister(email, password)
            .then(result => {
                const user = result.user;
                setUser(user)
                updateUserProfile({displayName:name, photoURL: photo})
                .then(() => {
                    navigate('/')
                })
                .catch((error) => {
                })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })
    }
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-white w-full max-w-lg shrink-0 p-10">
                <h2 className="text-2xl font-semibold text-center">Login your account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Name</span>
                        </label>

                        <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                        {
                            error && <h2 className="text-red-500">{error}</h2>
                        }
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Photo Url</span>
                        </label>
                        <input type="text" placeholder="Photo-url" name="photo" className="input input-bordered" required />
                    </div>
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
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral">Register</button>
                    </div>
                </form>
                <h2 className="text-center">Already Have An Account ? <Link to='/auth/login' className="text-red-500">Login</Link></h2>
            </div>
        </div>
    );
};

export default Register;