export const FETCH_PROFILE = 'FETCH_PROFILE';
export const fetchProfile = (id) => ({
  type: FETCH_PROFILE,
  id: id,
});

export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const updateProfile = (id) => ({
  type: UPDATE_PROFILE,
  id: id,
});
