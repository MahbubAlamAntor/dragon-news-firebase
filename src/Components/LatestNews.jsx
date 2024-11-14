import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="">
            <div className="flex items-center p-2 bg-base-200 gap-2">
                <p className="bg-[#D72050] text-white py-1 px-3">Latest</p>
                <Marquee speed={50} pauseOnHover={true} className="space-x-10">
                    <Link to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, dolorem.</Link>
                    <Link to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, dolorem.</Link>
                    <Link to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, dolorem.</Link>
                </Marquee>
            </div>
        </div>
    );
};

export default LatestNews;