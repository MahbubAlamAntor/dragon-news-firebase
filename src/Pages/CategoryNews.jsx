import { useLoaderData } from "react-router-dom";
import News from "./News";

const CategoryNews = () => {
    const { data: allNews } = useLoaderData();
    return (
        <div>
            <h2 className="text-lg font-bold">Dragon News Home</h2>
            <div className="mt-5">
                {
                    allNews && allNews.length > 0 ? allNews.map((news) => <News key={news._id} news={news}></News>) : <p className="bg-red-500 text-white p-4 rounded">Data Not Found</p>
                }
            </div>
        </div>
    );
};

export default CategoryNews;