import React from 'react';
import { AiFillStar, AiOutlineStar, AiFillEye, AiOutlineShareAlt } from 'react-icons/ai';

const NewsCard = (props = {}) => {
    const {news} = props || {};
    const renderStars = (rating) => {
        const totalStars = 5;
        const filledStars = Math.floor(rating); // Number of filled stars
        const hasHalfStar = rating % 1 !== 0; // Check if there's a half star

        return (
            <>
                {/* Filled Stars */}
                {Array.from({ length: filledStars }).map((_, index) => (
                    <AiFillStar key={`filled-${index}`} className="text-yellow-500" />
                ))}
                {/* Empty Stars */}
                {Array.from({ length: totalStars - filledStars }).map((_, index) => (
                    <AiOutlineStar key={`empty-${index}`} className="text-yellow-500" />
                ))}
            </>
        );
    };

    return (
        <div className="bg-white border mt-2 border-blue-300 shadow-md rounded-lg overflow-hidden">
            {/* Header */}
            <div className="p-4 flex items-center gap-3">
                <img
                    src={news.author.img}
                    alt={news.author.name}
                    className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                    <h2 className="text-sm font-semibold">{news.author.name}</h2>
                    <p className="text-xs text-gray-500">{news.author.published_date}</p>
                </div>
                <button className="ml-auto text-gray-400 hover:text-gray-600">
                    <AiOutlineShareAlt size={20} />
                </button>
            </div>

            {/* Thumbnail */}
            <img
                src={news.image_url}
                alt={news.title}
                className="w-full h-64 object-cover"
            />

            {/* Content */}
            <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{news.title}</h3>
                <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                    {news.details}
                </p>
                <p className="text-blue-500 font-semibold text-sm mt-1 cursor-pointer">
                    Read More
                </p>
            </div>

            {/* Footer */}
            <div className="p-4 flex items-center justify-between border-t border-gray-200">
                {/* Rating */}
                <div className="flex items-center gap-2">
                    <div className="flex">{renderStars(news.rating.number)}</div>
                    <span className="text-sm font-semibold">({news.rating.number})</span>
                </div>

                {/* Views */}
                <div className="flex items-center gap-1">
                    <AiFillEye className="text-gray-500" />
                    <span className="text-sm">{news.total_view || "N/A"}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
