import { useEffect, useState } from "react";

import Blog from "../blog/Blog";

const Blogs = () => {

    const [blogs ,setBlogs]=useState([]);

    console.log(blogs);

    useEffect(()=>{
        fetch('dB.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))

    },[])
  return <div className="md:w-2/3">
    {blogs.map(blog=><Blog key={blog.id} blog={blog}></Blog>)}
  </div>;
};
export default Blogs;