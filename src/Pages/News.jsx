import React from 'react';
import { AiFillStar, AiOutlineEye } from 'react-icons/ai';
import { FaFireAlt } from 'react-icons/fa';

const ArticleCard = ({ news }) => {
  const { title, author, rating, total_view, thumbnail_url, others_info } = news;

  return (
    <div className="card w-full bg-white shadow-lg rounded-lg overflow-hidden mt-5">
      {/* Thumbnail */}
      <div className="relative">
        <img src={thumbnail_url} alt={title} className="w-full h-[450px] object-center" />
        {others_info.is_trending && (
          <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full flex items-center">
            <FaFireAlt className="mr-1" /> Trending
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        {/* Title */}
        <h2 className="text-xl font-bold">{title}</h2>

        {/* Author Info */}
        <div className="flex items-center space-x-3">
          <img src={author.img} alt={author.name} className="w-8 h-8 rounded-full" />
          <div>
            <p className="font-semibold">{author.name}</p>
            <p className="text-gray-500 text-sm">{new Date(author.published_date).toLocaleDateString()}</p>
          </div>
        </div>

        {/* Rating & Views */}
        <div className="flex items-center justify-between text-gray-600 text-sm">
          <div className="flex items-center">
            <AiFillStar className="text-yellow-500 mr-1" />
            <span>{rating.number}</span>
            <span className="ml-1">{rating.badge}</span>
          </div>
          <div className="flex items-center">
            <AiOutlineEye className="mr-1" /> {total_view} views
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
