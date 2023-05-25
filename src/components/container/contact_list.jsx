import { useState } from "react";
import { Contact } from "../../models/contact.class";
import ContactComponent from "../pure/contact";
import ButtonComponent from "../pure/button_conect";

const ContactListComponent = () => {
  const [contact, setContact] = useState(
    new Contact("Diego", "Casero", "diegocasero@falso.com", true)
  );

  const handleButtonClick = () => {
    const updatedContact = { ...contact }; // Crear una copia del objeto contact actual
    updatedContact.conect = !updatedContact.conect; // Invertir el valor de la propiedad conect
    setContact(updatedContact); // Actualizar el estado contact con el contacto actualizado
  };

  return (
    <div>
      <div>
        <h1>Your contact:</h1>
        <ContactComponent contact={contact} />
        <ButtonComponent
          isConnected={contact.conect}
          handleClick={handleButtonClick}
        />
      </div>
    </div>
  );
};

export default ContactListComponent;
