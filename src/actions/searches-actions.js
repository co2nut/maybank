export const UPDATE_SEARCHES = 'update_searches';
export const UPDATE_LOCATION = 'update_locations';

export function updateSearches(data){
  console.log({data})
  return (dispatch) => {
    dispatch({
      type: UPDATE_SEARCHES,
      payload:data
    });
  }
}

export function updateLocations(data){
  return (dispatch) => {
    dispatch({
      type: UPDATE_LOCATION,
      payload:data
    });
  }
}
