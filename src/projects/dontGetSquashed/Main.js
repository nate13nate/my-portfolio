import React from 'react';

export default (
  <code>
    package main;<br />
    <br />
    import javax.swing.JFrame;<br />
    <br />
    public class Main {'{'}<br />
      private static int[] gameDimensions = {'{'} 1000, 400 };<br />
      <br />
      public static void main(String[] args) {'{'}<br />
        JFrame frame = new JFrame();<br />
        Game game = new Game(gameDimensions);<br />
        frame.setBounds(10, 10, gameDimensions[0] + 15, gameDimensions[1] + 39);<br />
        frame.setTitle("Square Dodging Game");<br />
        frame.setResizable(false);<br />
        frame.setVisible(true);<br />
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);<br />
        frame.add(game);<br />
      }<br />
    }<br />
  </code>
);
