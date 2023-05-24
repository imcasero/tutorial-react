import { Contact } from "../../models/contact.class";
import ContactComponent from "../pure/contact";

const ContactListComponent = () => {
    const defaultContact = new Contact(
        "Diego",
        "Casero",
        "diegocasero@falso.com",
        true
    );
    return (
        <div>
            <div>
                <h1>Your contact:</h1>
                <ContactComponent contact={defaultContact}></ContactComponent>
            </div>
        </div>
    )
}
export default ContactListComponent;