import React from 'react';

import fileIcon from '../../fileicon.png';
import folderIcon from '../../foldericon.png';

import { dontGetSquashed } from '../index';
import Main from './Main';
import Game from './Game';
import Interactable from './Interactable';
import Enemy from './Enemy';
import Player from './Player';

export const dontGetSquashedSourceCode = [ Main, Game, Interactable, Enemy, Player ];

export class dontGetSquashedDirectory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      aIsOpen: false,
      bIsOpen: false,
      cIsOpen: false,
    };
  }

  render() {
    return (
      <div id='directoryFilesContainer'>
        <div className='directoryFolder' key='a' onClick={() => { this.setState({ aIsOpen: !this.state.aIsOpen }); }}>
          <img alt='Folder Icon' className='icon' src={folderIcon}></img>
          main
        </div>
        {this.state.aIsOpen ?
          (
            <div className='folderFiles1'>
              <div className='directoryFile' key='1' onClick={() => { this.props.setState({ sourceCode: dontGetSquashed.sourceCodes[0], codeName: 'Main.java' }); }}>
                <img alt='File Icon' className='icon' src={fileIcon}></img>
                Main.java
              </div>
              <div className='directoryFile' key='2' onClick={() => { this.props.setState({ sourceCode: dontGetSquashed.sourceCodes[1], codeName: 'Game.java' }); }}>
                <img alt='File Icon' className='icon' src={fileIcon}></img>
                Game.java
              </div>
            </div>
          )
          : (<div></div>)}

        <div className='directoryFolder' key='b' onClick={() => { this.setState({ bIsOpen: !this.state.bIsOpen }); }}>
          <img alt='Folder Icon' className='icon' src={folderIcon}></img>
          interactables
        </div>
        {this.state.bIsOpen ?
          (
            <div className='folderFiles1'>
              <div className='directoryFile' key='1' onClick={() => { this.props.setState({ sourceCode: dontGetSquashed.sourceCodes[2], codeName: 'Interactable.java' }); }}>
                <img alt='File Icon' className='icon' src={fileIcon}></img>
                Interactable.java
              </div>
              <div className='directoryFile' key='2' onClick={() => { this.props.setState({ sourceCode: dontGetSquashed.sourceCodes[3], codeName: 'Enemy.java' }); }}>
                <img alt='File Icon' className='icon' src={fileIcon}></img>
                Enemy.java
              </div>
            </div>
          )
          : (<div></div>)}

        <div className='directoryFolder' key='c' onClick={() => { this.setState({ cIsOpen: !this.state.cIsOpen }); }}>
          <img alt='Folder Icon' className='icon' src={folderIcon}></img>
          entities
        </div>
        {this.state.cIsOpen ?
          (
            <div className='folderFiles1'>
              <div className='directoryFile' key='1' onClick={() => { this.props.setState({ sourceCode: dontGetSquashed.sourceCodes[4], codeName: 'Entity.java' }); }}>
                <img alt='File Icon' className='icon' src={fileIcon}></img>
                Entity.java
              </div>
            </div>
          )
          : (<div></div>)}
      </div>
    )
  }
}
