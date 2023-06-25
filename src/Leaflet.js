import React, { useEffect, useRef, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

function Leaflet() {
  const mapRef = useRef(null);
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);

  useEffect(() => {
    let map = null;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setLat(latitude);
          setLong(longitude);

          map = L.map(mapRef.current).setView([latitude, longitude], 30);
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          }).addTo(map);

          const customIcon = L.icon({
            iconUrl: markerIcon,
            iconRetinaUrl: markerIconRetina,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowUrl: markerShadow,
            shadowSize: [41, 41],
            shadowAnchor: [12, 41]
          });

          const marker = L.marker([latitude, longitude], { icon: customIcon }).addTo(map);

          map.on('move', function(e) {
            const center = map.getCenter();
            setLat(center.lat);
            setLong(center.lng);
            marker.setLatLng(center);
          });

          return () => {
            map.remove();
          };
        },
        error => {
          console.error('Error al obtener la ubicación actual:', error);
        }
      );
    } else {
      console.error('La geolocalización no está soportada en este navegador.');
    }
  }, []);

  return (
    <div>
      <div style={{ height: '400px' }} ref={mapRef}></div>
      {lat && long && (
        <div>
          <p>{lat},{long}</p>
          <a href={'https://www.google.com/maps/search/?api=1&query=' + lat + ',' + long}>
            Ubicacion
          </a>
          </div>
      )}

    </div>
  );
}

export default Leaflet
;
