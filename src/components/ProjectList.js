import React, { Component } from 'react';
import { portfolioData } from '../Data/PortfolioData';
import Project from './Project';

class ProjectList extends Component {
    state = {
        projects: portfolioData
    };

    render() {
        let {projects} = this.state;
        return (
            <div className='portfolioContent'>
                <ul className="radioDisplay"></ul>
                <div className="projects">
                    {
                        projects.map( items => {
                            return (
                                <Project 
                                key={items.id}
                                items = {items}/>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default ProjectList;