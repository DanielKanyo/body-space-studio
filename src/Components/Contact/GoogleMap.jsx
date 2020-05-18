import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const style = {
    width: "100%",
    height: "400px"
}

const GoogleMap = (props) => {
    return (
        <div>
            <Map
                google={props.google}
                style={style}
                initialCenter={{
                    lat: 45.2531289,
                    lng: 19.8332593
                }}
                zoom={15}
            >
            </Map>
        </div>
    );
}

export default GoogleApiWrapper({
    apiKey: ("")
})(GoogleMap);