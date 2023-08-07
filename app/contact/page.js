import React from 'react'
const socialLinks = [
    {
        link: "https://instagram.com/srkanyalcinkaya",
        display: "follow me on instagram"
    },
    {
        link: "https://x.com/srkanyalcinkaya",
        display: "follow me on X"
    },
    {
        link: "https://linkedin.com/in/srkanyalcinkaya",
        display: "follow me on linkedin"
    },
    {
        link: "https://github.com/srkanyalcinkaya",
        display: "follow me on github"
    },
]


export const metadata = {
    title: 'Contact',
    description: 'Contact',
  };
const page = () => {
    return (
        <ul className="grid grid-cols-1 md:gird-cols-2 lg:grid-cols-3 mt-8   font-sm text-neutral-600 dark:text-neutral-300">

            {socialLinks.map((item, index) => (

                <li className='border border-solid border-gray-500 p-2 rounded-xl ml-2 mb-2 ' key={index}>
                    <a className="flex items-center  hover:text-neutral-800 dark:hover:text-neutral-100 transition-all" rel="noopener noreferrer" target="_blank" href={item.link} ><svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z" fill="currentColor" />
                    </svg>
                        <p className="h-7 ml-2">{item.display}</p>
                    </a>
                </li>

            ))}
        </ul>

    )
}

export default page