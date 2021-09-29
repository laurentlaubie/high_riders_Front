export const FETCH_SPOTS_LIST = 'FETCH_SPOTS_LIST';
export const fetchSpotsList = () => ({
  type: FETCH_SPOTS_LIST,
});

export const FETCH_SPOT_ID = 'FETCH_SPOT_ID';
export const fetchSpotId = (spotId) => ({
  type: FETCH_SPOT_ID,
  id: spotId,
});
