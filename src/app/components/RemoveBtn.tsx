"use client"
import { useRouter } from 'next/navigation'
import React from 'react'



const RemoveBtn = ({ id }: any) => {
  const router = useRouter()

  const removeTopic = async () => {
    const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
      method: "DELETE",
    })
    if (res.ok) {
      router.refresh()
    }
  }

  return (
    <div>
      <button onClick={removeTopic} className='text-red-400 hover:text-red-600 transition'>
        {/* <HiOutlineTrash size={24} /> */}
      </button>
    </div>
  )
}

export default RemoveBtn