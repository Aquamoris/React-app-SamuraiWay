import {createSelector} from "reselect";

const getUsersSelector = (state) => {
    return state.usersPage.users;
}

export const getUsersFakeFilterSelector = createSelector(getUsersSelector, (users) => {
    return users.filter(e => true);
})