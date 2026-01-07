import React from 'react'

const Tiles = ({ name, value }) => {
    return (
        <div className="p-6 rounded-2xl shadow-soft border border-gray-700/50 flex flex-col items-center justify-center text-center hover:border-blue/30 transition-colors cursor-default w-48">
            <span className="text-primary mb-2 text-3xl opacity-80 capitalize">
                {name}
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