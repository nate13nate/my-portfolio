import React from 'react';

export default (
  <code>
    const express = require('express');<br />
    const app = express();<br />
    <br />
    /**<br />
    * Request parameters:<br />
    * hypotenuse - Number; the hypotenuse of the triangle; not required if two other sides are provided<br />
    * sideA - Number; a side of the triangle; not required if two other sides are provided<br />
    * sideB - Number; a side of the triangle; not required if two other sides are provided<br />
    * roundBy - Integer; the number of decimal places to round the answer by; not required<br />
    */<br />
    app.get('/', (req, res) => {'{'}<br />
      const query = req.query;<br />
      <br />
      const hypotenuse = query.hypotenuse;<br />
      const sideA = query.sideA;<br />
      const sideB = query.sideB;<br />
      const sides = [ hypotenuse, sideA, sideB ];<br />
      <br />
      const roundBy = query.roundBy;<br />
      <br />
      let emptyFieldsCounter = 0;<br />
      let emptyFieldIndex = 0;<br />
      let solution;<br />
      <br />
      for (let i = 0; i {'<'} 3; i++) {'{'}<br />
        if (sides[i] {'<'}= 0) throw new Error('You must use positive numbers');<br />
        if (typeof sides[i] === 'undefined') {'{'}<br />
          emptyFieldsCounter++;<br />
          emptyFieldIndex = i;<br />
        }<br />
      }<br />
      <br />
      if (emptyFieldsCounter >= 2) throw new Error('Not enough information to solve the problem or incorrect parameter names');<br />
      if (emptyFieldsCounter === 0) throw new Error('All sides are already solved');<br />
      <br />
      if (emptyFieldIndex === 0) solution = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));<br />
      else if (emptyFieldIndex === 1) solution = Math.sqrt(Math.pow(hypotenuse, 2) - Math.pow(sideB, 2));<br />
      else solution = Math.sqrt(Math.pow(hypotenuse, 2) - Math.pow(sideA, 2));<br />
      if (Number.isNaN(solution)) throw new Error('Problem has no solution');<br />
      <br />
      if (typeof roundBy !== 'undefined') {'{'}<br />
        if (!Number.isInteger(parseInt(roundBy, 10)) || roundBy.includes('.')) throw new Error('roundBy should be an integer');<br />
        if (roundBy {'<'}= 0) throw new Error('roundBy should be greater than 0');<br />
        solution = Math.round((solution + Number.EPSILON) * Math.pow(10, roundBy)) / 100;<br />
      }<br />
      <br />
      res.send(solution.toString(10));<br />
    });<br />
    <br />
    app.listen(3000);<br />
  </code>
);
