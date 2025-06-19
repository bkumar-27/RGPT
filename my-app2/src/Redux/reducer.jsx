var initialState = {
  loading: false,
  users: [],
  error: null,
};

var FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
var FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
var FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

export var userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
      break;
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
      break;
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      break;
    default:
      return state;
  }
};
