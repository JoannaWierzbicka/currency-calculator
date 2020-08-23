# Portfel walutowy

Twoim zadaniem jest zbudować aplikację, która będzie obliczać potencjalny zysk lub stratę dla posiadanych walut.

Użytkownik ma mieć możliwość wprowadzenia informacji jakie waluty posiada, w jakiej ilości, kiedy je zakupił i po jakiej cenie. Aplikacja zapisze te dane do [localStorege](https://frontstack.pl/czym-jest-local-storage-i-jak-uzywac/) jako tablicę przechowującą obiekty. Po uruchomieniu strony zawsze należy sprawdzić czy jakieś dane nie są już przechowywane i należy je wczytać do widoku aplikacji.

Następnie do każdego elementu w tablicy zostanie pobrana aktualna średnia cena danej waluty przy pomocy [API](https://exchangeratesapi.io/).

Zarządzenie stanem ma zostać zaimplementowane przy pomocy Redux-a, wykorzystując oddzielny Magazyn dla danych z *localStorage* oraz dla *API*. Całość ma zostać połączona przy pomocy .combineReducers()

Należy tak napisać rozwiązanie, aby każdy z elementów w łatwy sposób można było przenieść do innej aplikacji.


PS. Jeśli uznasz, że Twoja aplikacja powinna być bardziej rozbudoana możesz przechowywać historię sprawdzeń danej waluty w *localStorage* i [generować wykres](https://github.com/jerairrest/react-chartjs-2) przezentujący poziom zysków lub strat dla danej pozycji.