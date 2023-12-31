"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const AddTopic = () => {
    const router = useRouter()
    const [title, setTitle] = useState("")
    const [des, setDes] = useState("")

    // submit to db function
    const handleSubmit = async (e: any) => {
        e.preventDefault()
        if (!title || !des) {
            alert("title and descripttion are required!")
            return
        }
        try {
            const res = await fetch("http://localhost:3000/api/topics", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ title, des })
            })

            if (res.ok) {
                router.push("/")
                router.refresh()
            } else {
                throw new Error("Falied to create topic")
            }
        } catch (error) {
            console.log(error)
        }
    }

    // textarea futures
    const onChangeDes = (e: any) => {
        if (e.target.value.toLowerCase() == "lorem") {
            e.target.value =
                `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor molestiae voluptates exercitationem dolorum ullam, molestias excepturi necessitatibus officiis maxime modi quasi. Odio tempore similique deserunt, animi culpa voluptas eaque necessitatibus.`
        }
        setDes(e.target.value)
    }

    return (
        <div>
            <h1 className='text-black mt-3 text-center text-lg font-sans font-bold'>Add topic</h1>
            <div>
                <form className="mt-2" onSubmit={handleSubmit}>
                    <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                        Topic Title
                    </label>

                    <input
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        type="text"
                        name="price"
                        className="w-full mb-4 rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Title.."
                    />
                    <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                        Topic Description
                    </label>
                    <textarea onChange={onChangeDes}
                        value={des}
                        className="w-full px-3 py-2 h-40 border rounded-md focus:outline-none focus:ring-2 focus:border-blue-300 placeholder:text-gray-400"
                        placeholder="Description">
                    </textarea>

                    <button className='bg-green-500 text-white px-4 py-3 transition rounded hover:bg-green-600 font-bold'>
                        Add Topic
                    </button>
                </form>
            </div>

        </div>
    )
}

export default AddTopic
