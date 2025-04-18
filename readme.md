Ha valamelyik link rossz helyre mutat, szólj. A commitok listája itt is elérhető (az utolsó pótlásos, az oop refactor 2):
[commit history](https://github.com/gomszab/jav_ref2/commits/main/)

# Szabályok
## Határidők
- első határidő: április 16 (eddig kell min 1-et)
- második határidő: április 25 (eddig kell mind a kettőt)
- Mikor kapok csak 1 darab 1-est? Ha 16-ig megírsz 1 darab pótlást. Ha 25-ig írsz meg egyet, de 16-ig 1 sincsen kész akkor 2 darab 1est kapsz.

## Formátum
- minden sor felkommentezve kell legyen
- jsdoc /** */ -es doksizás minden egyes függvényen, illetve a classokon, azok metódusain (ideértve gettert settert) valamint type definíció a tulajdonságokon
- egy függvény (és callback) akkor dokumentált, ha @returns és @param is meg van adva típusokkal
- összefoglaló típus definiálása nem kötelező, de ajánlott, ha jobban olvasható kódot szeretnél
- Minden callback-nek kötelező definiciót létrehozni /** */ @callback-el
- Object, any, unknown, valamint Function és Array (utóbbi 2 paraméter nélkül) típus megadása nem elfogadott
- a pótlások közül az egyiknek a forradalmaknak kell lennie, a másik szabadon választható a másik 2 olyan dolgozatból, ami nem a mintadolgozat.
- A /** */-ozás lehet utólag is az utolsó commit-ban, de javasolt abban a commitban túl esni rajta amikor bevezetésre kerül
- Olyan függvények használata nem engedélyezett, amelyekről az órán nem volt szó
- css-hez debug célokból használhatjátok ezt (de nem kötelező, nem nézem): [css](./style.css)
- Az általam használt változóneveket írjátok át lehetőség szerint
- Ha egy sorban több műveletet vonsz össze pl.: if(Number(input.value) === forradalom.evszam) akkor a kommentnek mindkét művelet leírását tartalmaznia kell (a példához: a beviteli mező tartalmának számmá konvertálása és összehasonlítása a forradalom évszám tulajdonságával)

## Dogák
repó elnevezési javaslatok
| repónév        | pdf           | csv|
| ------------- |:-------------:| ------- |
| alkotasok | [alkotasok](./alkotasok/Dolgozatalkotasok.pdf) | [csv](./alkotasok/data.csv)|
| felfedezok | [felfedezok](./felfedezok/Dolgozatfelfedezok.pdf) | [csv](./felfedezok/data.csv)|
| forradalom ❗ | [forradalom](./forradalom/Dolgozatforradalmak.pdf) | [csv](./forradalom/data.csv)|


| Commit szám | Commit        | Hogy néz ki?  | példa commit url |
|:------------|:------:| -----:|----:| 
| 1. | div struktura siman | a böngésző fejlesztői panel elemek tabján látjuk a container divet, benne a két másikkal | [link](https://github.com/gomszab/jav_ref2/tree/b45ba0168a629fc4c170ec45e64badd7c3f92ba2) | 
| 2. |div struktura oop | a böngésző fejlesztői panel elemek tabján látjuk az oop-ben létrehozott a container divet, benne a két másikkal | [link](https://github.com/gomszab/jav_ref2/tree/5899c805a2650c45936116b22b4280185c519948) | 
| 3. | tablazat hozzadasa sima | megjelenik egy táblázat fejléc az oop nélkül létrehozott struktúrában| [link](https://github.com/gomszab/jav_ref2/tree/b31b805dfdbe4170a6bac728d169222b9d3989b2) | 
| 4. | tablazat letrehozasa oop | megjelenik egy táblázat fejléc az oop-vel létrehozott struktúrában | [link](https://github.com/gomszab/jav_ref2/tree/1625f34185f84fd7b2a9acedb2add9a710418067) | 
| 5. | form letrehozasa sima | megjelenik egy form beviteli mezőkkel a js-ben oop nélkül létrehozott struktúrában | [link](https://github.com/gomszab/jav_ref2/tree/f3d70a731afd5e9819e1c3e2e6c8a0771a39b123) | 
| 6. | form letrehozasa oop | megjelenik egy form beviteli mezőkkel a js-ben oop-vel létrehozott struktúrában | [link](https://github.com/gomszab/jav_ref2/tree/2734cfaffc7a71d4c26e583128d2fbe4c9c0aa87) | 
| 7. | form submit hozzadas es adatok tarolasa | ❗ A commit tartalmazhatja a "sima"-t plusszban.❗ működik a submit validáció nélkül az oop nélküli megvalósításban | [link](https://github.com/gomszab/jav_ref2/tree/3d27ea05d2dc47c52b6c3e16444106bfc0cb5d5a) | 
| 8. | oop refactor 1 | ugyanúgy mint a 6-osban | [link](https://github.com/gomszab/jav_ref2/tree/1bed952c5dd1bcd14623a4b0bc7c4b6a51a5e21c) | 
| 9. | form hozzaadas es adatok tarolasa oop | működik a hozzáadás, van manager és entitás osztály | [link](https://github.com/gomszab/jav_ref2/tree/35256325ec6749bf6d1f66bac69d3c4eae14b2fb)| 
| 10. | validacio hozzaadasa sima | működik a validáció az oop nélkül létrehozott struktúrában | [link](https://github.com/gomszab/jav_ref2/tree/319d2c9f3b7d422d41e66d2051ac0e9e0cee6b7e)| 
| 11. | formfield hozzaadasa | oop-ben csak refactorálunk, nem változik a működés | [link](https://github.com/gomszab/jav_ref2/tree/04732c12ca14b828c727e4f83fa085b81ea1b557)| 
| 12. | form validacio oop | oop-ben működik a validáció | [link](https://github.com/gomszab/jav_ref2/tree/aca2807e0da70f3dc7fbd70fca76b4db8755ae93)|
| 13. | feltoltes hozzaadasa sima | működik a feltöltés a simán létrehozott js-ben | [link](https://github.com/gomszab/jav_ref2/tree/ce00601aba821d42a523db151f2cf142dbc9ddc8)|
| 14. | feltoltes hozzaadasa oop | működik a feltöltés az oop-ben létrehozott js-ben | [link](https://github.com/gomszab/jav_ref2/tree/75296ede6f080c8068ca155fe61891f928b2163a)|
| 15. |letoltes hozzaadasa sima | működik a letöltés a simán létrehozott js-ben | [link](https://github.com/gomszab/jav_ref2/tree/7e3a31f691fa550a959ded9f3b3130c3529d6003)|
| 16. |letoltes hozzaadasa oop | működik a letöltés az oop-ben létrehozott js-ben | [link](https://github.com/gomszab/jav_ref2/tree/60adcccf7ad8ebd0e3ffbee0e18b51bf1f889a2e)|
| 17. |szures hozzaadasa sima | ❗Lehet az is a commit üzenet, hogy "algoritmus hozzaadasa sima", ezt én rontottam el, mert nem mindenhol szűrünk.❗ Működik az algoritmus | [link](https://github.com/gomszab/jav_ref2/tree/1ea602a6e0558b8cc6817f67d53929b93f3e5955)|
| 18. |refactor sima | a kinézet nem változik, a kódban lehet kreatívkodni, hogy minél kevesebb kód duplikáció és globális változó legyen, az enyém csak 1 példa | [link](https://github.com/gomszab/jav_ref2/tree/21394066f227bc953c4e42ea77f7c5df2ff1b295)|
| 19. |functions-be athelyezes sima | áthelyezzük külön fájlba a korábbi commitban létrehozott függvényeket figyelve a változókra | [link](https://github.com/gomszab/jav_ref2/tree/02defafa9ca9aa3a6de0a221552b8de0df0a9950)|
| 20. |filter hozzaadasa oop | ❗Lehet az is a commit üzenet, hogy "algoritmus hozzaadasa oop", ezt én rontottam el, mert nem mindenhol szűrünk.❗ Működik az algoritmus | [link](https://github.com/gomszab/jav_ref2/tree/e73d7275a0e968b626cee3ad5a075db9c085c5cb)|
| 21. |oop refactor 2 | itt is lehet kreatívkodni. A konstruktor minél rövidebb legyen, és a callback-ek ki legyen szervezve | [link](https://github.com/gomszab/jav_ref2/tree/05000d00d8b569a4524014b6a502a0c179d3cc7b)|
