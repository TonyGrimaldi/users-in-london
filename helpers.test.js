import { getUsersIn50MilesGPS } from './helpers.js';
import { LONDON_COORDINATES } from './constants.js';

const userInLondonRadius = {
  name: 'Joe',
  latitude: 51.5489435,
  longitude: 0.3860497,
};

const userOutsideLondonRadius = {
  name: 'Marc',
  latitude: 34.003135,
  longitude: -117.7228641,
};

const userInLondon = {
  name: 'Sasha',
  latitude: LONDON_COORDINATES.lat,
  longitude: LONDON_COORDINATES.lon,
};

describe('getUsersIn50MilesGPS', () => {
  describe('given an array of users data', () => {
    it('filters out users whose current coordinates are not within 50 miles to London', () => {
      expect(
        getUsersIn50MilesGPS([userInLondonRadius, userOutsideLondonRadius]),
      ).toEqual([userInLondonRadius]);
    });
    it('doesnt filter out users whose coordinates are the exactly the same of the London conventional coordinates', () => {
      expect(getUsersIn50MilesGPS([userInLondon])).toEqual([userInLondon]);
    });
  });
});
