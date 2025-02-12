const ContactForm = () => {
  return (
    <form className="form">
      <div className="row">
        <div className="form-group col-md-6">
          <label htmlFor="">Name</label>
          <input type="text" name="name" className="form-control" required />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="">Your Email</label>
          <input type="email" name="email" className="form-control" required />
        </div>
        <div className="form-group col-md-12">
          <label htmlFor="">Your Subject</label>
          <input type="text" name="subject" className="form-control" required />
        </div>
        <div className="form-group col-md-12">
          <label htmlFor="">Your Message</label>
          <textarea
            rows={6}
            name="message"
            className="form-control"
            required
          ></textarea>
        </div>
        <div className="col-md-12 text-center">
          <button
            type="submit"
            value="Send message"
            name="submit"
            id="submitButton"
            className="btn_one"
            title="Submit Your Message!"
          >
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
