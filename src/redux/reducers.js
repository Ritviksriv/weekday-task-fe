import { combineReducers } from "redux";
import {
  SET_ALL_JOBS,
  SET_JOBS,
  SET_OFFSET,
  SET_HAS_MORE,
  SET_FILTERS,
} from "./actions";

const initialState = {
  role: [],
  numberOfEmployees: [],
  experience: [],
  mode: [],
  minimumSalary: [],
  companyName: "",
};

const jobsListReducer = (state = [], action) => {
  switch (action.type) {
    case SET_ALL_JOBS:
      return action.payload;
    default:
      return state;
  }
};

const jobsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_JOBS:
      return action.payload;
    default:
      return state;
  }
};

const offsetReducer = (state = 0, action) => {
  switch (action.type) {
    case SET_OFFSET:
      return action.payload;
    default:
      return state;
  }
};

const hasMoreReducer = (state = true, action) => {
  switch (action.type) {
    case SET_HAS_MORE:
      return action.payload;
    default:
      return state;
  }
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTERS:
      const { filterName, value } = action.payload;
      return {
        ...state,
        [filterName]: value,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  jobsList: jobsListReducer,
  jobs: jobsReducer,
  offset: offsetReducer,
  hasMore: hasMoreReducer,
  filters: filtersReducer,
});

export default rootReducer;
