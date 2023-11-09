import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/helpers/objects-helpers";

const FOLLOW = 'social-media/users/FOLLOW';
const UNFOLLOW = 'social-media/users/UNFOLLOW';
const SET_USERS = 'social-media/users/SET-USERS';
const SET_CURRENT_PAGE = 'social-media/users/SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'social-media/users/SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'social-media/users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'social-media/users/TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState =  {
    users: [ ],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USERS:
            return {...state, users: action.users};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count};
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', { followed: true })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', { followed: false })
            };
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            };
        default:
            return state;
    }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => (
    {type: SET_CURRENT_PAGE, currentPage}
);
export const setTotalUsersCount = (totalUsersCount) => (
    {type: SET_TOTAL_USERS_COUNT, count: totalUsersCount}
);
export const toggleIsFetching = (isFetching) => (
    {type: TOGGLE_IS_FETCHING, isFetching}
);
export const toggleFollowingProgress = (isFetching, userId) => (
    {type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId}
);

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));

        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
            });
    }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId));
    const data = await apiMethod(userId);

    if (data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId) => {
    return async (dispatch) => {
        await followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);
    }
}

export const unfollow = (userId) => {
    return async (dispatch) => {
        await followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
    }
}


export default usersReducer;