import React, { useEffect } from "react";

import PlaceIcon from "@material-ui/icons/Place";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";

import ContactPreview from "../Home/ContactPreview";
import "./Contact.css";

const Contact = () => {
    const contactData = [
        {
            icon: "place",
            text: "Petra Drapšina 27 | Novi Sad 21000"
        },
        {
            icon: "phone",
            text: "+381 69 4001539"
        },
        {
            icon: "email",
            text: "bodyspace1976@gmail.com"
        },
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const getContactIcon = (iconName) => {
        switch (iconName) {
            case "place":
                return <PlaceIcon />;
            case "phone":
                return <PhoneIcon />;
            case "email":
                return <EmailIcon />;

            default:
                console.error(`Invalid icon name: ${iconName}`);
                break;
        }
    }

    return (
        <div className="Contact">
            <div>
                {
                    contactData.map((contact, i) => {
                        return (
                            <div key={i} className="icon-and-text-container">
                                <div>
                                    {getContactIcon(contact.icon)}
                                </div>
                                <div>
                                    {contact.text}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <ContactPreview />
        </div>
    )
}

export default Contact
