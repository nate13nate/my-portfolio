import React from 'react';

export default (
  <code>
    package entities;<br />
    <br />
    import java.awt.Color;<br />
    import java.awt.Graphics;<br />
    import java.awt.event.KeyEvent;<br />
    <br />
    public class Player {'}'}<br />
      private int[] gameDimensions;<br />
      <br />
      public int[] originalDimensions = {'}'} 20, 20 };<br />
      public int[] dimensions = originalDimensions;<br />
      public int[] location = new int[2];<br />
      <br />
      private int[] keyPressedCount = {'}'} 0, 0, 0, 0 };<br />
      private static int keyPressedTotal = 7;<br />
      private boolean[] playerIsMoving = {'}'} false, false, false, false };<br />
      <br />
      public Player(int[] gameDimensions) {'}'}<br />
        this.gameDimensions = gameDimensions;<br />
        <br />
        location[0] = (gameDimensions[0] - dimensions[0]) / 2;<br />
        location[1] = (gameDimensions[1] - dimensions[1]) / 2;<br />
      }<br />
      <br />
      public void paint(Graphics g) {'}'}<br />
        g.setColor(Color.white);<br />
        g.fillRect(location[0], location[1], dimensions[0], dimensions[1]);<br />
      }<br />
      <br />
      public void actionPerformed() {'}'}<br />
        for (int i = 0; i {'<'} 4; i++) {'}'}<br />
          if (playerIsMoving[i] == true && (i == 0 || i == 3)) keyPressedCount[i]++;<br />
          if (playerIsMoving[i] == true && (i == 1 || i == 2)) keyPressedCount[i]++;<br />
          <br />
          if (keyPressedCount[i] == keyPressedTotal) {'}'}<br />
            int limit;<br />
            switch (i) {'}'}<br />
              case 0:<br />
                location[1]--;<br />
                <br />
                limit = 0;<br />
                if (location[1] {'<'} limit) location[1] = limit;<br />
                break;<br />
              case 1:<br />
                location[0]++;<br />
                <br />
                limit = gameDimensions[0] - dimensions[0];<br />
                if (location[0] > limit) location[0] = limit;<br />
                break;<br />
              case 2:<br />
                location[1]++;<br />
                <br />
                limit = gameDimensions[1] - dimensions[1];<br />
                if (location[1] > limit) location[1] = limit;<br />
                break;<br />
              case 3:<br />
                location[0]--;<br />
                <br />
                limit = 0;<br />
                if (location[0] {'<'} limit) location[0] = limit;<br />
                break;<br />
            }<br />
            <br />
            keyPressedCount[i] = 0;<br />
          }<br />
          <br />
          if (dimensions[0] > originalDimensions[0] || dimensions[1] > originalDimensions[1]) dimensions = originalDimensions;<br />
        }<br />
      }<br />
      <br />
      public void keyPressed(KeyEvent e) {'}'}<br />
        int keyCode = e.getKeyCode();<br />
        <br />
        if (keyCode == KeyEvent.VK_UP) playerIsMoving[0] = true;<br />
        if (keyCode == KeyEvent.VK_RIGHT) playerIsMoving[1] = true;<br />
        if (keyCode == KeyEvent.VK_DOWN) playerIsMoving[2] = true;<br />
        if (keyCode == KeyEvent.VK_LEFT) playerIsMoving[3] = true;<br />
      }<br />
      <br />
      public void keyReleased(KeyEvent e) {'}'}<br />
        int keyCode = e.getKeyCode();<br />
        <br />
        if (keyCode == KeyEvent.VK_UP) playerIsMoving[0] = false;<br />
        if (keyCode == KeyEvent.VK_RIGHT) playerIsMoving[1] = false;<br />
        if (keyCode == KeyEvent.VK_DOWN) playerIsMoving[2] = false;<br />
        if (keyCode == KeyEvent.VK_LEFT) playerIsMoving[3] = false;<br />
      }<br />
    }<br />
  </code>
);
