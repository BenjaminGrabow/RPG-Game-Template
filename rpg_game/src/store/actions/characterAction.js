export const CHOOSE_CHARACTER = "CHOOSE_CHARACTER";

export const genericAction = (type, payload) => ({
  type,
  payload
});

export const makeStreetGrid = (character) => {
 return genericAction(CHOOSE_CHARACTER, character);
};
