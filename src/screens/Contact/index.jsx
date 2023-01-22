import ContactHeader from "../../components/ContactHeader";
import ContactUs from "../../components/ContactUs";
import Footer from "../../components/Footer";
import Location from "../../components/Location";
import "./styles.css";

import React from "react";

const Contact = () => {
  return (
    <>
      <ContactHeader />
      <Location />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Contact;
