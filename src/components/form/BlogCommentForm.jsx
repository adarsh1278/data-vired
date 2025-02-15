'use client'
import DivAnimateY from "../utils/DivAnimateY";

const BlogCommentForm = () => {
  return (
    <DivAnimateY className="comment_form">
      <h3 className="blog_head_title">Add a Comment</h3>
      <div className="contact comment-box">
        <form id="contact-form" method="post" encType="multipart/form-data">
          <div className="row">
            <div className="form-group col-md-6">
              <input
                type="text"
                name="name"
                className="form-control"
                id="first-name"
                placeholder="Name"
                required
              />
            </div>
            <div className="form-group col-md-6">
              <input
                type="email"
                name="email"
                className="form-control"
                id="first-email"
                placeholder="Email"
                required
              />
            </div>
            <div className="form-group col-md-12">
              <input
                type="text"
                name="subject"
                className="form-control"
                id="subject"
                placeholder="Subject"
                required
              />
            </div>
            <div className="form-group col-md-12">
              <textarea
                rows={6}
                name="message"
                className="form-control"
                id="description"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <div className="col-md-12">
              <div className="actions">
                <button
                  type="submit"
                  value="Send message"
                  name="submit"
                  id="submitButton"
                  className="btn btn_one"
                  title="Submit Your Message!"
                >
                  Submit Comment
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </DivAnimateY>
  );
};

export default BlogCommentForm;
