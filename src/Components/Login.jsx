import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
    return (
        <div>
            <h2 className="font-bold text-lg mb-3">Login With</h2>
            <div className="space-y-2">
                <button className="btn w-full"> <FaGoogle></FaGoogle> Login With Google</button>
                <button className="btn w-full"><FaGithub></FaGithub> Login With Github</button>
            </div>
        </div>
    );
};

export default Login;