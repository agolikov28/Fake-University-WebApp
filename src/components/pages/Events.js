import React, { useState } from 'react'
import '../../App.css'
import SearchBar from '../SearchBar';
import BlogList from '../BlogList';
import {blogList} from '../data'
import EmptyList from '../EmptyList';


const Events = () => {

    const [blogs, setBlogs] = useState(blogList)
    const [searchKey, setSearchKey] = useState('')

    //Search Submit Func
    const handleSearchBar = (e) => {
        e.preventDefault();
        handleSearchResults();
    }

    //Search for blogs by category
    const handleSearchResults=()=>{
        const allBlogs = blogList;
        const filteredBlogs = allBlogs.filter((blog) =>
        blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
        )
        setBlogs(filteredBlogs)
    }

    const handleClearSearch = () => {
        setBlogs(blogList)
        setSearchKey('')
    }

    console.log(searchKey)

    return(
        <>
        <div className="events"style={{textAlign: 'center', paddingBottom: '400px', paddingTop: '400px', display: 'block'}}>
        <h1 style={{marginBottom: '24px'}}>University Blog</h1>
        <p style={{fontSize: '30px'}}>Where the Havendale Community has the freedom of expression</p>
        </div>
        <div>
        <h1 style={{marginTop: '80px'}}>In Recent News...</h1>
        <SearchBar 
        value={searchKey} 
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar} 
        handleSearchKey={(e)=>setSearchKey(e.target.value)}
        />
        {!blogs.length? <EmptyList/> : <BlogList blogs={blogs}/>}
        </div>

        
        </>
    )
}

export default Events;