 'use client'
import ContactForm from "../form/ContactForm";
 
import DivAnimateX from "../utils/DivAnimateX";
type Props = {
  style?: string;
};
const ContactSection = ({ style }: Props) => {
  return (
    <div
      id="contact"
      className={`contact_area section-padding ${style} overflow-hidden`}
    >
      <div className="container">
        <div className="row g-4">
          <DivAnimateX position={-60} className="col-lg-7 col-sm-12 col-xs-12">
            <div className="contact">
              <ContactForm />
            </div>
          </DivAnimateX>
          <DivAnimateX className="col-lg-5 col-sm-12 col-xs-12">
            {" "}
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.957183635167!2d-74.00402768559431!3d40.71895904512855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598a1316e7a7%3A0x47bb20eb6074b3f0!2sNew%20Work%20City%20-%20(CLOSED)!5e0!3m2!1sbn!2sbd!4v1600305497356!5m2!1sbn!2sbd"
                style={{ border: 0 }}
                allowFullScreen={false}
                aria-hidden="false"
              ></iframe>
            </div>
          </DivAnimateX>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
