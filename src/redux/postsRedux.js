// actions
const ADD_POST = 'app/posts/ADD_POST';
const REMOVE_POST = 'app/posts/REMOVE_POST';

// action creators
export const addPost = (post) => ({ type: ADD_POST, payload: { post } });
export const removePost = (postId) => ({ type: REMOVE_POST, payload: { postId } });

const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_POST:
      return [...statePart, action.payload.post];
    case REMOVE_POST:
      const updatedPosts = statePart.filter(post => post.id !== action.payload.postId);
      return updatedPosts;
    default:
      return statePart;
  }
};

export default postsReducer;