const initState = {
    posts: [
        {id: '1', title: 'first post', body: 'body first post'},
        {id: '2', title: 'second post', body: 'body second post'},
        {id: '3', title: 'third post', body: 'body third post'}
    ]
};

const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
};

export default rootReducer;