SELECT user_id
FROM profiles JOIN users ON users.user_id = profiles.user_id
WHERE users.user_id = $1