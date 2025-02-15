
'use client'
import ImageAnimate from "../utils/ImageAnimate";
import DivAnimateY from "../utils/DivAnimateY";

const BlogDetails = ({ img, title }) => {
  return (
    <div className="arti_single">
      <div className="overflow-hidden arti_img_two">
        <ImageAnimate src={img} className="img-fluid" alt="Blog image" />
      </div>
      <DivAnimateY>
        <div className="arti_content ">
          <p>
            I almost couldn’t believe it was real! For my first test I had
            generate some website copy for me. I provided about 50 words to
            describe my business along with my business name. generated two
            variants of copy each with several paragraphs of professional
            sounding copy. I immediately shared the results with a friend who
            couldn’t believe it was written by an AI. is worth every Yaley and
            then some. Describe my business along with my business name.
            generated two variants of copy each with several paragraphs of
            professional sounding copy. I immediately shared the results with a
            friend who couldn’t believe it was written by an AI. is worth every
            Yaley and then some!
          </p>
        </div>
        <div className="arti_sp">
          <h2>{title}</h2>
          <p>
            I immediately shared the results with a friend who couldn’t believe
            it was written by an AI. is worth every Yaley and then some.
            Describe my business along with my business name. generated two
            variants of copy each with several paragraphs of professional
            sounding copy. I immediately shared the results with a friend who
            couldn’t believe it was written by an AI. is worth every Yaley and
            then some!
          </p>
        </div>
        <div className="share_sp">
          <h4>Share</h4>
          <ul>
            <li>
              <a href="#">
                <span className="ti-facebook"></span> Facebook
              </a>
            </li>
            <li>
              <a href="#">
                <span className="ti-twitter"></span> Twitter
              </a>
            </li>
            <li>
              <a href="#">
                <span className="ti-instagram"></span> Instagram
              </a>
            </li>
            <li>
              <a href="#">
                <span className="ti-linkedin"></span> Linkedin
              </a>
            </li>
          </ul>
        </div>
      </DivAnimateY>
    </div>
  );
};

export default BlogDetails;
