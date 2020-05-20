import React from "react";

import GoogleMap from "../Contact/GoogleMap";

const ContactPreview = () => {
    return (
        <div className="contact-preview">
            <div className="building-img"></div>
            <div>
                <GoogleMap />
            </div>
        </div>
    )
}

export default ContactPreview
