import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
    return (
        <div>
            <h2 className="text-lg font-bold mb-3">Find Us On</h2>
            <div className="join join-vertical flex *:bg-base-100">
                <button className="btn join-item justify-start text-lg"><FaFacebook></FaFacebook> Facebook</button>
                <button className="btn join-item justify-start text-lg"><FaTwitter></FaTwitter> Twitter</button>
                <button className="btn join-item justify-start text-lg"><FaInstagram></FaInstagram> Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;