import React from 'react'
import Image from 'next/image'

type Person = {
    name: string,
    imageUrl: string,
    email?: string,
}

const Profiles: any = (person: Person) => {
    return (
        <div>
            <div className='flex items-center gap-2'>
                <Image className="rounded-full ring-2 ring-black" src={person.imageUrl} width="30" height="30" alt="" />
                <h2 className='text-blue-700'>{person.name}</h2>
            </div>
        </div>
    )
}

const Info = () => {
    return (
        <figure className="md:flex rounded-xl p-8 md:p-0 dark:bg-slate-800">
            <Image className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/profileLogo.PNG" alt="" width="384" height="512" />
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                    <p className="text-lg font-medium">
                        “Tailwind CSS is the only framework that I have seen scale
                        on large teams. It’s easy to customize, adapts to any design,
                        and the build size is tiny.”
                    </p>
                </blockquote>
                <figcaption className="font-medium">
                    <div className="text-sky-500 dark:text-sky-400">
                        Fady Emad
                    </div>
                    <div className="text-slate-700 dark:text-slate-500">
                        Staff Engineer, Egypt
                    </div>
                </figcaption>
                <div>
                </div>
            </div>
        </figure>
    )
}

{/* <div className="flex items-center space-x-2 mt-3 text-base">
                <h4 className="font-semibold text-slate-900">Contributors</h4>
                <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">204</span>
            </div>
            <div className="mt-3 flex -space-x-2 overflow-hidden">
                <Image className="inline-block h-12 w-12 rounded-full ring-2 ring-purple" src="/profileLogo.PNG" width="384" height="512" alt="" />
                <Image className="inline-block h-12 w-12 rounded-full ring-2 ring-purple" src="/profileLogo.PNG" alt="" width="384" height="512" />
                <Image className="inline-block h-12 w-12 rounded-full ring-2 ring-purple" src="/profileLogo.PNG" alt="" width="384" height="512" />
            </div>
            <div className="mt-3 text-sm font-medium">
                <a href="#" className="text-blue-500">+ 198 others</a>
            </div>

            <ul role="list" className="p-5 mt-6 divide-y divide-slate-200 bg-sky-100 rounded-full">
                <li className="flex py-4 first:pt-0 last:pb-0">
                    <Image className="h-10 w-10 rounded-full" src={person.imageUrl} alt="" width={500} height={500} />
                    <div className="ml-3 overflow-hidden">
                        <p className="text-sm font-medium text-slate-900">{person.name}</p>
                        <p className="text-sm text-slate-500 truncate">{person.email ? person.email : ""}</p>
                    </div>
                </li>
            </ul> */}

export { Profiles }
export default Info