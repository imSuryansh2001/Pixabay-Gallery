import React from 'react'
import {AiFillEye} from "react-icons/ai"
import {AiOutlineDownload} from "react-icons/ai"
import {AiFillLike} from "react-icons/ai"


const Card = ({img}) => {

    const tags = img.tags.split(",");

  return (
    <>
      
        {/* card main div */}
      <div id="card" className=' w-[95%] md:cursor-pointer duration-1000 md:overflow-hidden bg-green-100 dark:bg-gray-900 md:w-[45%] lg:w-[30%] md:flex-wrap mx-auto mt-16 shadow-gray-600 shadow-lg dark:shadow-black dark:shadow-lg rounded-br-md rounded-bl-md'>

          <center><img className='rounded-tr-md w-[100%]  duration-1000 md:hover:scale-110 rounded-tl-md' src={img.webformatURL} alt="/"/></center>
          <h1 className='font-bold text-center text-gray-800 dark:text-[#02BE6E] pt-3 font-sans text-2xl'>Photo by  {img.user} </h1>
          {/* views downloads and likes box */}
          <div className='flex justify-evenly items-center p-3'>
              <h4 className='px-3 py-4 text-gray-800 dark:text-green-200 text-lg text-center text-md'><AiFillEye/><span>{img.views}</span></h4>
              <h4 className='px-3 py-4 text-gray-800 dark:text-green-200 text-lg text-center text-md'><AiOutlineDownload/><span>{img.downloads}</span></h4>
              <h4 className='px-3 py-4 text-gray-800 dark:text-green-200 text-lg text-center text-md'><AiFillLike/><span>{img.likes}</span></h4>
          </div>

          {/* tags box */}
          <div className='flex justify-around p-3 bg-green-200 mb-2 rounded-md border border-black'>
            {tags.map((tag,index)=>{
              return <>
              <p key={index} className='font-thin rounded-md bg-[#02BE6E] text-white px-4 py-1'> #{tag} </p>
              </>
            })}
          </div>

      </div>
    </>
  );
}

export default Card
