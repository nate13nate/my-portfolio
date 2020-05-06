import React from 'react';

export default (
  <code>
    package interactables;<br />
    <br />
    import java.awt.Color;<br />
    import java.awt.Graphics;<br />
    import java.util.Random;<br />
    <br />
    public class Enemy extends Interactable {'{'}<br />
      private Random rand = new Random();<br />
      <br />
      private int[] gameDimensions;<br />
      <br />
      private Color color;<br />
      <br />
      private int movementCount = 0;<br />
      public int movementTotal = 10;<br />
      public boolean movingRight = true;<br />
      public boolean movedOffScreen = false;<br />
      <br />
      public int[] growthAmount;<br />
      private int growCount = 0;<br />
      public int growTotal = 5;<br />
      public boolean growing;<br />
      public int maxSurfaceArea = 10000;<br />
      public int minSurfaceArea = 40;<br />
      <br />
      public int[] startingDimensions;<br />
      <br />
      public Enemy(int[] gameDimensions, int maxSurfaceArea, int minSurfaceArea, int growTotal, int movementTotal, int[] startingDimensions, boolean growing, int[] growthAmount) {'{'}<br />
        this.gameDimensions = gameDimensions;<br />
        this.maxSurfaceArea = maxSurfaceArea;<br />
        this.minSurfaceArea = minSurfaceArea;<br />
        this.growTotal = growTotal;<br />
        this.movementTotal = movementTotal;<br />
        this.startingDimensions = startingDimensions;<br />
        this.growing = growing;<br />
        this.growthAmount = growthAmount;<br />
        <br />
        dimensions[0] = startingDimensions[0];<br />
        dimensions[1] = startingDimensions[1];<br />
        <br />
        location[0] = rand.nextInt(2) * gameDimensions[0];<br />
        if (location[0] == 0) location[0] -= dimensions[0];<br />
        else movingRight = false;<br />
        <br />
        location[1] = rand.nextInt(gameDimensions[1] - dimensions[1]);<br />
        <br />
        int colorNum = rand.nextInt(3);<br />
        switch (colorNum) {'{'}<br />
          case 0:<br />
            color = Color.red;<br />
            break;<br />
          case 1:<br />
            color = Color.orange;<br />
            break;<br />
          case 2:<br />
            color = Color.yellow;<br />
            break;<br />
        }<br />
      }<br />
      <br />
      public void paint(Graphics g) {'{'}<br />
        g.setColor(color);<br />
        g.fillRect(location[0], location[1], dimensions[0], dimensions[1]);<br />
      }<br />
      <br />
      public void actionPerformed() {'{'}<br />
        movementCount++;<br />
        <br />
        if (movementCount == movementTotal) {'{'}<br />
          if (movingRight == true) {'{'}<br />
            location[0]++;<br />
          } else {'{'}<br />
            location[0]--;<br />
          }<br />
          <br />
          growCount++;
          if (growCount == growTotal) {'{'}<br />
            if (growing == true) {'{'}<br />
              dimensions[0] += growthAmount[0];<br />
              dimensions[1] += growthAmount[1];<br />
              location[0] -= growthAmount[0] / 2;<br />
              location[1] -= growthAmount[1] / 2;<br />
              if (dimensions[0] * dimensions[1] >= maxSurfaceArea) growing = false;<br />
            } else {'{'}<br />
              dimensions[0] -= growthAmount[0];<br />
              dimensions[1] -= growthAmount[1];<br />
              location[0] += growthAmount[0] / 2;<br />
              location[1] += growthAmount[1] / 2;<br />
              if (dimensions[0] * dimensions[1] {'<'}= minSurfaceArea) growing = true;<br />
            }<br />
            growCount = 0;<br />
          }<br />
          <br />
          if ((location[0] {'<'}= -dimensions[0] && movingRight == false) || (location[0] >= gameDimensions[0] && movingRight == true)) movedOffScreen = true;<br />
          else if (location[1] {'<'} 0) location[1] = 0;<br />
          else if (location[1] + dimensions[1] > gameDimensions[1]) location[1] = gameDimensions[1] - dimensions[1];<br />
          <br />
          movementCount = 0;<br />
        }<br />
      }<br />
    }<br />
  </code>
);
