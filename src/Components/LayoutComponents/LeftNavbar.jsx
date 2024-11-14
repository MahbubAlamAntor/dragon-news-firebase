import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import babyNews from '../../assets/assets/babyNews.jpg'
import { FaCalendar } from "react-icons/fa";

const LeftNavbar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
            .then((res) => res.json())
            .then(data => setCategories(data.data.news_category))
    }, [])
    return (
        <div>
            <h2 className="font-semibold">All Category ({categories.length})</h2>
            <div className="flex flex-col gap-2 my-6">
                {
                    categories.map((category) => <NavLink to={`/category/${category.category_id}`} className="btn py-2" key={category.category_id}>{category.category_name}</NavLink>)
                }
            </div>
            <div className="">
                <Link to='/category/08'>
                    <div className="space-y-3 bg-base-200 p-4 rounded-xl">
                        <img className="rounded-xl" src={babyNews} alt="" />
                        <h2 className="text-lg font-bold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                        <div className="flex justify-between">
                            <p className="text-gray-500 font-semibold text-base">Sports</p>
                            <span className="flex items-center gap-2"><FaCalendar></FaCalendar> Jan 6 2022</span>
                        </div>
                    </div>
                </Link>
                <Link to='/category/08'>
                    <div className="space-y-3 bg-base-200 p-4 rounded-xl mt-4">
                        <img className="rounded-xl" src={babyNews} alt="" />
                        <h2 className="text-lg font-bold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                        <div className="flex justify-between">
                            <p className="text-gray-500 font-semibold text-base">Sports</p>
                            <span className="flex items-center gap-2"><FaCalendar></FaCalendar> Jan 6 2022</span>
                        </div>
                    </div>
                </Link>
                <Link to='/category/08'>
                    <div className="space-y-3 bg-base-200 p-4 rounded-xl mt-4">
                        <img className="rounded-xl" src={babyNews} alt="" />
                        <h2 className="text-lg font-bold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                        <div className="flex justify-between">
                            <p className="text-gray-500 font-semibold text-base">Sports</p>
                            <span className="flex items-center gap-2"><FaCalendar></FaCalendar> Jan 6 2022</span>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default LeftNavbar;