const blogs = (state = [], action) => {
  switch (action.type) {
    case "BLOGS":
      return action.blogs;
    case "ADD_BLOG":
      return [action.blog, ...state];
    // case "TOGGLE_TODO":
    //   return state.map( todo => {
    //     if (todo.id === action.id)
    //       return { ...todo, complete: !todo.complete, };
    //     return todo;
    case "DELETE_BLOG":
      return state.filter( blog => {
        if (blog.id !== action.id)
          return blog
      })
    case "UPDATE_BLOG ":
      return state.map( blog => {
        if (blog.id ===action.blog.id)
          return action.blog
        return blog 
      })
    default:
      return state;
  }
}

export default blogs;