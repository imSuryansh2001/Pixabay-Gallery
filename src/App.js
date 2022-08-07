import React,{useState,useEffect} from 'react'
import Card from './Components/Card';
import ImageSearch from './Components/ImageSearch';
import {IoIosArrowDropupCircle} from "react-icons/io"
import {Link} from "react-scroll"

const App = () => {

  const[images,setImages] = useState([]);
    const[loading,setLoading] = useState(true);
    const[term,setTerm] = useState("");

    useEffect(()=>{
        fetch(`https://pixabay.com/api/?key=27163795-79905ae25593a00451c55ed4c&q=${term}&image_type=photo&pretty=true`)
        .then(res => res.json())
        .then(data=>{
        setImages(data.hits);
        setLoading(false);
      })
        .catch(err=>console.log(err));
    },[term]);

  return (
    <>

    {/* top arrow */}
   <Link to="pixabay" smooth={true} duration={2000}>
   <IoIosArrowDropupCircle className='text-2xl md:cursor-pointer md:text-3xl ml-2 md:ml-[95%] fixed z-[2] mt-[15rem] border-2 border-green-900 rounded-full bg-green-400'/>
   </Link>
    
    {/* theme div */}
    <div className='dark:bg-[#262e4f]' >
        <ImageSearch searchText={(text)=>setTerm(text)} />

        {!loading && images.length===0  && <h1 className='text-3xl text-center mt-32 md:font-bold p-6 dark:text-green-200'>Oops no image found...</h1> }

          {/* card all in one */}
            <div className='flex flex-wrap'>
              {
                images.map((img)=>{
                  return <>
                  <Card key={img.id} img={img}/>
                  </>
              })
        }
            </div>
    </div>
      
    </>
  );
}

export default App
