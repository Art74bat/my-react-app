import React, { useEffect, useRef } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps'
function MyMap() { 


  return ( 
  <YMaps> < Map defaultState={{ center: [55.751574, 37.573856], zoom: 9 }}> < Placemark geometry={[55.751574, 37.573856]} /> </ Map> </YMaps> ); 
} 
export default MyMap