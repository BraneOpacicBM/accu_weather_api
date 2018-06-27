import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import MainArea from '../../components/MainArea/MainArea';

class MainSection extends Component {
    render() {
        return(
            <div>
                <Navbar />
                <MainArea />
            </div>
        )
    }
}


export default MainSection;