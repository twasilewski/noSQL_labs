#!/bin/sh
psql tomek tomek << EOF
	SELECT 
		userId, COUNT(1) AS rating_count 
	FROM 
		ratings 
	GROUP BY 
		userId
	ORDER BY rating_count DESC
	LIMIT 100;
EOF
