#!/bin/sh
psql tomek tomek << EOF
	SELECT
		movieId,avg(rating) AS ratings
	FROM
		ratings
	GROUP BY 
		 movieId
	ORDER BY ratings DESC
	LIMIT 500;
EOF
