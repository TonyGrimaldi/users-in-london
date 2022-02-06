import { LONDON_COORDINATES } from './constants.js';

const isInFiftyMilesToLondon = (lat, lon) => {
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
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    return dist > 50 ? false : true;
  }
};

export const getUsersIn50MilesGPS = (usersData) => {
  const usersInFiftyMilesToLondon = [];
  usersData.reduce((acc, current) => {
    return (
      isInFiftyMilesToLondon(current.latitude, current.longitude) &&
      usersInFiftyMilesToLondon.push(current)
    );
  }, 0);
  return usersInFiftyMilesToLondon;
};
