Sciagnalem baze danych przestepstw w Chicago od 2001 roku do dzis z

[Baza Crimes](http://catalog.data.gov/dataset/crimes-2001-to-present-398a4)

baza zawiera dane na temat przestepstw w Chicago w latach od 2001 do 2015

importuje baze danych poleceniem:

mongoimport --d crimes --collection crimes --type csv --file Crimes.csv --headerline

zaimportowano 5968935 objektow

import trwal 2m 1.504s

zasoby systemowe podczas importowania:

![Rys1](https://github.com/twasilewski/noSQL_labs/blob/noSQL_labs/zad3/rys1_1.png)

JavaScript

10 miejsc, w ktorych najczesciej popelniane sa przestepstwa:

[aggregation 1](https://github.com/twasilewski/noSQL_labs/blob/noSQL_labs/zad3/agg_1.js)

wyniki: [wynik](https://github.com/twasilewski/noSQL_labs/blob/noSQL_labs/zad3/wynik1)

10 najczesciej popelnianych typow przestepstw

[aggregation 2](https://github.com/twasilewski/noSQL_labs/blob/noSQL_labs/zad3/agg_2.js)

wyniki: [wynik](https://github.com/twasilewski/noSQL_labs/blob/noSQL_labs/zad3/wynik2)

10 najniebezpieczniejszych ulic

[aggregation 3](https://github.com/twasilewski/noSQL_labs/blob/noSQL_labs/zad3/agg_3.js)

wyniki: [wynik](https://github.com/twasilewski/noSQL_labs/blob/noSQL_labs/zad3/wynik3)

JAVA

10 miejsc, w ktorych najczesciej popelniane sa przestepstwa:

[aggregation 1](https://github.com/twasilewski/noSQL_labs/blob/noSQL_labs/zad3/agg1.java_function)

//10 najczesciej popelnianych typow przestepstw

[aggregation 2](https://github.com/twasilewski/noSQL_labs/blob/noSQL_labs/zad3/agg2.java_function)

//10 najniebezpieczniejszych ulic

[aggregation 3](https://github.com/twasilewski/noSQL_labs/blob/noSQL_labs/zad3/agg3.java_function)

