import React from 'react';

export default (
  <code>
    package interactables;<br />
    <br />
    import entities.Player;<br />
    <br />
    public abstract class Interactable {'{'}<br />
      public int[] dimensions = new int[2];<br />
      public int[] location = new int[2];<br />
      <br />
      public boolean checkIfInteractedPlayer(Player player) {'{'}<br />
        if (player.location[0] {'<'} location[0] + dimensions[0]<br />
          && player.location[0] + player.dimensions[0] > location[0]<br />
          && player.location[1] {'<'} location[1] + dimensions[1]<br />
          && player.location[1] + player.dimensions[1] > location[1]) return true;<br />
        return false;<br />
      }<br />
      <br />
      public boolean checkIfInteractedInteractable(Interactable interactable) {'{'}<br />
        if (interactable.location[0] {'<'} location[0] + dimensions[0]<br />
          && interactable.location[0] + interactable.dimensions[0] > location[0]<br />
          && interactable.location[1] {'<'} location[1] + dimensions[1]<br />
          && interactable.location[1] + interactable.dimensions[1] > location[1]) return true;<br />
        return false;<br />
      }<br />
    }<br />
  </code>
);
