import React from 'react';

import projects from './projects';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { currentProjects: projects };
  }

  setCurrentProjects(newProjects) {
    this.setState({ currentProjects: newProjects });
  }

  render() {
    return (
      <div id='HomePageDiv' className='componentDiv'>
        <div className='titleDescDiv'>
          <h1>Nathanael Nading</h1>
          <main id='myDescription'>After working with web development for {new Date().getFullYear() - 2018} years, I have gained the experience and ability you need. My projects below demonstrate my development and design skills.</main>
        </div>
        <table id='projectsTable'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Type</th>
              <th>Languages</th>
            </tr>
          </thead>
          <tbody>
            {this.state.currentProjects.map(project => {
              return (
                <tr className='tableRow' key={project.id} style={{ textAlign: 'center' }} onClick={() => { window.location = `${window.location.origin}/${project.id}`; }}>
                  <td>{project.name}</td>
                  <td>{project.description}</td>
                  <td>{project.type}</td>
                  <td>{project.languages.map((language, index) => index === 0 ? language : `, ${language}`)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default HomePage;
