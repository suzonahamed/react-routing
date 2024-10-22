import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { blogsData } from './../data';


const Blogs = () => {
      const[data,setData]=useState(blogsData)

  const navigate=useNavigate();

  const truncateString=(body,num)=>{
    if(body.length>num)
    {
      return body.slice(0,200) + ".....";
    }
    else{
      return body;
    }

  }

  return (
    <div>
       <h1>This is Blog Page:-</h1>

     <section>
            {data.map((blog)=>{
              const{id,title,body}=blog
              return <article key={id}> 
                     <h2>{title} </h2>
                     <p>{truncateString(body,200)} </p>
                     <Link to={title} style={{backgroundColor:"orange"}}>Learn More</Link>
              </article>
             
           })}
         
     </section><br/>
      
       <button style={{backgroundColor:"orange"}}  onClick={()=>{
        navigate("/home")
       }}>Go to Home page</button>
    </div>
  )
}

export default Blogs
