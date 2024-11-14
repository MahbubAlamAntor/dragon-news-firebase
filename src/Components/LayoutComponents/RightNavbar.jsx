import FindUs from "../FindUs";
import Login from "../Login";
import swimming from '../../assets/assets/swimming.png'
import classImg from '../../assets/assets/class.png'
import playGround from '../../assets/assets/playground.png'
import bgPng from '../../assets/assets/bg.png'

const RightNavbar = () => {
    return (
        <div>
            <div className="space-y-8">
                <Login></Login>
                <FindUs></FindUs>
            </div>
            <div className="mt-10 p-3 rounded-xl bg-gray-200 space-y-4">
                <h2 className="text-xl font-bold">Q-Zone</h2>
                <div className="space-y-3">
                    <img className="w-full" src={swimming} alt="" />
                    <img className="w-full" src={classImg} alt="" />
                    <img className="w-full" src={playGround} alt="" />
                </div>
                <div>
                    <img className="w-full" src={bgPng} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightNavbar;