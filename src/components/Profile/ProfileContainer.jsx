import React from "react";
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfile} from "../../redux/profileReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {withRouter} from "../../hoc/withRouter";
import {compose} from "redux";

class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.router.params.userId;

        if (!userId) {
            userId = 2;
        }

        this.props.getUserProfile(userId);
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);