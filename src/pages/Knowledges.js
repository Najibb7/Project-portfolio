import React from 'react';
import Navigation from '../components/Navigation';
import Languages from '../components/Languages';
import Experience from '../components/Experience';
import OtherSkills from '../components/OtherSkills';
import Hobbies from '../components/Hobbies';

const Knowledges = () => {
    return (
            <div className="knowledges">
                <Navigation />
                <div className="knowledgesContent">
                    <Languages />
                    <Experience />
                    <Hobbies />
                    <OtherSkills />
                </div>
            </div>
    );
};

export default Knowledges;