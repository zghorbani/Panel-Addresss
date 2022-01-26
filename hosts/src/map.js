import React, { useState, useEffect } from "react";
import GMap from "./GMap";
import BaladApp from "converterApp/RemoteApp";
import NeshanApp from "neshanApp/RemoteApp";
import AvalApp from "avalApp/RemoteApp";
import './index.css';
// API key of the google map
const GOOGLE_MAP_API_KEY = "AIzaSyBVszhjnzggZInW5UKGwU-2WKnF01CQxoM";

// load google map script
const loadGoogleMapScript = (callback) => {
  if (
    typeof window.google === "object" &&
    typeof window.google.maps === "object"
  ) {
    callback();
  } else {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}`;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener("load", callback);
  }
};

function App() {
  const [loadMap, setLoadMap] = useState(false);

  useEffect(() => {
    loadGoogleMapScript(() => {
      setLoadMap(true);
    });
  }, []);

  return (
    <div className="App">
     
        <div>
          بلد
          <BaladApp />
        </div>
        <div>
          نشان
          <NeshanApp />
        </div>
        <div>
          کتاب اول
          <AvalApp />
        </div>
    

      {!loadMap ? <div>Loading...</div> : <GMap />}
    </div>
  );
}

export default App;
