export const FETCH_POSTS_REQUEST = "FETCH_COUNTER_REQUEST";
export const FETCH_POSTS_SUCCESS = "FETCH_COUNTER_SUCCESS";
export const FETCH_POSTS_FAILURE = "FETCH_COUNTER_FAILURE";

var initialState = {
  loading: false,
  posts: [],
  error: null,
};

export var postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        loading: false,
        error: action.payload,
      };
      break;

    case FETCH_POSTS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
      break;
    default:
      return state;
  }
};
