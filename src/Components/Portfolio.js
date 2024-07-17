import React, { Component } from 'react';

import ProjectCard from './ProjectCard';

class Portfolio extends Component {
  render() {
    console.log("data: ", this.props.data)
    if(this.props.data){
      var projects = this.props.data.projects;
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>projects I worked on.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <ProjectCard projects={projects}/>
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
