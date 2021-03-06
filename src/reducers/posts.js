import {
  CREATE,
  UPDATE,
  DELETE,
  COMMENT,
  FETCH_ALL,
  FETCH_BY_SEARCH,
  START_LOADING,
  END_LOADING,
  FETCH_POST,
} from "../constants/actionTypes";
export default (state = { isloading: true, posts: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case END_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    case FETCH_ALL:
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case FETCH_BY_SEARCH:
      return {
        // jb object hota or inner value fetch krni hoti tw us ko spread krna prta ... se just like below
        ...state,
        posts: action.payload,
      };
    case FETCH_POST:
      return {
        // jb object hota or inner value fetch krni hoti tw us ko spread krna prta ... se just like below
        ...state,
        post: action.payload,
      };
    case CREATE:
      return { ...state, posts: [...state.posts, action.payload] };
    case UPDATE:
      // case LIKE:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    case COMMENT:
      return {
        ...state,
        posts: state.posts.map((post) => {
          //changinng post tha just recieved comment
          if (post._id === action.payload._id) {
            return action.payload;
          }
          //rendering other post normally
          return post;
        }),
      };
    case DELETE:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      };
    default:
      return state;
  }
};
