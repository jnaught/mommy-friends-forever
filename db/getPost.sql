SELECT pid, blog
FROM post JOIN users ON users.user_id = post.user_id
ORDER BY pid DESC
LIMIT 5