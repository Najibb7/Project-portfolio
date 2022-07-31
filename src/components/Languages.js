import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
state = {
    languages: [
        { id: 1, value: 'JavaScript', xp: 0.6 },
        { id: 2, value: 'Php', xp: 0.7 },
        { id: 3, value: 'HTML/CSS', xp: 0.5 },
        { id: 4, value: 'SQL', xp: 0.8 },
    ],
    frameworks: [
        { id: 1, value: 'React', xp: 0.6 },
        { id: 2, value: 'Laravel', xp: 0.4 },
        { id: 3, value: 'Sass', xp: 0.3 },
        { id: 4, value: 'NodeJS/Express', xp: 0.7 },
    ]
}

    render() {
        let { languages, frameworks } = this.state;

        return (
            <div>
                <div className="languagesframeworks">
                    <ProgressBar
                        languages={languages}
                        className="languagesDisplay"
                        title="Languages"
                    />
                    <ProgressBar
                        languages={frameworks}
                        className="frameworksDisplay"
                        title="Frameworks"
                    />
                </div>
            </div>
        );
    }
}

export default Languages;