import "./styles.css";

import React from "react";

const Location = () => {
  return (
    <section className="location">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.4462515615865!2d80.09503431479509!3d6.956569519907102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25532a73d4f4f%3A0x0!2zNsKwNTcnMjMuNiJOIDgwwrAwNSc1MC4wIkU!5e0!3m2!1sen!2slk!4v1674371736781!5m2!1sen!2slk"
        width="600"
        height="450"
        style={{ border: 0 }}
        // allowfullscreen=""
        loading="lazy"
        // referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default Location;
