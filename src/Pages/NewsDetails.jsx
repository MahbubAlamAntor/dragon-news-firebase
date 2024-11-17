import { Link, useLoaderData } from "react-router-dom";
import Header from "../Components/Header";
import RightNavbar from "../Components/LayoutComponents/RightNavbar";

const NewsDetails = () => {
    const data = useLoaderData();
    const news = data.data[0]
    return (
        <div className="w-11/12 mx-auto ">
            <header className="mb-9">
                <Header></Header>
            </header>
            <div className="grid grid-cols-12 gap-8">
                <div className="card border border-gray-300 rounded-xl p-2 bg-base-100 col-span-9">
                    <div>
                    <figure className="px-10 pt-10">
                        <img
                            src={news.image_url}
                            alt="Shoes"
                            className="rounded-xl w-full" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{news.title}</h2>
                        <span>{news.details}</span>
                        <Link to={`/category/${news?.category_id}`} className="btn btn-success">All news in this category</Link>
                    </div>
                    </div>
                </div>
                <aside className="col-span-3">
                    <RightNavbar></RightNavbar>
                </aside>
            </div>
        </div>
    );
};

export default NewsDetails;