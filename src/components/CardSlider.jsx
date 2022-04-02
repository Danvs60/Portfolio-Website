import React, { useState, useEffect } from 'react'
import Card from './Card'
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from 'react-icons/io'

export default function CardSlider() {

    let test = [
        { name: "G.O.A.T", description: "This is my first project" },
        { name: "O.D.", description: "This is my second project" },
        { name: "Zaditen", description: "This is my third project" },
        { name: "Oftabak", description: "This is my fourth project" },
        { name: "GheeMummy", description: "This is my fifth project" },
        { name: "Mine craft", description: "This is my sixth project" },
        { name: "Antihistamine pills", description: "This is my seventh project" },
    ]

    const [repos, setRepos] = useState(test)

    // const getRepos = () => {
    //   fetch("https://api.github.com/users/Danvs60/repos")
    //   .then(res => res.json())
    //   .then(data => console.log(data))
    //   console.info(repos)
    // }

    // useEffect(() => {
    //   getRepos()
    // }, [])

    return (
        <>
            <button onClick={() => {
                let arr = [...repos]
                setRepos(arr.unshift(arr.pop()))
                setRepos(arr)
            }}
                className='absolute -left-24 text-gray-100 text-opacity-30 hover:scale-125 hover:text-opacity-70 duration-100'>
                <IoIosArrowDropleftCircle size={70} />
            </button>
            <button onClick={() => {
                let arr = [...repos]
                setRepos(arr.push(arr.shift()))
                setRepos(arr)
            }}
                className='absolute -right-24 text-gray-100 text-opacity-30 hover:scale-125 hover:text-opacity-70 duration-100'>
                <IoIosArrowDroprightCircle size={70} />
            </button>
            {repos.slice(0, 3).map((proj, i) => (
                // console.log(proj.name, proj.description , i)
                <Card key={i + new Date().getTime()} sm={i % 2 === 0} title={proj.name} desc={proj.description} />
            ))}
        </>
    )
}
