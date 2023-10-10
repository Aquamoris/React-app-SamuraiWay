import React from "react";
import Profile from './Profile';
import axios from "axios";
import {connect} from 'react-redux';
import { setUsersProfile } from "../../redux/profileReducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";

class ProfileContainer extends React.Component{

    componentDidMount() {

        //get id from URL
        let userId = this.props.router.params.userId;

        if (!userId) {
            userId = 2;
        }

        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUsersProfile(response.data);
            });
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

//HOC withRouter v +6
function withRouter(Component) {
    function ComponentWithRouterProps(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();

        return <Component {...props} router={{location, navigate, params}} />
    }

    return ComponentWithRouterProps;
}

export default connect(mapStateToProps, {setUsersProfile})(withRouter(ProfileContainer));