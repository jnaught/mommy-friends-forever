
INSERT INTO users
    (uid, firstname, lastname, displayname, picture)
VALUES
    ($1, $2, $3, $4, $5)
RETURNING uid, firstname, lastname, displayname, picture;