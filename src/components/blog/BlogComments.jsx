'use client'
import DivAnimateY from "../utils/DivAnimateY";

const BlogComments = () => {
  return (
    <DivAnimateY className="comments_part">
      <h3 className="blog_head_title">Comments</h3>
      <div className="single_comment">
        <img src="/assets/img/blog/c1.jpg" alt="" />
        <h4>Ayoub Fennouni</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          ultricies quam nisi, vel gravida enim accumsan id. Praesent justo
          quam, auctor et lorem in, pulvinar ornare orci.
        </p>
      </div>
      <div className="single_comment sc_left">
        <img src="/assets/img/blog/c3.jpg" alt="" />
        <h4>Kader Bhai</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          ultricies quam nisi, vel gravida enim accumsan id. Praesent justo
          quam, auctor et lorem in, pulvinar ornare orci.
        </p>
      </div>
      <div className="single_comment single_comment_mbnone">
        <img src="/assets/img/blog/c2.jpg" alt="" />
        <h4>Mark Linomi</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          ultricies quam nisi, vel gravida enim accumsan id. Praesent justo
          quam, auctor et lorem in, pulvinar ornare orci.
        </p>
      </div>
    </DivAnimateY>
  );
};

export default BlogComments;
