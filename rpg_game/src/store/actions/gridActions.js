export const MAKE_STREET_GRID = "MAKE_STREET_GRID";
export const MAKE_FOREST_GRID = "MAKE_FOREST_GRID";
export const MAKE_HOUSE_GRID = "MAKE_HOUSE_GRID";

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

export const makeHouseGrid = (houseGrid) => {
  return genericAction(MAKE_FOREST_GRID, houseGrid);
};


