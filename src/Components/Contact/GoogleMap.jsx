import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

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
                    lat: 45.2541117,
                    lng: 19.8347184
                }}
                zoom={15}
            >
                <Marker title={"Ognjena Price 1 | Novi Sad"} />
            </Map>
        </div>
    );
}

export default GoogleApiWrapper({
    apiKey: ("")
})(GoogleMap);