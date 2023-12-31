"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
const EditForm = ({ id, title, des }: any) => {

    const [newtitle, setNewTitle] = useState(title);
    const [newdes, setNewDes] = useState(des);

    const edited = true

    const router = useRouter();

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ newtitle, newdes, edited }),
            });

            if (!res.ok) {
                throw new Error("Failed to update topic");
            }

            router.push("/");
            router.refresh();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1 className='text-black mt-3 text-center text-lg font-sans font-bold'>Edit topic</h1>
                <div>
                    <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                        Topic Title
                    </label>
                    <div className="mt-2">
                        <input
                            onChange={(e) => setNewTitle(e.target.value)}
                            value={newtitle}
                            type="text"
                            name="price"
                            className="w-full mb-4 rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Title.."
                        />
                        <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                            Topic Description
                        </label>
                        <textarea onChange={(e) => setNewDes(e.target.value)}
                            value={newdes}
                            className="w-full px-3 py-2 h-40 border rounded-md focus:outline-none focus:ring-2 focus:border-blue-300 placeholder:text-gray-400"
                            placeholder="Description">
                        </textarea>
                    </div>
                </div>
                <button className='bg-green-500 text-white px-4 py-3 transition rounded mt-4 hover:bg-green-600 font-bold'>
                    Update Topic
                </button>
            </form>
        </div>
    )
}

export default EditForm