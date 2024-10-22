import React,{useState,useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import { blogsData } from '../data'; 

const Language = () => {
    const navigate=useNavigate()
    const {title}=useParams()
const[lanInfo,setLanInfo]=useState("")

useEffect(()=>{
     const filterTitle = blogsData.filter((info)=>info.title ===title) 
     setLanInfo(filterTitle[0].body)
},[])

  return (
    <div>
      <h2 style={{color:"red", textAlign:"center"}}>{title} </h2>
      <p style={{backgroundColor:"brown"}}>{lanInfo.slice(0,450)} </p>
      <p style={{backgroundColor:"brown"}}> {lanInfo.slice(451,1000)}</p>
      <button
       style={{backgroundColor:"orange"}}
       onClick={()=>{
             navigate("/blogs")
      }}
      >Go to Blogs</button>
    </div>
  )
}

export default Language;
