// actions
const REMOVE_POST = 'app/posts/REMOVE_POST';

// action creators
export const removePost = (postId) => ({type: REMOVE_POST, payload: {postId}});

const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case REMOVE_POST:
      const updatedPosts = statePart.filter(post => post.id !== action.payload.postId);
      return updatedPosts;
    default:
      return statePart;
  }
};

export default postsReducer;