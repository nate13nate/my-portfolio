import React from 'react';

export default (
  <code>
    CREATE TABLE "MOVIES"<br />
    (<br />
      "ID" INT NOT NULL AUTO_INCREMENT,<br />
      "MOVIE_NAME" VARCHAR(40),<br />
      "RATING" VARCHAR(5),<br />
      "LENGTH" VARCHAR(11),<br />
    );<br />
    <br />
    INSERT INTO MOVIES (MOVIE_NAME, RATING) VALUES ("Sonic the Hedgehog", "PG", "1 HR 38 MIN");<br />
    INSERT INTO MOVIES (MOVIE_NAME, RATING) VALUES ("The Photograph", "PG-13", "1 HR 46 MIN");<br />
    INSERT INTO MOVIES (MOVIE_NAME, RATING) VALUES ("Bloodshot", "PG-13", "1 HR 49 MIN");<br />
    INSERT INTO MOVIES (MOVIE_NAME, RATING) VALUES ("Bad Boys For Life", "R", "2 HR 4 MIN");<br />
    INSERT INTO MOVIES (MOVIE_NAME, RATING) VALUES ("Harley Quinn: Birds of Prey", "R", "1 HR 49 MIN");<br />
  </code>
);
