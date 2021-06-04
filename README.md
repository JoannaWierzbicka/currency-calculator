> ⭐ ***README** to coś więcej niż opis. Poprzez nie **pokazujesz swoje mocne strony** – swoją dokładność, sposób myślenia i podejście do rozwiązywania problemów. Niech Twoje README pokaże, że masz **świetne predyspozycje do rozwoju!***
> 
> 🎁 *Zacznij od razu. Skorzystaj z **[szablonu README i wskazówek](https://github.com/devmentor-pl/readme-template)**.* 

&nbsp;


# Portfel walutowy

Twoim zadaniem jest zbudować aplikację, która będzie obliczać potencjalny zysk lub stratę dla posiadanych walut.

Użytkownik ma mieć możliwość wprowadzenia informacji jakie waluty posiada, w jakiej ilości, kiedy je zakupił i po jakiej cenie (ten element można zautomatyzować - jak zostanie wybrana data to cena jest uzupełniana automatycznie, którą użytkonik może zmodyfikować). 

Aplikacja zapisze te dane do [localStorege](https://frontstack.pl/czym-jest-local-storage-i-jak-uzywac/) jako tablicę przechowującą obiekty. Po uruchomieniu strony zawsze należy sprawdzić czy jakieś dane nie są już przechowywane i należy je wczytać do widoku aplikacji.

Następnie do każdego elementu w tablicy zostanie pobrana aktualna średnia cena danej waluty przy pomocy [API](https://exchangeratesapi.io/).

Wynik działania aplikacji mógłby się sprowadzać do poniższej tabeli:

| Waluta | Ilość | Data zakupu | Cena zakupu | Obecny kurs | Obecna wartość | Zysk/Strata |
| --- | --- | --- | --- | --- | --- | --- |
| EUR | 100 | 2020-01-01 | 4.38 | 4.49 | 449.00 | 11.00 (+2.5%) |
| EUR | 100 | 2020-03-01 | 4.48 | 4.49 | 449.00 |  1.00 (+0.2%) |
| USD | 100 | 2020-03-01 | 3.91 | 3.71 | 371.00 |  -20.00 (-5.2%) |

Zarządzenie stanem ma zostać zaimplementowane przy pomocy Redux-a, wykorzystując oddzielny Magazyn dla danych z *localStorage* ([przykład](https://dev.to/link2twenty/react-redux-and-localstorage-2lih)) oraz dla *API*. Całość ma zostać połączona przy pomocy `.combineReducers()`.

Należy tak napisać rozwiązanie, aby każdy z elementów w łatwy sposób można było przenieść do innej aplikacji.


PS. Jeśli uznasz, że Twoja aplikacja powinna być bardziej rozbudoana możesz przechowywać historię sprawdzeń danej waluty w *localStorage* i [generować wykres](https://github.com/jerairrest/react-chartjs-2) przezentujący poziom zysków lub strat dla danej pozycji.



&nbsp;

> ⭐ ***README** to coś więcej niż opis. Poprzez nie **pokazujesz swoje mocne strony** – swoją dokładność, sposób myślenia i podejście do rozwiązywania problemów. Niech Twoje README pokaże, że masz **świetne predyspozycje do rozwoju!***
> 
> 🎁 *Zacznij od razu. Skorzystaj z **[szablonu README i wskazówek](https://github.com/devmentor-pl/readme-template)**.* 
