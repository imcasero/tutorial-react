import React from 'react';
import { Contact } from '../../models/contact.class';


const ContactComponent = ({ contact }) => {
    return (
      <div>
        <h2>Name: {contact.name}</h2>
            <h3>Surname: {contact.surname}</h3>
            <h4>Email: {contact.email}</h4>
            <h5>This contact is: {contact.conect ? "In line" : "Of line"}</h5>
      </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instaceOf(Contact),
};


export default ContactComponent;
