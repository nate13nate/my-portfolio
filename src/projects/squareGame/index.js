import React from 'react';

import fileIcon from '../../fileicon.png';

import { squareGame } from '../index';
import App from './App';
import Character from './Character';
import Enemy from './Enemy';
import Game from './Game';
import IndexHTML from './indexHTML';
import InputHandler from './InputHandler';
import PointsBlock from './PointsBlock';

export const squareGameSourceCode = [ App, Character, Enemy, Game, IndexHTML, InputHandler, PointsBlock ];

export class squareGameDirectory extends React.Component {
  render() {
    return (
      <div id='directoryFilesContainer'>
        <div className='directoryFile' key='1' onClick={() => { this.props.setState({ sourceCode: squareGame.sourceCodes[0], codeName: 'App.js' }); }}>
          <img alt='File Icon' className='icon' src={fileIcon}></img>
          App.js
        </div>
        <div className='directoryFile' key='2' onClick={() => { this.props.setState({ sourceCode: squareGame.sourceCodes[1], codeName: 'Character.js' }); }}>
          <img alt='File Icon' className='icon' src={fileIcon}></img>
          Character.js
        </div>
        <div className='directoryFile' key='3' onClick={() => { this.props.setState({ sourceCode: squareGame.sourceCodes[2], codeName: 'Enemy.js' }); }}>
          <img alt='File Icon' className='icon' src={fileIcon}></img>
          Enemy.js
        </div>
        <div className='directoryFile' key='4' onClick={() => { this.props.setState({ sourceCode: squareGame.sourceCodes[3], codeName: 'Game.js' }); }}>
          <img alt='File Icon' className='icon' src={fileIcon}></img>
          Game.js
        </div>
        <div className='directoryFile' key='5' onClick={() => { this.props.setState({ sourceCode: squareGame.sourceCodes[4], codeName: 'index.html' }); }}>
          <img alt='File Icon' className='icon' src={fileIcon}></img>
          index.html
        </div>
        <div className='directoryFile' key='6' onClick={() => { this.props.setState({ sourceCode: squareGame.sourceCodes[5], codeName: 'InputHandler.js' }); }}>
          <img alt='File Icon' className='icon' src={fileIcon}></img>
          InputHandler.js
        </div>
        <div className='directoryFile' key='7' onClick={() => { this.props.setState({ sourceCode: squareGame.sourceCodes[6], codeName: 'PointsBlock.js' }); }}>
          <img alt='File Icon' className='icon' src={fileIcon}></img>
          PointsBlock.js
        </div>
      </div>
    );
  }
}
