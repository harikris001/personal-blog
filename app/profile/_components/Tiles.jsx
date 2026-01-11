import React from 'react'
import { Newspaper, Heart, MessageSquareText, UserStar } from "lucide-react";

const Tiles = ({ name, value }) => {
    return (
        <div className="surface bg-white py-6 rounded-2xl shadow-soft flex flex-col items-center justify-center text-center transition-colors cursor-default w-55">
            <span className="text-primary mb-2 text-3xl opacity-80 capitalize">
                {name === "articles" && <Newspaper color="blue" size={32} />}
                {name === "likes" && <Heart color="red" size={32} />}
                {name === "comments" && <MessageSquareText color="orange" size={32} />}
                {name === "followers" && <UserStar color="cyan" size={32} />}
            </span>
            <span className="text-3xl font-bold text-text-main-light dark:text-text-main-dark mb-1">
                {value}
            </span>
            <span className="text-sm font-medium text-text-sub-light dark:text-text-sub-dark uppercase tracking-wide">
                {name}
            </span>
        </div>
    )
}

export default Tiles