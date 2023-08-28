// actions
const ADD_POST = 'app/posts/ADD_POST';
const REMOVE_POST = 'app/posts/REMOVE_POST';
const EDIT_POST = 'app/posts/EDIT_POST';

// action creators
export const addPost = (post) => ({ type: ADD_POST, payload: { post } });
export const removePost = (postId) => ({ type: REMOVE_POST, payload: { postId } });
export const editPost = (post) => ({ type: EDIT_POST, payload: { post } });

const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_POST:
      return [...statePart, action.payload.post];
    case REMOVE_POST:
      const updatedPosts = statePart.filter(post => post.id !== action.payload.postId);
      return updatedPosts;
    case EDIT_POST:
      return statePart.map(post => (post.id === action.payload.id ? { ...post, ...action.payload } : post));
    default:
      return statePart;
  }
};

export default postsReducer;