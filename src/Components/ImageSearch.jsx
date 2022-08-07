import React, { useState } from 'react'
import {WiMoonAltFirstQuarter} from "react-icons/wi"


const ImageSearch = ({searchText}) => {

    // theme button

    const themeButton = () =>{
        document.body.classList.toggle("dark");
    }

    // for date
    const[date,setDate] = useState();

    setInterval(() => {
        setDate(new Date().toLocaleDateString());
    }, 1000);

    // for time

    const[time,setTime] = useState();

    setInterval(() => {
        setTime(new Date().toLocaleTimeString());
    }, 1000);


    const[text,setText] = useState("");

    const onSubmit = (s) =>{
        s.preventDefault();

        searchText(text);
    }

  return (
    <>
    <h1 id="pixabay" className='text-center font-semibold text-white pb-4 pt-3 bg-[#02BE6E] md:text-4xl text-3xl'>Pixabay</h1>
        <div className='flex justify-center bg-[#02BE6E] p-8 w-[100%]'>
            <form onSubmit={onSubmit} >
                <input onChange={s=>setText(s.target.value)} autocomplete="off" className='outline-none rounded-tl-md rounded-bl-md placeholder:text-center placeholder:tracking-[0.1rem] text-center py-1 w-[55vw] md:w-[40vw] lg:w-[30vw] bg-gray-100' type="text" placeholder='Search Image...'/>
                <button className='bg-[#262e4f] rounded-tr-md rounded-br-md text-white px-2 py-1' type='submit'>Search</button>
            </form>
        </div>

        {/* date,time, dark-light mode box */}
        <div className='flex justify-evenly items-center bg-gradient-to- bg-[#262e4f] p-4'>
            <p className='text-xl text-white'> {date} </p>
            <p className='text-xl text-white'> {time} </p>
            <WiMoonAltFirstQuarter onClick={themeButton} className='text-2xl md:cursor-pointer text-white'/>
        </div>
    </>
  );
}

export default ImageSearch