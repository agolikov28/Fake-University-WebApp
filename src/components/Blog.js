import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { blogList } from './data'
import Chip from './Chip'
import EmptyList from './EmptyList'
import { Button } from './Button'
import './Blog.css'

function Blog() {
    const {id} = useParams()
    const [blog, setBlog] = useState(null)
    useEffect(() => {
    let blog=blogList.find(blog => blog.id===parseInt(id))
    if(blog){
        setBlog(blog)
    }
    },[])
    
  return (
    <div>
        <div className="blog-goBack">
        <Button linkTo='/events'><span>&#8592;</span> Go Back</Button>
        </div>
        {
            blog ? (<div className="blog-wrap">
                <header>
                    <p className='blog-date'>Published {blog.createdAt}</p>
                    <h1>{blog.title}</h1>
                    <div className="blog-subCategory">
                        {blog.subCategory.map((category,index) =>(<div>
                            <Chip key={index} label={category}/>
                        </div>))}
                    </div>
                </header>
                <img src={blog.cover} alt="cover" />
                <p className='blog-desc'>{blog.description}</p>
            </div>) : (<EmptyList/>)
        }
    </div>
  )
}

export default Blog