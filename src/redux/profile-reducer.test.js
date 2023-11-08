import profileReducer, {addPost, deletePost} from "./profileReducer";

let state =  {
    posts: [
        {id: 1, message: 'Hi! How are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post!', likesCount: 15},
        {id: 3, message: 'Wow!', likesCount: 177},
        {id: 4, message: 'Really!', likesCount: 3}
    ]
};

it('length of posts should be incremented', () => {
    let action = addPost('fifth-post');

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(5);
});
it('message of new post should be correct', () => {
    let action = addPost('fifth-post');

    let newState = profileReducer(state, action);

    expect(newState.posts[4].message).toBe('fifth-post');
});
it('after deleting length should be decremented', () => {
    let action = deletePost(1);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
});
it(`after deleting length shouldn't be decremented if id is incorrect`, () => {
    let action = deletePost(1000);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(4);
});