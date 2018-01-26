UPDATE users
SET 
area =$1, 
children = $2, 
playdate =$3, 
mommydate= $4, 
flavor=$5
WHERE user_id = $6