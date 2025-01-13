import React from "react";
import ContactField from '../../components/ContactField/ContactField'
import ContactField2 from '../../components/ContactField/ContactField2'

const Contact = () => {
    return (
        <div className="flex flex-row row-start-2 gap-[10%] place-content-center pt-[5%]">
            <ContactField2 />
        </div>

    );
};

export default Contact;