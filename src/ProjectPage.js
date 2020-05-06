import React from 'react';

import projects from './projects';

class ProjectPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { project: null, sourceCode: null, codeName: null };
  }

  componentDidMount() {
    const project = projects.find(project => this.props.match.params.id == project.id) || null;
    this.setState({ project });
  }

  setStateInOtherFile = (newState) => {
    this.setState(newState);
  }

  render() {
    if (this.state.project === null) {
      return <div></div>;
    }

    const Directory = this.state.project.directory;

    return (
      <div className='componentDiv'>
        {this.state.project.renderNameAndDesc()}
        {this.state.project.renderHighlights()}
        <div id='directory'><Directory setState={this.setStateInOtherFile} /></div>
        <div id='code'>
          {this.state.codeName !== null ? <h3 id='codeHeader'>{this.state.codeName}</h3> : null}
          {this.state.sourceCode !== null ? this.state.sourceCode : 'Select a file above to show its contents.'}
        </div>
        <div id='buttonDiv'><button id='backButton' onClick={() => { window.location = window.location.origin }}>Back</button></div>
      </div>
    );
  }
}

export default ProjectPage;
