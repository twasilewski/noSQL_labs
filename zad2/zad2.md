# ZADANIE 2


MONGODB

Sciagnalem baze danych movieLens z:

[Baza movieLens](http://grouplens.org/datasets/movielens/)

importuje do bazy danych "movieLens" kolekcje "ratings" z pliku "ratings.csv":

>mongoimport --host localhost --db movieLens --collection ratings --type csv --file ratings.csv --headerline

wykorzystanie zasobow systemowych podczas importu danych:

![Rys1](https://github.com/twasilewski/noSQL_labs/blob/noSQL_labs/zad2/rys1.png?raw=true)

zaimportowano 21622187 objektow
w czasie 4m24s

wyszukuje 100 najaktywniejszych uzytkownikow skryptem:

[top active users](https://github.com/twasilewski/noSQL_labs/blob/noSQL_labs/zad2/zad2_top100ActiveUsers.js)

wynik: [wynik](https://github.com/twasilewski/noSQL_labs/blob/noSQL_labs/zad2/wyniki_top100ActiveUsers)

uzycie procesora podczas wykonywania skryptu:
![Rys2](https://github.com/twasilewski/noSQL_labs/blob/noSQL_labs/zad2/rys3.png?raw=true)

wyszukiwanie trwalo 11.505s

wyszukuje 500 najlepiej ocenianych filmow skryptem:

[top active users](https://github.com/twasilewski/noSQL_labs/blob/noSQL_labs/zad2_top500RatedMoes.js)

wynik: [wynik](https://github.com/twasilewski/noSQL_labs/blob/noSQL_labs/zad2/wyniki_top500RatedMovies)


wyszukiwanie trwalo 12.001s


wyszukuje rozklad ocen skryptem:

[ratings distribution](https://github.com/twasilewski/noSQL_labs/blob/noSQL_labs/zad2/zad2_rating%20distribution.js)

wyszukiwanie trwalo 7.114s

wynik: [wynik](https://github.com/twasilewski/noSQL_labs/blob/noSQL_labs/zad2/wyniki_rating_dist)

wynik w formie wykresu: 

![Wykres](https://github.com/twasilewski/noSQL_labs/blob/noSQL_labs/zad2/rating_chart.png?raw=true)

POSTGRESQL

importuje baze danych skryptem:

[psql import](https://github.com/twasilewski/noSQL_labs/blob/noSQL_labs/zad2/psql_ratingImport.sh)

wykorzystanei zasobow systemowych podczas importu:

![Rys2](https://github.com/twasilewski/noSQL_labs/blob/noSQL_labs/zad2/rys4.png?raw=true)

importowanie trwalo 36.890s

wyszukuje 100 najaktywniejszych uzytkownikow skryptem:

[top active users](https://github.com/twasilewski/noSQL_labs/blob/noSQL_labs/zad2/psql_zad2_top100ActiveUsers.sh)

uzycie procesora podczas wykonywania skryptu:
![Rys2](https://github.com/twasilewski/noSQL_labs/blob/noSQL_labs/zad2/rys2.png?raw=true)

wyszukiwanie trwalo 1m 45.387s

wyszukuje 500 najlepiej ocenianych filmow skryptem:

[top 500 rated movies](https://github.com/twasilewski/noSQL_labs/blob/noSQL_labs/zad2/psql_zad2_top500_RatedMovies.sh)

wyszukiwanie trwalo 21.392s

wyszukuje rozklad ocen:

[ratings distribution](https://github.com/twasilewski/noSQL_labs/blob/noSQL_labs/zad2/psql_zad2_rating%20distribution.sh)

wyszukiwanie trwalo 15.857s





