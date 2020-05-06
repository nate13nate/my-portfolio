import React from 'react';

export default (
  <code>
    CREATE TABLE "MOVIES"
    (
      "ID" INT NOT NULL AUTO_INCREMENT,
      "MOVIE_NAME" VARCHAR(40),
      "RATING" VARCHAR(5),
      "LENGTH" VARCHAR(11),
    );

    INSERT INTO MOVIES (MOVIE_NAME, RATING) VALUES ("Sonic the Hedgehog", "PG", "1 HR 38 MIN");
    INSERT INTO MOVIES (MOVIE_NAME, RATING) VALUES ("The Photograph", "PG-13", "1 HR 46 MIN");
    INSERT INTO MOVIES (MOVIE_NAME, RATING) VALUES ("Bloodshot", "PG-13", "1 HR 49 MIN");
    INSERT INTO MOVIES (MOVIE_NAME, RATING) VALUES ("Bad Boys For Life", "R", "2 HR 4 MIN");
    INSERT INTO MOVIES (MOVIE_NAME, RATING) VALUES ("Harley Quinn: Birds of Prey", "R", "1 HR 49 MIN");
  </code>
);
