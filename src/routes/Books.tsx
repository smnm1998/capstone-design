import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import LeftBox from '../components/LeftBox';
import RightBox from '../components/RightBox';

const Books: React.FC = () => {
    return (
        <Router>
        <div>
            <LeftBox />
            <RightBox />
        </div>
        </Router>
    );
};

export default Books;
