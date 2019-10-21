export const MAKE_STREET_GRID = "FETCH_STREET_GRID";

const api = `${process.env.REACT_APP_BASE_URL}`;

export const genericAction = (type, payload) => ({
  type,
  payload
});

export const makeStreetGrid = () => {
 return genericAction(MAKE_STREET_GRID)
};
