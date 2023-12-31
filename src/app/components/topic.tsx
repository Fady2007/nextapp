import React from 'react'
import { HiPencilAlt, HiOutlineTrash, HiPlusCircle, HiPencil } from "react-icons/Hi"
import Link from 'next/link'
import RemoveBtn from './RemoveBtn'
import TopicsFromdb from './topicsFromdb'
import "./style.css"

const getTopics = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/topics/", {
            cache: "no-store"
        })

        if (!res.ok) {
            throw Error("Failed")
        }

        return res.json()
    } catch (error) {
        console.log(error)
    }
}

export default async function Topic() {
    const { topics } = await getTopics()
    let numOfTopics: number = topics.length
    return (
        <>
            {
                numOfTopics > 0 ?
                    <>
                        <h1 className='mt-2'>
                            Number of topics:
                            <span className='text-blue-600 mx-1'>
                                {numOfTopics}
                            </span>
                        </h1>
                        <TopicsFromdb topics={topics} />
                    </>
                    :
                    <div className='mt-4 flex gap-4 flex-col items-center justify-center'>
                        <h1 className='text-center text-gray-500 size-em segoe'>
                            There is no articles yet create the first one
                        </h1>
                        <Link href="./addTopic"
                            className='bg-slate-600 w-50 flex text-white items-center justify-center gap-1 text-center rounded p-2 transition hover:bg-slate-500 transition-duration: 150ms'>
                            <HiPlusCircle className='text-lg'></HiPlusCircle>
                            <div>Create a Topic</div>
                        </Link>
                    </div>
            }
        </>

    )
}
