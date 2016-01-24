#!/bin/sh
psql tomek tomek << EOF
	COPY ratings FROM '/home/tomek/Dokumenty/noSql/ml-latest/ratings.csv'
	DELIMITER ',' CSV HEADER;
EOF
