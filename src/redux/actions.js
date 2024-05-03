export const SET_ALL_JOBS = "SET_ALL_JOBS";
export const SET_JOBS = "SET_JOBS";
export const SET_OFFSET = "SET_OFFSET";
export const SET_HAS_MORE = "SET_HAS_MORE";
export const SET_FILTERS = "SET_FILTERS";

export const setJobsList = (jobs) => ({
  type: SET_ALL_JOBS,
  payload: jobs,
});

export const setJobs = (jobs) => ({
  type: SET_JOBS,
  payload: jobs,
});

export const setOffset = (offset) => ({
  type: SET_OFFSET,
  payload: offset,
});

export const setHasMore = (hasMore) => ({
  type: SET_HAS_MORE,
  payload: hasMore,
});

export const setFilters = (filterName, value) => ({
  type: SET_FILTERS,
  payload: { filterName, value },
});
