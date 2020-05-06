import React from 'react';

import fileIcon from '../../fileicon.png';

import { createMovieDatabase } from '../index';
import createDatabase from './createDatabase';

export const createMovieDatabaseSourceCode = [createDatabase];

export class createMovieDatabaseDirectory extends React.Component {
  render() {
    return (
      <div id='directoryFilesContainer'>
        <div className='directoryFile' key='1' onClick={() => { this.props.setState({ sourceCode: createMovieDatabase.sourceCodes[0], codeName: 'createDatabase.sql' }); }}>
          <img alt='File Icon' className='icon' src={fileIcon}></img>
          createDatabase.sql
        </div>
      </div>
    )
  }
}
