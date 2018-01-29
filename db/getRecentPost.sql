-- SELECT user_id, blog, displayname
-- FROM post join users ON users.user_id = post.user_id
-- ORDER BY pid DESC
-- LIMIT 5
SELECT users.user_id, users.displayname, users.picture, post.blog, post.user_id
FROM users JOIN post ON users.user_id = post.user_id
ORDER BY pid DESC
LIMIT 5 