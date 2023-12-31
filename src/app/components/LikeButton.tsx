"use client"
import React, { useState } from 'react';
import { HiThumbUp } from 'react-icons/Hi';
import Topic from './topic';

const LikeButton = ({ params }: any) => {
    // const { id } = params

    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(0)

    const handleLikeClick = () => {
        setLiked(!liked); // Toggle the like state
        !liked ? setLikes(likes + 1) : setLikes(likes - 1)
    };


    return (
        <>
            <button className={`${liked ? 'text-blue-500' : 'text-gray-400'} cursor-pointer transition 1574ms flex items-center gap-1`}
                onClick={handleLikeClick}
            // Change color based on liked state
            >
                <h2 className='text-gray-400'>{likes}</h2>
                <HiThumbUp size={24} />
                <span>Like</span>
            </button>
        </>

    );
};

export default LikeButton;
