#!/bin/sh
psql tomek tomek << EOF
	SELECT
		movieId, COUNT(1) AS rated
	FROM
		ratings
	GROUP BY
		movieId
	ORDER BY rated DESC
	LIMIT 10;
EOF
