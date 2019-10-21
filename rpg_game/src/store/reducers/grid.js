import * as type from "../actions/gridActions";

const initialState = {
  grid: null,
  loading: null,
  error: null,
};

const workouts = (state = initialState, action) => {
  switch (action.type) {
    case type.ADD_STREET_GRID:
      return {
        ...state,
        grid: action.payload
      };

    default:
      return state;
  }
};

export default workouts;
