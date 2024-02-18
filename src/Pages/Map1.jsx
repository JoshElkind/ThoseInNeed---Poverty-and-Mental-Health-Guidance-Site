import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import "./Map1.css";

const Map1 = ({longitude, latitude, placeType}) => {
  
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBZlg0kd37Rw4O6pPK-vUb-RVfG2-kVdRM"
    ,
  });
  const center = useMemo(() => ({ lat: latitude, lng: longitude }), []);
  
  
  
  
  return (
    <div className="App">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          mapContainerStyle={{
            margin: "auto",
            width: "40%",
            height: "100%"
          }}
          center={center}
          zoom={12} 
        />
      )}
    </div>
  );
};

export default Map1;