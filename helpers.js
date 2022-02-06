import { LONDON_COORDINATES } from './constants.js';

const isInFiftyMilesFromLondon = (lat, lon) => {
  const { lat: londonLat, lon: londonLon } = LONDON_COORDINATES;
  if (londonLat == lat && londonLon == lon) {
    return true;
  } else {
    const radLondonLat = (Math.PI * londonLat) / 180;
    const radLat = (Math.PI * lat) / 180;
    const theta = londonLon - lon;
    const radTheta = (Math.PI * theta) / 180;
    let dist =
      Math.sin(radLondonLat) * Math.sin(radLat) +
      Math.cos(radLondonLat) * Math.cos(radLat) * Math.cos(radTheta);
    if (dist > 1) {
      dist = 1;
    }
    console.log(dist);
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    return dist > 50 ? false : true;
  }
};

export const getUsersIn50MilesGPS = (usersData) => {
  const usersInFiftyMilesFromLondon = [];
  usersData.reduce((acc, current) => {
    return (
      isInFiftyMilesFromLondon(current.latitude, current.longitude) &&
      usersInFiftyMilesFromLondon.push(current)
    );
  }, 0);
  return usersInFiftyMilesFromLondon;
};