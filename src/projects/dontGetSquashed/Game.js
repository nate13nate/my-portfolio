import React from 'react';

export default (
  <code>
    package main;<br />
    <br />
    import java.awt.Color;<br />
    import java.awt.Graphics;<br />
    import java.awt.event.ActionEvent;<br />
    import java.awt.event.ActionListener;<br />
    import java.awt.event.KeyEvent;<br />
    import java.awt.event.KeyListener;<br />
    import java.util.LinkedList;<br />
    import java.util.Random;<br />
    <br />
    import javax.swing.JPanel;<br />
    import javax.swing.Timer;<br />
    <br />
    import entities.Player;<br />
    import interactables.Enemy;<br />
    <br />
    public class Game extends JPanel implements KeyListener, ActionListener {'{'}<br />
      private static final long serialVersionUID = -6241186859449452253L;<br />
      <br />
      private Random rand = new Random();<br />
      <br />
      private int[] gameDimensions;<br />
      private int pointsCount = 0;<br />
      <br />
      private int staggerCount = 0;<br />
      private int staggerTotal = 0;<br />
      private boolean staggering = false;<br />
      private int staggerPointsCount = 0;<br />
      <br />
      private Player player;<br />
      private LinkedList{'<'}Enemy> enemies = new LinkedList{'<'}Enemy>();<br />
      <br />
      private LinkedList{'<'}LinkedList{'<'}Integer>> rammingCounts = new LinkedList{'<'}LinkedList{'<'}Integer>>();<br />
      private Integer rammingTotal = 7;<br />
      <br />
      private Timer timer;<br />
      private int delay = 0;<br />
      <br />
      public Game(int[] gameDimensions) {'{'}<br />
        this.gameDimensions = gameDimensions;<br />
        setup();<br />
        <br />
        addKeyListener(this);<br />
        setFocusable(true);<br />
        setFocusTraversalKeysEnabled(false);<br />
        timer = new Timer(delay, this);<br />
        timer.start();<br />
      }<br />
      <br />
      public void paint(Graphics g) {'{'}<br />
        g.setColor(Color.black);<br />
        g.fillRect(0, 0, gameDimensions[0], gameDimensions[1]);<br />
        <br />
        player.paint(g);<br />
        for (int i = 0; i {'<'} enemies.size(); i++) enemies.get(i).paint(g);<br />
        <br />
        g.setColor(Color.lightGray);<br />
        g.drawString(Integer.toString(pointsCount), 10, 20);<br />
      }<br />
      <br />
      @Override<br />
      public void actionPerformed(ActionEvent e) {'{'}<br />
        timer.start();<br />
        <br />
        player.actionPerformed();<br />
        <br />
        for (int i = 0; i {'<'} enemies.size(); i++) {'{'}<br />
          Enemy enemy = enemies.get(i);<br />
          enemy.actionPerformed();<br />
          if (enemy.checkIfInteractedPlayer(player) == true) contactWithEnemy(enemy);<br />
          else if (enemy.movedOffScreen == true) {'{'}<br />
            pointsCount++;<br />
            <br />
            switch (pointsCount) {'{'}<br />
              case 1:<br />
              case 3:<br />
              case 6:<br />
              case 10:<br />
                staggerTotal = 1000;<br />
                staggering = true;<br />
                staggerPointsCount = pointsCount;<br />
                break;<br />
              case 13:<br />
                staggerTotal = 1;<br />
                staggering = true;<br />
                staggerPointsCount = pointsCount;<br />
                break;<br />
              case 25:<br />
                staggerTotal = 1000;<br />
                staggering = true;<br />
                staggerPointsCount = pointsCount;<br />
                break;<br />
              case 35:<br />
                staggerTotal = 1000;<br />
                staggering = true;<br />
                staggerPointsCount = pointsCount;<br />
                break;<br />
            }<br />
            <br />
            if (pointsCount >= 50 && pointsCount % 10 == 0) {'{'}<br />
              int[] startingDimensions = {'{'} 20, 20 };<br />
              int[] growthAmount = {'{'} 2, 2 };<br />
              enemies.add(new Enemy(gameDimensions, 10000, 40, 10, 10, startingDimensions, true, growthAmount));<br />
            }<br />
            <br />
            switch (pointsCount) {'{'}<br />
              default:<br />
                enemies.set(i, new Enemy(<br />
                  gameDimensions,<br />
                  enemy.maxSurfaceArea,<br />
                  enemy.minSurfaceArea,<br />
                  enemy.growTotal,<br />
                  enemy.movementTotal,<br />
                  enemy.startingDimensions,<br />
                  enemy.growing,<br />
                  enemy.growthAmount<br />
                ));<br />
            }<br />
          } else {'{'}<br />
            checkEnemiesInteractions(enemy, i);<br />
          }<br />
        }<br />
        <br />
        if (staggering == true) {'{'}<br />
          staggerCount++;<br />
          <br />
          if (staggerCount == staggerTotal) {'{'}<br />
            int[] startingDimensions = new int[2];<br />
            int[] growthAmount = new int[2];<br />
            LinkedList{'<'}int[]> startingDimensionsList = new LinkedList{'<'}int[]>();<br />
            LinkedList{'<'}int[]> growthAmountList = new LinkedList{'<'}int[]>();<br />
            <br />
            switch (staggerPointsCount) {'{'}<br />
              case 1:<br />
                startingDimensions[0] = 20;<br />
                startingDimensions[1] = 20;<br />
                growthAmount[0] = 2;<br />
                growthAmount[1] = 2;<br />
                enemies.add(new Enemy(gameDimensions, 10000, 40, 5, 10, startingDimensions, true, growthAmount));<br />
                rammingCounts.add(new LinkedList{'<'}Integer>());<br />
                break;<br />
              case 3:<br />
                startingDimensions[0] = 20;<br />
                startingDimensions[1] = 20;<br />
                growthAmount[0] = 2;<br />
                growthAmount[1] = 2;<br />
                enemies.add(new Enemy(gameDimensions, 10000, 40, 5, 10, startingDimensions, true, growthAmount));<br />
                rammingCounts.add(new LinkedList{'<'}Integer>());<br />
                break;<br />
              case 6:<br />
                startingDimensions[0] = (rand.nextInt(2) + 1) * 20;<br />
                if (startingDimensions[0] == 20) startingDimensions[1] = 40;<br />
                else startingDimensions[1] = 20;<br />
                growthAmount[0] = 2;<br />
                growthAmount[1] = 2;<br />
                enemies.add(new Enemy(gameDimensions, 10000, 40, 10, 12, startingDimensions, true, growthAmount));<br />
                rammingCounts.add(new LinkedList{'<'}Integer>());<br />
                break;<br />
              case 10:<br />
                startingDimensions[0] = 30;<br />
                startingDimensions[1] = 30;<br />
                growthAmount[0] = rand.nextInt(2);<br />
                if (growthAmount[0] == 0) {'{'}<br />
                  growthAmount[0] = 4;<br />
                  growthAmount[1] = 2;<br />
                } else growthAmount[1] = 4;<br />
                enemies.add(new Enemy(gameDimensions, 10000, 40, 10, 12, startingDimensions, true, growthAmount));<br />
                rammingCounts.add(new LinkedList{'<'}Integer>());<br />
                break;<br />
              case 13:<br />
                startingDimensionsList.add(new int[2]);<br />
                startingDimensionsList.get(0)[0] = 550;<br />
                startingDimensionsList.get(0)[1] = 200;<br />
                growthAmountList.add(new int[2]);<br />
                growthAmountList.get(0)[0] = 2;<br />
                growthAmountList.get(0)[1] = 2;<br />
                enemies.add(new Enemy(gameDimensions, 50000, 100, 2, 7, startingDimensionsList.get(0), false, growthAmountList.get(0)));<br />
                rammingCounts.add(new LinkedList{'<'}Integer>());<br />
                break;<br />
              case 25:<br />
                startingDimensions[0] = 20;<br />
                startingDimensions[1] = 40;<br />
                growthAmount[0] = 2;<br />
                growthAmount[1] = 2;<br />
                enemies.add(new Enemy(gameDimensions, 50000, 100, 2, 7, startingDimensions, true, growthAmount));<br />
                rammingCounts.add(new LinkedList{'<'}Integer>());<br />
                break;<br />
              case 35:<br />
                startingDimensions[0] = 20;<br />
                startingDimensions[1] = 20;<br />
                growthAmount[0] = 4;<br />
                growthAmount[1] = 4;<br />
                enemies.add(new Enemy(gameDimensions, 10000, 100, 3, 5, startingDimensions, true, growthAmount));<br />
                rammingCounts.add(new LinkedList{'<'}Integer>());<br />
                break;<br />
            }<br />
            <br />
            staggerCount = 0;<br />
            staggering = false;<br />
          }<br />
        }<br />
        <br />
        if (player.dimensions[0] == 0 || player.dimensions[1] == 0) setup();<br />
        repaint();<br />
      }<br />
      <br />
      @Override<br />
      public void keyTyped(KeyEvent e) {'{'}<br />
      <br />
      }<br />
      <br />
      @Override<br />
      public void keyPressed(KeyEvent e) {'{'}<br />
        player.keyPressed(e);<br />
      }<br />
      <br />
      @Override<br />
      public void keyReleased(KeyEvent e) {'{'}<br />
        player.keyReleased(e);<br />
      }<br />
      <br />
      private void setup() {'{'}<br />
        player = new Player(gameDimensions);<br />
        enemies = new LinkedList{'<'}Enemy>();<br />
        int[] startingDimensions = {'{'} 20, 20 };<br />
        int[] growthAmount = {'{'} 2, 2 };<br />
        enemies.add(new Enemy(gameDimensions, 10000, 40, 5, 10, startingDimensions, true, growthAmount));<br />
        rammingCounts.add(new LinkedList{'<'}Integer>());<br />
        pointsCount = 0;<br />
        staggering = false;<br />
        staggerCount = 0;<br />
      }<br />
      <br />
      private void contactWithEnemy(Enemy enemy) {'{'}<br />
        boolean overlapPlayerRight = false;<br />
        boolean overlapPlayerDown = false;<br />
        Enemy secondEnemy;<br />
        <br />
        int overlapX = player.location[0] + player.dimensions[0] - enemy.location[0];<br />
        if (overlapX {'<'} 0 || overlapX > player.dimensions[0]) {'{'}<br />
          overlapX = enemy.location[0] + enemy.dimensions[0] - player.location[0];<br />
          if (overlapX {'<'} 0 || overlapX > enemy.dimensions[0]) overlapX = 0;<br />
        } else overlapPlayerRight = true;<br />
        <br />
        int overlapY = player.location[1] + player.dimensions[1] - enemy.location[1];<br />
        if (overlapY {'<'} 0 || overlapY > player.dimensions[1]) {'{'}<br />
          overlapY = enemy.location[1] + enemy.dimensions[1] - player.location[1];<br />
          if (overlapY {'<'} 0 || overlapY > enemy.dimensions[1]) overlapY = 0;<br />
        } else overlapPlayerDown = true;<br />
        <br />
        if (overlapX > overlapY) {'{'}<br />
          if (overlapPlayerDown == true) {'{'}<br />
            player.location[1] -= overlapY;<br />
            if (player.location[1] {'<'} 0) player.dimensions[1] += player.location[1];<br />
            for (int i = 0; i {'<'} enemies.size(); i++) {'{'}<br />
              if (enemies.get(i).checkIfInteractedPlayer(player)) {'{'}<br />
                secondEnemy = enemies.get(i);<br />
                if (enemy == secondEnemy) setup();<br />
                else player.dimensions[1] -= (secondEnemy.location[1] + secondEnemy.dimensions[1]) - player.location[1];<br />
              }<br />
            }<br />
          } else {'{'}<br />
            player.location[1] += overlapY;<br />
            if (player.location[1] + player.dimensions[1] > gameDimensions[1])<br />
              player.dimensions[1] -= (player.location[1] + player.dimensions[1]) - gameDimensions[1];<br />
            for (int i = 0; i {'<'} enemies.size(); i++) {'{'}<br />
              if (enemies.get(i).checkIfInteractedPlayer(player)) {'{'}<br />
                secondEnemy = enemies.get(i);<br />
                player.dimensions[1] -= (player.location[1] + player.dimensions[1]) - secondEnemy.location[1];<br />
              }<br />
            }<br />
          }<br />
        } else {'{'}<br />
          if (overlapPlayerRight == true) {'{'}<br />
            player.location[0] = enemy.location[0] - player.dimensions[0];<br />
            if (player.location[0] {'<'} 0) player.dimensions[0] += player.location[0];<br />
            for (int i = 0; i {'<'} enemies.size(); i++) {'{'}<br />
              if (enemies.get(i).checkIfInteractedPlayer(player)) {'{'}<br />
                secondEnemy = enemies.get(i);<br />
                player.dimensions[0] -= (secondEnemy.location[0] + secondEnemy.dimensions[0]) - player.location[0];<br />
              }<br />
            }<br />
          } else {'{'}<br />
            player.location[0] = enemy.location[0] + enemy.dimensions[0];<br />
            if (player.location[0] + player.dimensions[0] > gameDimensions[0])<br />
              player.dimensions[0] -= (player.location[0] + player.dimensions[0]) - gameDimensions[0];<br />
            for (int i = 0; i {'<'} enemies.size(); i++) {'{'}<br />
              if (enemies.get(i).checkIfInteractedPlayer(player)) {'{'}<br />
                secondEnemy = enemies.get(i);<br />
                player.dimensions[0] -= (player.location[0] + player.dimensions[0]) - secondEnemy.location[0];<br />
              }<br />
            }<br />
          }<br />
        }<br />
      }<br />
      <br />
      private void checkEnemiesInteractions(Enemy enemy, int i) {'{'}<br />
        for (int j = 0; j {'<'} enemies.size(); j++) {'{'}<br />
          if (enemy.checkIfInteractedInteractable(enemies.get(j)) == true && i != j) {'{'}<br />
            Integer rammingCount = 0;<br />
            try {'{'}<br />
              rammingCount = rammingCounts.get(i).get(j);<br />
            } catch (Exception error) {'{'}<br />
              for (int x = 0; x {'<'}= j; x++) {'{'}<br />
                try {'{'}<br />
                  if (rammingCounts.get(i).get(x) == x) {'{'}}<br />
                } catch (Exception e) {'{'}<br />
                  rammingCounts.get(i).add(0);<br />
                }<br />
              }<br />
              <br />
              rammingCount = rammingCounts.get(i).get(j);<br />
            }<br />
            <br />
            Enemy secondEnemy = enemies.get(j);<br />
            <br />
            boolean overlapEnemyRight = false;<br />
            boolean overlapEnemyDown = false;<br />
            int overlapX = enemy.location[0] + enemy.dimensions[0] - secondEnemy.location[0];<br />
            if (overlapX {'<'} 0 || overlapX > secondEnemy.dimensions[0]) {'{'}<br />
              overlapX = secondEnemy.location[0] + secondEnemy.dimensions[0] - enemy.location[0];<br />
              if (overlapX {'<'} 0 || overlapX > enemy.dimensions[0]) overlapX = 0;<br />
            }<br />
            else overlapEnemyRight = true;<br />
            int overlapY = enemy.location[1] + enemy.dimensions[1] - secondEnemy.location[1];<br />
            if (overlapY {'<'} 0 || overlapY > secondEnemy.dimensions[1]) {'{'}<br />
              overlapY = secondEnemy.location[1] + secondEnemy.dimensions[1] - enemy.location[1];<br />
              if (overlapY {'<'} 0 || overlapY > enemy.dimensions[1]) overlapY = 0;<br />
            }<br />
            else overlapEnemyDown = true;<br />
            <br />
            if (overlapX > overlapY) {'{'}<br />
              if (overlapEnemyDown == true) {'{'}<br />
                enemy.location[1] -= overlapY / 2;<br />
                secondEnemy.location[1] += overlapY / 2;<br />
              } else {'{'}<br />
                enemy.location[1] += overlapY / 2;<br />
                secondEnemy.location[1] -= overlapY / 2;<br />
              }<br />
              rammingCount = 0;<br />
            } else if (enemy.movingRight != secondEnemy.movingRight) {'{'}<br />
              if (enemy.location[1] + enemy.dimensions[1] / 2 > secondEnemy.location[1] + enemy.dimensions[1] / 2) {'{'}<br />
                rammingCount++;<br />
                <br />
                if (rammingCount == rammingTotal) {'{'}<br />
                  enemy.location[1]++;<br />
                  secondEnemy.location[1]--;<br />
                  rammingCount = 0;<br />
                }<br />
              } else {'{'}<br />
                rammingCount++;<br />
                <br />
                if (rammingCount == rammingTotal) {'{'}<br />
                  enemy.location[1]++;<br />
                  secondEnemy.location[1]--;<br />
                  rammingCount = 0;<br />
                }<br />
              }<br />
            } else {'{'}<br />
              if (enemy.movingRight == true) {'{'}<br />
                if (overlapEnemyRight == true) {'{'}<br />
                  secondEnemy.location[0] = enemy.location[0] + enemy.dimensions[0];<br />
                } else {'{'}<br />
                  enemy.location[0] = secondEnemy.location[0] + secondEnemy.dimensions[0];<br />
                }<br />
              } else {'{'}<br />
                if (overlapEnemyRight == true) {'{'}<br />
                  enemy.location[0] = secondEnemy.location[0] - enemy.dimensions[0];<br />
                } else {'{'}<br />
                  secondEnemy.location[0] = enemy.location[0] - secondEnemy.dimensions[0];<br />
                }<br />
              }<br />
              rammingCount = 0;<br />
            }<br />
          }<br />
        }<br />
      }<br />
    }<br />
  </code>
);
