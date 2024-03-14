SELECT	v.id, 
		v.destination, 
		count(f.user_id) as followers,
		(select count(*) from followers where vacation_id = v.id and user_id = 9) as isFollowing
FROM	vacations AS v
LEFT JOIN	followers AS f ON f.vacation_id = v.id 
GROUP BY v.id