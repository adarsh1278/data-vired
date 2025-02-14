 'use client'
import DivAnimateY from "../utils/DivAnimateY";

const BlogAuthor = () => {
  return (
    <DivAnimateY className="author_part">
      <h3 className="blog_head_title">About the author</h3>
      <div className="single_author">
        <img src="/assets/img/blog/author.jpg" alt="" />
        <h4>Marina Mojo</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          ultricies quam nisi, vel gravida enim accumsan id. Praesent justo
          quam, auctor et lorem in, pulvinar ornare orci.
        </p>
      </div>
    </DivAnimateY>
  );
};

export default BlogAuthor;
