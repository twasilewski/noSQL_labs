#!/bin/sh
psql tomek tomek << EOF
	SELECT 
		rating, COUNT(1) AS rating_count 
	FROM 
		ratings 
	GROUP BY 
		rating
	ORDER BY rating_count DESC
	LIMIT 100;
EOF
