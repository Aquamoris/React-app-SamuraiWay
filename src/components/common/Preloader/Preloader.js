import React from 'react';
import loader from "../../../assets/images/loader.gif";

const Preloader = (props) => {
    return (
        <div>
            <img src={loader} style={ {width: '100px', margin: '0 auto'} } alt='loading...'/>
        </div>
    );
};

export default Preloader;