import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import { googleMapsApiKey } from "../../Constants/apiKeys";

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
                    lat: 45.252460,
                    lng: 19.836398
                }}
                zoom={17}
            >
                <Marker title={"Ognjena Price 1 | Novi Sad"} />
            </Map>
        </div>
    );
}

export default GoogleApiWrapper({
    apiKey: (googleMapsApiKey)
})(GoogleMap);