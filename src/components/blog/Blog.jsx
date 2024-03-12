const Blog = (props) => {

    const {author,id,name,post_date,profile_img,reading_time,title,description,image}=props.blog;

  return <div className="w-[90%] mx-auto">
    <img className="w-full rounded-md h-[400px]" src={image} alt={name} />
    <h1>{author}</h1>



  </div>;
};
export default Blog;