import React from "react";
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfile, getUserStatus, updateUserStatus} from "../../redux/profileReducer";
import {withRouter} from "../../hoc/withRouter";
import {compose} from "redux";

class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.router.params.userId;

        if (!userId) {
            userId = 2;
        }

        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                updateUserStatus={this.props.updateUserStatus}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

export default compose(
    connect(mapStateToProps, {
        getUserProfile,
        getUserStatus,
        updateUserStatus
    }),
    withRouter,
)(ProfileContainer);