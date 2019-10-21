export const MAKE_STREET_GRID = "FETCH_STREET_GRID";
export const MAKE_FOREST_GRID = "FETCH_FOREST_GRID";

export const genericAction = (type, payload) => ({
  type,
  payload
});

export const makeStreetGrid = (streetGrid) => {
 return genericAction(MAKE_STREET_GRID, streetGrid);
};

export const makeForestGrid = (forestGrid) => {
  return genericAction(MAKE_FOREST_GRID, forestGrid);
 };


