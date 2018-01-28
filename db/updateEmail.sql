UPDATE users 
SET 
email = $1, 
displayname = $2

WHERE user_id = $3
