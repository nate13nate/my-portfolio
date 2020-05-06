import React from 'react';

import fileIcon from '../../fileicon.png';

import { triangleMathAPI } from '../index';
import App from './App';
import Package from './Package';

export const triangleMathAPISourceCode = [ App, Package ];

export class triangleMathAPIDirectory extends React.Component {
  render() {
    return (
      <div id='directoryFilesContainer'>
        <div className='directoryFile' key='1' onClick={() => { this.props.setState({ sourceCode: triangleMathAPI.sourceCodes[0], codeName: 'App.js' }); }}>
          <img alt='File Icon' className='icon' src={fileIcon}></img>
            App.js
        </div>

        <div className='directoryFile' key='2' onClick={() => { this.props.setState({ sourceCode: triangleMathAPI.sourceCodes[1], codeName: 'package.json' }); }}>
          <img alt='File Icon' className='icon' src={fileIcon}></img>
            package.json
        </div>
      </div>
    )
  }
}
