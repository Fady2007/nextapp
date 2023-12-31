import React, { useState } from 'react'
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'
// import { HiBan, HiEmojiHappy, HiEmojiSad, HiHashtag, HiPencilAlt, HiShare, HiStar, HiThumbDown, HiThumbUp } from 'react-icons/Hi'
import { Profiles } from './info'
import "./style.css"
import LikeButton from './LikeButton'


const TopicsFromdb = ({ topics }: any) => {
    const person = {
        name: "Fady",
        imageUrl: "/profileLogo.PNG"
    }
    return (
        <div>
            {topics.map((t: any, i: any) => (

                <div key={i}>
                    <div className='flex justify-between hover:bg-slate-100 transition hover-shadow relative border border-slate-400 p-4 gap-5 items-start my-3 rounded'>
                        <div>
                            <div className='flex items-center gap-5 mb-2'>
                                <Profiles name={person.name} imageUrl={person.imageUrl} />

                                <div className='font-sans text-gray-400 text-sm'>
                                    {new Date(t.createdAt).toLocaleTimeString()}
                                </div>
                                {t.edited == true ?
                                    <div className='font-sans text-gray-400 text-sm'>
                                        Edited: {new Date(t.updatedAt).toLocaleTimeString()}
                                    </div>
                                    : ""}
                            </div>
                            <h1 className='text-black font-bold text-2xl font-sans'>{t.title}</h1>
                            <div>
                                <h2 className='text-black text-balance'>{t.des}</h2>
                            </div>

                            <div className='flex gap-2 items-center mt-2'>

                                <LikeButton id={t._id} />
                                <div className='text-gray-400 cursor-pointer hover:text-slate-600 transition 1574ms flex items-center gap-1'>
                                    {/* <HiShare size={24} /> */}
                                    <span>Share</span>
                                </div>
                                <div className='text-gray-400 cursor-pointer hover:text-orange-400 transition 1574ms flex items-center gap-1'>
                                    {/* <HiStar size={24} /> */}
                                    <span>Favourite</span>
                                </div>
                            </div>
                            <div className='flex items-center gap-1 mt-2'>
                                {/* <HiHashtag className='size-em text-gray-400 transition 1574ms' /> */}
                                <span className='text-gray-500 text-sm transition 1574ms'>
                                    id: {t._id}
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <RemoveBtn id={t._id} />
                            <Link href={`/edit123/${t._id}`} className='text-slate-500 hover:text-blue-400 transition'>
                                {/* <HiPencilAlt size={24} /> */}
                            </Link>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    )
}

export default TopicsFromdb