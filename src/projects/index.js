import React from 'react';

import { squareGameSourceCode, squareGameDirectory } from './squareGame';
import { dontGetSquashedSourceCode, dontGetSquashedDirectory } from './dontGetSquashed';
import { triangleMathAPISourceCode, triangleMathAPIDirectory } from './traingleMathAPI';
import { createMovieDatabaseSourceCode, createMovieDatabaseDirectory } from './createMovieDatabase';

class Project {
  constructor(id, name, description, highlights, sourceCodes, directory, type = '', languages = []) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.highlights = highlights;
    this.sourceCodes = sourceCodes;
    this.directory = directory;
    this.type = type;
    this.languages = languages;
  }

  renderNameAndDesc = () => {
    return (
      <div className='titleDescDiv'>
        <h1>{this.name}</h1>
        <main id='myDescription'>{this.description}</main>
      </div>
    );
  }

  renderHighlights = () => {
    return (
      <div className='highlightsDiv'>
        <h2>Highlights</h2>
        <ul id='highlights'>
          {this.highlights.map((highlight, key) => <li className='highlight' key={key}>{highlight}</li>)}
        </ul>
      </div>
    );
  }
}

export const projectTypes = {
  GAME: 'Game',
  API: 'API',
  DATABASE: 'Database',
};

export const squareGame = new Project(
  1,
  'Square Game',
  'A game made using HTML5\'s canvas.',
  ['Uses HTML5 canvas', 'Show skill in basic game development'],
  squareGameSourceCode,
  squareGameDirectory,
  projectTypes.GAME,
  [ 'Javascript', 'HTML5' ]
);

export const dontGetSquashed = new Project(
  2,
  'Don\'t Get Squashed Game',
  'A basic java game using java swing.',
  ['Uses Java Swing', 'Show skill in basic game development'],
  dontGetSquashedSourceCode,
  dontGetSquashedDirectory,
  projectTypes.GAME,
  [ 'Java' ],
);

export const triangleMathAPI = new Project(
  3,
  'Triange Math API',
  'An API which, when provided two side lengths of a triangle, can calculate the third side.',
  ['Shows skill in creating an API', 'Shows math knowledge'],
  triangleMathAPISourceCode,
  triangleMathAPIDirectory,
  projectTypes.API,
  [ 'Javascript', 'JSON' ],
);

export const createMovieDatabase = new Project(
  4,
  'Create Movie Database',
  'An SQL sheet which creates a database for a theater catalog.',
  ['Shows ability to create a table', 'Shows knowledge of SQL statements'],
  createMovieDatabaseSourceCode,
  createMovieDatabaseDirectory,
  projectTypes.DATABASE,
  [ 'SQL' ],
)

export default [
  squareGame,
  dontGetSquashed,
  triangleMathAPI,
  createMovieDatabase,
];
