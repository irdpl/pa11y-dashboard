// This file is part of Pa11y Dashboard.
//
// Pa11y Dashboard is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Pa11y Dashboard is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Pa11y Dashboard.  If not, see <http://www.gnu.org/licenses/>.

// jscs:disable maximumLineLength
'use strict';

module.exports = getStandards;

function getStandards() {
	return [
		{
			title: 'WCAG2A',
			rules: [
				{
					name: 'WCAG2A.Principle1.Guideline1_1.1_1_1.H30.2',
					description: 'Grafika jest jedyną treścią linku i powinna zostać uzupełniona o tekst alternatywny przedstawiający jego cel.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_1.1_1_1.H37',
					description: 'Element img nie ma atrybutu alt. Dodaj ten atrybut i wpisz do niego krótki opis grafiki.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_1.1_1_1.H67.1',
					description: 'Grafika pełni funkcję dekoracyjną, więc zarówno atrybut alt, jak i title powinny być puste.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_1.1_1_1.H67.2',
					description: 'Grafika jest oznaczona jako dekoracyjna i będzie ignorowana przez technologie wspomagające np. czytniki ekranu.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_1.1_1_1.G94.Image',
					description: 'Sprawdź, czy opis alternatywny grafiki przekazuje tę samą informację, co grafika.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_1.1_1_1.H36',
					description: 'Przycisk graficzny nie ma atrybutu alt. Dodaj alt i opisz w nim funkcję przycisku.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_1.1_1_1.G94.Button',
					description: 'Sprawdź, czy tekst alternatywny przycisku prawidłowo opisuje funkcję przycisku.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_1.1_1_1.H24',
					description: 'Element area w graficznej mapie odsyłaczy nie ma atrybutu alt. Każdy taki obszar powinien mieć atrybut alt z tekstem alternatywnym, który odpowiednio opisuje dany obszar.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_1.1_1_1.H24.2',
					description: 'Sprawdź, czy tekst alternatywny elementu area odpowiada jego funkcji lub treści.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_1.1_1_1.G73,G74',
					description: 'Jeśli krótki tekst alternatywny nie opisuje wystarczająco treści przekazywanej przez grafikę, dodaj rozszerzony opis bezpośrednio na stronie lub na oddzielnej stronie.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_1.1_1_1.H2.EG5',
					description: 'Tekst alternatywny elementu img umieszczonego wewnątrz linku, nie może być taki sam jak tekst samego linku.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_1.1_1_1.H2.EG4',
					description: 'Element img znajdujący się wewnątrz linku nie ma atrybutu alt lub alt jest pusty. Ponieważ w sąsiedztwie znajduje się tekst linku, zaleca się połączenie tych elementów w jedno łącze ze wspólnym opisem.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_1.1_1_1.H2.EG3',
					description: 'Element img znajdujący się wewnątrz linku nie może mieć opisu alternatywnego tej samej treści, co tekst linku znajdujący się w jego sąsiedztwie.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_1.1_1_1.H53',
					description: 'Element object musi mieć atrybut alt z niepustym opisem alternatywnym, o ile nie został zapewniony żaden inny alternatywny opis tego elementu.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_1.1_1_1.G94,G92.Object',
					description: 'Sprawdź, czy dla wszystkich elementów nietekstowych istnieją krótkie lub długie opisy alternatywne i możliwie najdokładniej je opisują.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_1.1_1_1.H35.3',
					description: 'Applet powinien mieć opis alternatywny wewnątrz znaczników object. Zapewni to alternatywę w przeglądarkach, które nie obsługują elementu applet.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_1.1_1_1.H35.2',
					description: 'Applet powinien mieć opis alternatywny w atrybucie alt, aby zapewnić wsparcie w przypadku problemów z załadowaniem treści.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_1.1_1_1.G94,G92.Applet',
					description: 'Sprawdź, czy dla wszystkich elementów nietekstowych istnieją krótkie lub długie opisy alternatywne i możliwie najdokładniej je opisują.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_2.1_2_1.G158',
					description: 'Jeśli nagranie tylko dźwięk osadzone na stronie nie jest alternatywą dla tekstu, czy istnieje do niego alternatywa tekstowa.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_2.1_2_1.G159,G166',
					description: 'Jeśli obiekt wideo (bez dźwięku) osadzony na stronie nie jest alternatywą dla tekstu, sprawdź, czy istnieje do niego alternatywa tekstowa lub ścieżka dźwiękowa prezentująca tę samą treść.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_2.1_2_2.G87,G93',
					description: 'Jeśli obiekt wideo ze ścieżką audio osadzony na stronie nie jest alternatywą dla tekstu, sprawdź, czy ma napisy dla niesłyszących.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_2.1_2_3.G69,G78,G173,G8',
					description: 'Jeśli obiekt wideo ze ścieżką audio nie jest alternatywą dla tekstu, sprawdź, czy zawiera dodatkowo audiodeskrypcję i/lub opis alternatywny dla treści przedstawionych wyłącznie w formie obrazu.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H42.2',
					description: 'Nagłówek nie ma treści. Tekst, który nie ma funkcji nagłówka nie powinien być oznaczony znacznikami do określania nagłówków.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H93',
					description: 'Wiele elementów label ma taki sam atrybut for. Jeśli te etykiety odnoszą się do różnych kontrolek formularza, kontrolki powinny mieć unikalne atrybuty id.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H44.NonExistent',
					description: 'Atrybut for elementu label zawiera identyfikator pola, które nie istnieje na stronie.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H44.NonExistentFragment',
					description: 'Atrybut for elementu label zawiera identyfikator pola, które nie istnieje w tym obszarze strony.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H44.NotFormControl',
					description: 'Atrybut for elementu label zawiera identyfikator, który jest przypisany do elementu niebędącego kontrolką formularza. Sprawdź, czy identyfikator został umieszczony w odpowiednim znaczniku.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H44.NoForAttr',
					description: 'Element label nie ma atrybutu for. Sprawdź, czy jest jednoznacznie powiązany z kontrolką formularza (czy otacza pole formularza).'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H44.NoId',
					description: 'Kontrolka formularza nie ma atrybutu id, dlatego nie może mieć jawnej etykiety (powiązanej atrybutem for).'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H65.3',
					description: 'Kontrolka formularza bez etykiety ma pusty atrybut title. Atrybut title powinien określać przeznaczenie kontrolki.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H65',
					description: 'Kontrolka formularza ma atrybut title bez treści lub z samymi spacjami. Taki title nie będzie uwzględniany jako prawidłowa etykieta.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H44.2',
					description: 'Kontrolka formularza nie ma jawnego atrybutu label lub title, który określa przeznaczenie kontrolki.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H44.NoLabelAllowed',
					description: 'Element label nie powinien być stosowany w tego typu kontrolce formularza.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H44.1.After',
					description: 'Element label dla tej kontrolki powinien być umieszczony za tą kontrolką.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H44.1.Before',
					description: 'Element label dla tej kontrolki powinien być umieszczony przed tą kontrolką.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H49.Semantic',
					description: 'Do oznaczenia tekstu wyróżnionego lub specjalnego powinien zostać użyty odpowiedni znacznik semantyczny, aby można je było określić programowo.'
				},				
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H49.[NodeName]',
					description: 'Do oznaczenia tekstu wyróżnionego lub specjalnego powinien zostać użyty odpowiedni znacznik semantyczny, aby można je było określić programowo.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H49.AlignAttr',
					description: 'Do oznaczenia tekstu wyróżnionego lub specjalnego powinien zostać użyty odpowiedni znacznik. Atrybut align użyty w innych przypadkach niż w celu wyrównania danych w komórkach tabeli jest przestarzały. Użyj arkuszy stylów CSS.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.AlignAttr.Semantic',
					description: 'Do oznaczenia tekstu wyróżnionego lub specjalnego powinien zostać użyty odpowiedni znacznik. Atrybut align użyty w innych przypadkach niż w celu wyrównania danych w komórkach tabeli jest przestarzały. Użyj arkuszy stylów CSS.'
				},				
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H42',
					description: 'Jeśli ten fragment treści miał być nagłówkiem, powinny zostać użyte znaczniki nagłówków (h1 – h6).'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H63.3',
					description: 'W komórce tabeli użyto niewłaściwy atrybut scope. Dopuszczalne atrybuty to: row, col, rowgroup i colgroup.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H63.2',
					description: 'Atrybuty scope używane dla komórek tabeli (td), aby oznaczyć nagłówek, są przestarzałe w HTML5. Zaleca się skorzystanie ze znacznika th.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H43.ScopeAmbiguous',
					description: 'Użycie atrybutów scope dla elementu th jest niejasne w tabeli z wieloma nagłówkami. Zaleca się użycie atrybutu headers w znaczniku td.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H43.IncorrectAttr',
					description: 'Nieprawidłowy atrybut nagłówka w elemencie td. Oczekiwany "[expected headers]", ale znaleziono "[actual headers]"'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H43.HeadersRequired',
					description: 'Nie zdefiniowano relacji pomiędzy komórką td a powiązanym z nią nagłówkiem th. Wskazana tabela ma wiele poziomów th, więc należałoby użyć w komórkach td atrybutu headers.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H43.MissingHeaderIds',
					description: 'Nie wszystkie nagłówki th w tej tabeli mają atrybut id i nie będzie się można do nich odwołać za pomocą atrybutu headers w znacznikach td.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H43.MissingHeadersAttrs',
					description: 'Nie wszystkie komórki td w tej tabeli mają atrybut headers. W atrybucie headers powinny znajdować się identyfikatory powiązanych nagłówków.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H43,H63',
					description: 'Komórki td nie mają ustalonej relacji z komórkami nagłówkowymi th. Należy zdefiniować atrybut scope dla th lub headers dla td.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H63.1',
					description: 'Nie wszystkie komórki th w tej tabeli mają atrybut scope. Ten atrybut pozwala powiązać nagłówki th z odpowiednimi komórkami td.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H39,H73.4',
					description: 'Jeśli tabela zawiera treści i zastosowano w niej atrybut summary oraz znacznik caption, to treści tego atrybutu i znacznika nie mogą być powielone.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H73.3.Check',
					description: 'Jeśli ta tabela zawiera dane, sprawdź, czy atrybut summary opisuje układ tabeli oraz wyjaśnia, jak jej użyć.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H73.3.NoSummary',
					description: 'Jeśli ta tabela zawiera dane, rozważ użycie atrybutu aria-describedby albo starszego summary, aby opisać układ tabeli i wyjaśnić, jak jej użyć.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H39.3.Check',
					description: 'Jeśli ta tabela zawiera dane, sprawdź, czy treść podpisu w caption odpowiednio je opisuje.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H39.3.NoCaption',
					description: 'Jeśli ta tabela zawiera dane, powinna być uzupełniona o podpis w znaczniku caption.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H71.3',
					description: 'Element fieldset nie ma opisu w postaci elementu legend. Wszystkim elementom fieldset powinny towarzyszyć opisy w elementach legend.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H71.NoLegend',
					description: 'Element fieldset nie ma opisu w postaci elementu legend. Wszystkim elementom fieldset powinny towarzyszyć opisy w elementach legend.'
				},			
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H85.2',
					description: 'Jeśli elmenty listy wyboru stanowią grupę, powinny być zgrupowane elementem optgroup.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H71.2',
					description: 'Pola opcji (radio) lub pola wyboru (checkobx) z tym samym atrybutem name muszą być umieszczone w elemencie fieldset.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H71.SameName',
					description: 'Pola opcji (radio) lub pola wyboru (checkobx) z tym samym atrybutem name muszą być umieszczone w elemencie fieldset.'
				},				
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H48.1',
					description: 'Treść przypomina z wyglądu listę nieuporządkowaną. Jeśli jest to lista nieuporządkowana, powinna być oznaczona odpowiednimi znacznikami ul.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H48.2',
					description: 'Treść przypomina z wyglądu listę uporządkowaną. Jeśli jest to lista uporządkowana, powinna być oznaczona odpowiednimi znacznikami ol.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.G141',
					description: 'Nagłówki nie są zagnieżdżone logicznie. Ten element [heading] (powinien być elementem [correct heading], aby był prawidłowo zagnieżdżony. (Wydaje się być głównym nagłówkiem dokumentu, więc powinien być elementem h1).'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H48',
					description: 'Jeśli ten element zawiera nawigację, zaleca się, aby został oznaczony jako lista np. przy użyciu listy nieuporządkowanej ul.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_2.G57',
					description: 'Struktura i ułożenie elementów powinny oddawać sens strony i informacji. Sprawdź, czy treść jest uporządkowana w sensownej kolejności po linearyzacji, na przykład po wyłączeniu arkuszy stylów.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_3.G96',
					description: 'Sprawdź, czy przekazane instrukcje opierają się także na innych właściwościach niż tylko na cechach postrzegalnych przez zmysły, takich jak kształt, wielkość czy położenie.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_4.1_4_1.G14,G182',
					description: 'Sprawdź, czy informacje przekazane za pomocą koloru są przedstawione także w inny alternatywny sposób, np. opisane tekstem.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_4.1_4_2.F23',
					description: 'Jeżeli materiał audio włączany jest automatycznie i trwa dłużej niż trzy sekundy, należy umożliwić zatrzymanie bądź wyciszenie odtwarzania.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_4.1_4_3.F24.BGColour',
					description: 'Sprawdź, czy kolor tekstu odpowiada pod względem wymagań kontrastu kolorowi lub obrazkowi tła.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_4.1_4_3.F24.FGColour',
					description: 'Sprawdź, czy kolor tła lub obrazka w tle odpowiada pod względem wymagań kontrastu kolorowi tekstu.'
				},
				{
					name: 'WCAG2A.Principle2.Guideline2_1.2_1_1.SCR20.DblClick',
					description: 'Funkcjonalność zapewniona przez dwukrotne kliknięce przyciskiem myszy, powinna być dostępna również przez klawiaturę.'
				},
				{
					name: 'WCAG2A.Principle2.Guideline2_1.2_1_1.SCR20.MouseOver',
					description: 'Funkcjonalność zapewniona przez najechanie kursorem myszy na element, powinna być dostępna również przez klawiaturę.'
				},
				{
					name: 'WCAG2A.Principle2.Guideline2_1.2_1_1.SCR20.MouseOut',
					description: 'Funkcjonalność zapewniona przez opuszczenie elementu kursorem myszy, powinna być dostępna również przez klawiaturę.'
				},
				{
					name: 'WCAG2A.Principle2.Guideline2_1.2_1_1.SCR20.MouseMove',
					description: 'Funkcjonalność zapewniona z wykorzystaniem ruchów myszą, powinna być dostępna również przez klawiaturę.'
				},
				{
					name: 'WCAG2A.Principle2.Guideline2_1.2_1_1.SCR20.MouseDown',
					description: 'Funkcjonalność zapewniona przez wciśnięciu przycisku myszy, powinna być dostępna również przez klawiaturę.'
				},
				{
					name: 'WCAG2A.Principle2.Guideline2_1.2_1_1.SCR20.MouseUp',
					description: 'Funkcjonalność zapewniona przez zwolnieniu przycisku myszy, powinna być dostępna również przez klawiaturę.'
				},
				{
					name: 'WCAG2A.Principle2.Guideline2_1.2_1_2.F10',
					description: 'Sprawdź, czy dodatek lub applet pozwalają na uwolnienie fokusu, jeśli przejdzie on do tych funkcjonalności.'
				},
				{
					name: 'WCAG2A.1.Principle1.Guideline2_1.2_1_4.Check',
					description: 'Sprawdź, czy jeśli skrót klawiaturowy jest zaimplementowany w treści przy użyciu tylko znaków literowych (w tym wielkich i małych liter), znaków interpunkcyjnych, cyfr lub symboli, to prawdziwa jest co najmniej jedna z tych sytuacji: \nWyłączanie: Istnieje mechanizm wyłączania skrótu;\nMapowanie: Istnieje mechanizm zmiany mapowania skrótu w celu użycia jednego lub więcej niedrukowalnych znaków klawiatury (np. Ctrl, Alt, itp.);\nAktywny tylko, gdy ma fokus: Skrót klawiaturowy dla komponentu interfejsu użytkownika jest aktywny tylko wtedy, gdy ten komponent ma fokus.'
				},
				{
					name: 'WCAG2A.Principle2.Guideline2_2.2_2_1.F40.2',
					description: 'Znacznik meta z atrybutem redirect przekierowuje na inną stronę w czesie określonym jako 0. Użytkownicy nie mają kontroli w takim krótkim czasie.'
				},
				{
					name: 'WCAG2A.Principle2.Guideline2_2.2_2_1.F41.2',
					description: 'Znacznik meta z atrybutem refresh odświeża aktualną stronę. Użytkownicy nie mają kontroli nad tym odświeżaniem.'
				},
				{
					name: 'WCAG2A.Principle2.Guideline2_2.2_2_2.SCR33,SCR22,G187,G152,G186,G191',
					description: 'Jeśli na stronie znajduje się element, który porusza się, przewija lub mruga dłużej niż 5 sekund lub jest automatycznie aktualizowany, musi istnieć mechanizm, który umożliwia zatrzymanie tego efektu lub ukrycie treści.'
				},
				{
					name: 'WCAG2A.Principle2.Guideline2_2.2_2_2.F4',
					description: 'Jeśli ten element miga dłużej niż 5 sekund, sprawdź, czy istnieje mechanizm, który umożliwi zatrzymanie migania lub ukrycie elementu.'
				},
				{
					name: 'WCAG2A.Principle2.Guideline2_2.2_2_2.F47',
					description: 'Elementu blink nie spełnia wymagania, zgodnie z którym miganie można zatrzymać lub ukryć, gdy trwa dłużej niż 5 sekund.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline2_2.2_2_6.Check',
					description: 'Sprawdź, czy użytkownicy są ostrzegani o czasie trwania każdej bezczynności użytkownika, która może spowodować utratę danych, chyba że dane są przechowywane przez ponad 20 godzin, gdy użytkownik nie podejmuje żadnych działań.'
				},
				{
					name: 'WCAG2A.Principle2.Guideline2_3.2_3_1.G19,G176',
					description: 'Elementy strony nie mogą błyskać częściej niż trzy razy w ciągu 1 sekundy lub obszar migający musi mieć bezpieczny rozmiar.'
				},
				{
					name: 'WCAG2A.Principle2.Guideline2_4.2_4_1.H64.1',
					description: 'Element iframe musi mieć tytuł. Wypełnij atrybut title i umieść w nim opis ramki.'
				},
				{
					name: 'WCAG2A.Principle2.Guideline2_4.2_4_1.H64.2',
					description: 'Sprawdź, czy atrybut title elementu iframe ma tekst, który dokładnie określa treść ramki.'
				},
				{
					name: 'WCAG2A.Principle2.Guideline2_4.2_4_1.G1,G123,G124,H69',
					description: 'Sprawdź, czy użytkownik może pominąć powtarzającą się nawigację. Można to zapewnić przez użycie łączy pomijających, nagłówków lub punktów orientacyjnych.'
				},
				{
					name: 'WCAG2A.Principle2.Guideline2_4.2_4_1.G1,G123,G124.NoSuchId',
					description: 'Ten link wskazuje identyfikator "[link target]", ale takiego identyfikatora w dokumencie nie ma.'
				},
				{
					name: 'WCAG2A.Principle2.Guideline2_4.2_4_1.G1,G123,G124.NoSuchIdFragment2.4.2',
					description: 'Ten link wskazuje identyfikator "[link target]" w dokumencie, ale takiego identyfikatora w testowanym obszarze nie ma.'
				},
				{
					name: 'WCAG2A.Principle2.Guideline2_4.2_4_2.H25.1.NoTitleEl',
					description: 'Strona nie ma tytułu. Należy dodać do sekcji nagłówkowej strony element title lub wypełnić jego treść.'
				},
				{
					name: 'WCAG2A.Principle2.Guideline2_4.2_4_2.H25.1.EmptyTitle',
					description: 'Element title w sekcji nagłówkowej strony nie może być pusty. Musi mieć treść.'
				},
				{
					name: 'WCAG2A.Principle2.Guideline2_4.2_4_2.H25.2',
					description: 'Sprawdź, czy tekst w elemencie title w sekcji nagłówkowej strony dokładnie opisuje treść strony.'
				},
				{
					name: 'WCAG2A.Principle2.Guideline2_4.2_4_3.H4.2',
					description: 'Jeśli został użyte dodatnie wartości atrybutu tabindex, sprawdź, czy podczas nawigacji sekwencyjnej tabulatorem relacje i następstwo treści są zrozumiałe dla użytkownika.'
				},
				{
					name: 'WCAG2A.Principle2.Guideline2_4.2_4_4.H77,H78,H79,H80,H81,H33',
					description: 'Sprawdź, czy tekst linku wraz z programowo określonym kontekstem linku lub treścią w atrybucie title pozwala zrozumieć jego cel lub funkcję.'
				},
				{
					name: 'WCAG2A.Principle2.Guideline2_4.2_4_4.H77,H78,H79,H80,H81',
					description: 'Sprawdź, czy treść linku wraz z programowo określonym kontekstem linku, pozwala na zrozumienie jego celu lub funkcji. Kontekst określony programowo: treść w tym samym akapicie lub tym samym elemencie listy lub w tej samej komórce tabeli, co link, albo w jej nagłówku.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline2_5.2_5_1.Check',
					description: 'Sprawdź, czy wszystkie funkcje wykorzystujące do obsługi gesty wielopunktowe lub oparte na ścieżce można obsługiwać za pomocą pojedynczego wskazania bez gestu opartego na ścieżce, chyba że gest wielopunktowy lub oparty na ścieżce jest niezbędny.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline2_5.2_5_2.SinglePointer_Check',
					description: 'Sprawdź, czy dla funkcjonalności, które mogą być obsługiwane za pomocą pomocą pojedynczego wskazania, przynajmniej jedno z poniższych jest prawdziwe: \nBrak zdarzenia: Dotyk wskaźnikiem lub naciskanie nie wywołuje jakiejkolwiek części zdarzenia; \nPrzerwanie lub cofnięcie: Zdarzenie jest zależne od zwolnienia dotyku lub nacisku i istnieje mechanizm, którym można je przerwać lub cofnąć po zwolnieniu dotyku lub nacisku; \nOdwrócenie zdarzenia: Zwolnienie dotyku lub nacisku cofa wywołane zdarzenie i przywraca stan sprzed zdarzenia; \nIstotne: Dotyk wskaźnikiem lub naciskanie jest niezbędne do wywołania zdarzenia.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline2_5.2_5_2.Mousedown_Check',
					description: 'Ten element nasłuchuje zdarzeń mousedown (naciśniecie wskaźnika myszy). Sprawdź, czy dla funkcjonalności, które mogą być obsługiwane za pomocą pojedynczego wskazania, przynajmniej jedno z poniższych jest prawdziwe: \nBrak zdarzenia: Dotyk wskaźnikiem lub naciskanie nie wywołuje jakiejkolwiek części zdarzenia; \nPrzerwanie lub cofnięcie: Zdarzenie jest zależne od zwolnienia dotyku lub nacisku i istnieje mechanizm, którym można je przerwać lub cofnąć po zwolnieniu dotyku lub nacisku; \nOdwrócenie zdarzenia: Zwolnienie dotyku lub nacisku cofa wywołane zdarzenie i przywraca stan sprzed zdarzenia; \nIstotne: Dotyk wskaźnikiem lub naciskanie jest niezbędne do wywołania zdarzenia.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline2_5.2_5_2.Touchstart_Check',
					description: 'Ten element nasłuchuje zdarzeń touchstart. Sprawdź, czy dla funkcjonalności, które mogą być obsługiwane za pomocą pojedynczego wskazania, przynajmniej jedno z poniższych jest prawdziwe: \nBrak zdarzenia: Dotyk wskaźnikiem lub naciskanie nie wywołuje jakiejkolwiek części zdarzenia; \nPrzerwanie lub cofnięcie: Zdarzenie jest zależne od zwolnienia dotyku lub nacisku i istnieje mechanizm, którym można je przerwać lub cofnąć po zwolnieniu dotyku lub nacisku; \nOdwrócenie zdarzenia: Zwolnienie dotyku lub nacisku cofa wywołane zdarzenie i przywraca stan sprzed zdarzenia; \nIstotne: Dotyk wskaźnikiem lub naciskanie jest niezbędne do wywołania zdarzenia.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline2_5.2_5_3_F96.Check',
					description: 'Sprawdź, czy dla komponentów interfejsu użytkownika z etykietami, które zawierają tekst lub obrazy tekstu, nazwa zawiera tekst, który jest prezentowany na ekranie.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline2_5.2_5_3_F96.AccessibleName',
					description: 'Dostępna nazwa tego elementu nie zawiera widocznego tekstu etykiety. Sprawdź, czy dla komponentów interfejsu użytkownika z etykietami, które zawierają tekst lub obrazy tekstu, nazwa zawiera tekst, który jest prezentowany na ekranie.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline2_5.2_5_4.Check',
					description: 'Sprawdź, czy funkcjonalności, które mogą być obsługiwane przez ruch urządzenia lub ruch użytkownika, mogą być również obsługiwane przez elementy interfejsu użytkownika, a reagowanie na ruch może być wyłączone, aby zapobiec przypadkowemu uruchomieniu, z wyjątkiem sytuacji, gdy: \nObsługiwany interfejs: Ruch służy do obsługi funkcjonalności poprzez interfejs obsługiwany przez dostępność; \nIstotny: Ruch jest niezbędny dla funkcjonalności, a jego brak skutkowałoby anulowaniem działania.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline2_5.2_5_4.Devicemotion',
					description: 'Ten element ma nasłuchiwanie zdarzeń devicemotion (ruch urządzenia). Sprawdź, czy funkcjonalności, które mogą być obsługiwane przez ruch urządzenia lub ruch użytkownika, mogą być również obsługiwane przez elementy interfejsu użytkownika, a reagowanie na ruch może być wyłączone, aby zapobiec przypadkowemu uruchomieniu, z wyjątkiem sytuacji, gdy: \nObsługiwany interfejs: Ruch służy do obsługi funkcjonalności poprzez interfejs obsługiwany przez dostępność; \nIstotny: Ruch jest niezbędny dla funkcjonalności, a jego brak skutkowałoby anulowaniem działania.'
				},
				{
					name: 'WCAG2A.Principle3.Guideline3_1.3_1_1.H57.2',
					description: 'Znacznik html musi mieć atrybut lang, który określa język strony.'
				},
				{
					name: 'WCAG2A.Principle3.Guideline3_1.3_1_1.H57.3.Lang',
					description: 'Język określony w atrybucie lang nie wydaje się poprawnie sformatowany. Sprawdź w https://datatracker.ietf.org/doc/html/rfc5646'
				},
				{
					name: 'WCAG2A.Principle3.Guideline3_1.3_1_1.H57.3.XmlLang',
					description: 'Język określony w atrybucie "xml:lang" nie wydaje się poprawnie sformatowany. Sprawdź w https://datatracker.ietf.org/doc/html/rfc5646'
				},
				{
					name: 'WCAG2A.Principle3.Guideline3_2.3_2_1.G107',
					description: 'Sprawdź, czy po przenieseniu fokusu na dany element formularza nie następuje zaskakująca dla użytkownika zmiana kontekstu (np. przeniesienie na inną stronę).'
				},
				{
					name: 'WCAG2A.Principle3.Guideline3_2.3_2_2.H32.2',
					description: 'Formularz nie ma przycisku przesyłania (input type="submit", input type="image" albo button type="submit").'
				},
				{
					name: 'WCAG2A.Principle3.Guideline3_3.3_3_1.G83,G84,G85',
					description: 'Jeśli przy wpisywaniu informacji, błąd zostanie wykryty automatycznie, system powinien wskazać błędny element, a użytkownik otrzymać opis błędu w postaci tekstu.'
				},
				{
					name: 'WCAG2A.Principle3.Guideline3_3.3_3_2.G131,G89,G184,H90',
					description: 'Sprawdź, czy etykiety lub instrukcje kontrolek przeznaczonych na wprowadzenie danych przez użytkownika (w tym wymaganych) mają zrozumiałe objaśnienia i wskazówki. '
				},
				{
					name: 'WCAG2A.Principle4.Guideline4_1.4_1_1.F77',
					description: 'Znaleziono powtórzoną wartość atrybutu "[Element ID]". Dopuszczalne jest jedno wystąpienie wartości identyfikatora.'
				},
				{
					name: 'WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.Empty',
					description: 'Link ma atrybut id, nie ma jednak ani adresu w atrybucie href ani treści. Rozważ przeniesienie identyfikatora do elementu nadrzędnego.'
				},
				{
					name: 'WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.EmptyWithName',
					description: 'Link ma atrybut name, ale nie ma ani adresu, ani treści. Rozważ przeniesienie wartości atrybutu name do identyfikatora elementu nadrzędnego jako id.'
				},
				{
					name: 'WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.EmptyNoId',
					description: 'Link nie ma treści, ani nazwy, ani identyfikatora.'
				},
				{
					name: 'WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.NoHref',
					description: 'Link nie powinien być używany do tworzenia wewnętrznych odniesień na stronie. Jeśli identyfikator jest używany do stylów CSS lub oskryptowania JS, rozważ przeniesienie identyfikatora od elementu nadrzędnego (rodzica).'
				},
				{
					name: 'WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.Placeholder',
					description: 'Link ma jedynie treść. Brakuje adresu w atrybucie href, identyfikatora lub nazwy (atrybutu name).'
				},
				{
					name: 'WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.NoContent',
					description: 'Link ma prawidłowy adres w atrybucie href, ale nie ma treści linku.'
				},
				{
					name: 'WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.[NodeName].Name',
					description: 'Ten /[element type/] nie ma nazwy dostępnej dla API dostępności. Prawidłowe nazwy to /[valid names for this element/].'
				},
				{
					name: 'WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.[NodeName].Value',
					description: 'Ten /[element type/] nie ma wartości dostępnej dla API dostępności. Dodaj ją /[using a element-specific method/].'
				},	
			]
		},
		{
			title: 'WCAG2AA',
			rules: [
				{
					name: 'WCAG2AA.Principle1.Guideline1_1.1_1_1.H30.2',
					description: 'Grafika jest jedyną treścią linku i powinna zostać uzupełniona o tekst alternatywny przedstawiający jego cel.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_1.1_1_1.H37',
					description: 'Element img nie ma atrybutu alt. Dodaj ten atrybut i wpisz do niego krótki opis grafiki.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_1.1_1_1.H67.1',
					description: 'Grafika pełni funkcję dekoracyjną, więc zarówno atrybut alt, jak i title powinny być puste.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_1.1_1_1.H67.2',
					description: 'Grafika jest oznaczona jako dekoracyjna i będzie ignorowana przez technologie wspomagające np. czytniki ekranu.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_1.1_1_1.G94.Image',
					description: 'Sprawdź, czy opis alternatywny grafiki przekazuje tę samą informację, co grafika.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_1.1_1_1.H36',
					description: 'Przycisk graficzny nie ma atrybutu alt. Dodaj alt i opisz w nim funkcję przycisku.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_1.1_1_1.G94.Button',
					description: 'Sprawdź, czy tekst alternatywny przycisku prawidłowo opisuje funkcję przycisku.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_1.1_1_1.H24',
					description: 'Element area w graficznej mapie odsyłaczy nie ma atrybutu alt. Każdy taki obszar powinien mieć atrybut alt z tekstem alternatywnym, który odpowiednio opisuje dany obszar.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_1.1_1_1.H24.2',
					description: 'Sprawdź, czy tekst alternatywny elementu area odpowiada jego funkcji lub treści.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_1.1_1_1.G73,G74',
					description: 'Jeśli krótki tekst alternatywny nie opisuje wystarczająco treści przekazywanej przez grafikę, dodaj rozszerzony opis bezpośrednio na stronie lub na oddzielnej stronie.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_1.1_1_1.H2.EG5',
					description: 'Tekst alternatywny elementu img umieszczonego wewnątrz linku, nie może być taki sam jak tekst samego linku.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_1.1_1_1.H2.EG4',
					description: 'Element img znajdujący się wewnątrz linku nie ma atrybutu alt lub alt jest pusty. Ponieważ w sąsiedztwie znajduje się tekst linku, zaleca się połączenie tych elementów w jedno łącze ze wspólnym opisem.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_1.1_1_1.H2.EG3',
					description: 'Element img znajdujący się wewnątrz linku nie może mieć opisu alternatywnego tej samej treści, co tekst linku znajdujący się w jego sąsiedztwie.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_1.1_1_1.H53',
					description: 'Element object musi mieć atrybut alt z niepustym opisem alternatywnym, o ile nie został zapewniony żaden inny alternatywny opis tego elementu.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_1.1_1_1.G94,G92.Object',
					description: 'Sprawdź, czy dla wszystkich elementów nietekstowych istnieją krótkie lub długie opisy alternatywne i możliwie najdokładniej je opisują.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_1.1_1_1.H35.3',
					description: 'Applet powinien mieć opis alternatywny wewnątrz znaczników object. Zapewni to alternatywę w przeglądarkach, które nie obsługują elementu applet.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_1.1_1_1.H35.2',
					description: 'Applet powinien mieć opis alternatywny w atrybucie alt, aby zapewnić wsparcie w przypadku problemów z załadowaniem treści.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_1.1_1_1.G94,G92.Applet',
					description: 'Sprawdź, czy dla wszystkich elementów nietekstowych istnieją krótkie lub długie opisy alternatywne i możliwie najdokładniej je opisują.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_2.1_2_1.G158',
					description: 'Jeśli nagranie tylko dźwięk osadzone na stronie nie jest alternatywą dla tekstu, czy istnieje do niego alternatywa tekstowa.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_2.1_2_1.G159,G166',
					description: 'Jeśli obiekt wideo (bez dźwięku) osadzony na stronie nie jest alternatywą dla tekstu, sprawdź, czy istnieje do niego alternatywa tekstowa lub ścieżka dźwiękowa prezentująca tę samą treść.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_2.1_2_2.G87,G93',
					description: 'Jeśli obiekt wideo ze ścieżką audio osadzony na stronie nie jest alternatywą dla tekstu, sprawdź, czy ma napisy dla niesłyszących.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_2.1_2_4.G9,G87,G93',
					description: 'Sprawdź, czy osadzony na stronie obiekt, który zawiera zsynchronizowane media prezentowane na żywo ma napisy dla niesłyszących.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_2.1_2_5.G78,G173,G8',
					description: 'Sprawdź, czy osadzony na stronie obiekt, który zawiera zsynchronizowane media, ma dołączoną audiodeskrypcję treści wizualnych.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H42.2',
					description: 'Nagłówek nie ma treści. Tekst, który nie ma funkcji nagłówka nie powinien być oznaczony znacznikami do określania nagłówków.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H93',
					description: 'Wiele elementów label ma taki sam atrybut for. Jeśli te etykiety odnoszą się do różnych kontrolek formularza, kontrolki powinny mieć unikalne atrybuty id.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H44.NonExistent',
					description: 'Atrybut for elementu label zawiera identyfikator pola, które nie istnieje na stronie.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H44.NonExistentFragment',
					description: 'Atrybut for elementu label zawiera identyfikator pola, które nie istnieje w tym obszarze strony.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H44.NotFormControl',
					description: 'Atrybut for elementu label zawiera identyfikator, który jest przypisany do elementu niebędącego kontrolką formularza. Sprawdź, czy identyfikator został umieszczony w odpowiednim znaczniku.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H44.NoForAttr',
					description: 'Element label nie ma atrybutu for. Sprawdź, czy jest jednoznacznie powiązany z kontrolką formularza (czy otacza pole formularza).'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H44.NoId',
					description: 'Kontrolka formularza nie ma atrybutu id, dlatego nie może mieć jawnej etykiety (powiązanej atrybutem for).'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H65.3',
					description: 'Kontrolka formularza bez etykiety ma pusty atrybut title. Atrybut title powinien określać przeznaczenie kontrolki.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H65',
					description: 'Kontrolka formularza ma atrybut title bez treści lub z samymi spacjami. Taki title nie będzie uwzględniany jako prawidłowa etykieta.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H44.2',
					description: 'Kontrolka formularza nie ma jawnego atrybutu label lub title, który określa przeznaczenie kontrolki.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H44.NoLabelAllowed',
					description: 'Element label nie powinien być stosowany w tego typu kontrolce formularza.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H44.1.After',
					description: 'Element label dla tej kontrolki powinien być umieszczony za tą kontrolką.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H44.1.Before',
					description: 'Element label dla tej kontrolki powinien być umieszczony przed tą kontrolką.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H49.Semantic',
					description: 'Do oznaczenia tekstu wyróżnionego lub specjalnego powinien zostać użyty odpowiedni znacznik semantyczny, aby można je było określić programowo.'
				},						
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H49.[NodeName]',
					description: 'Do oznaczenia tekstu wyróżnionego lub specjalnego powinien zostać użyty odpowiedni znacznik semantyczny, aby można je było określić programowo.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H49.AlignAttr',
					description: 'Do oznaczenia tekstu wyróżnionego lub specjalnego powinien zostać użyty odpowiedni znacznik. Atrybut align użyty w innych przypadkach niż w celu wyrównania danych w komórkach tabeli jest przestarzały. Użyj arkuszy stylów CSS.'					
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.AlignAttr.Semantic',
					description: 'Do oznaczenia tekstu wyróżnionego lub specjalnego powinien zostać użyty odpowiedni znacznik. Atrybut align użyty w innych przypadkach niż w celu wyrównania danych w komórkach tabeli jest przestarzały. Użyj arkuszy stylów CSS.'
				},				
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H42',
					description: 'Jeśli ten fragment treści miał być nagłówkiem, powinny zostać użyte znaczniki nagłówków (h1 – h6).'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H63.3',
					description: 'W komórce tabeli użyto niewłaściwy atrybut scope. Dopuszczalne atrybuty to: row, col, rowgroup i colgroup.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H63.2',
					description: 'Atrybuty scope używane dla komórek tabeli (td), aby oznaczyć nagłówek, są przestarzałe w HTML5. Zaleca się skorzystanie ze znacznika th.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H43.ScopeAmbiguous',
					description: 'Użycie atrybutów scope dla elementu th jest niejasne w tabeli z wieloma nagłówkami. Zaleca się użycie atrybutu headers w znaczniku td.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H43.IncorrectAttr',
					description: 'Nieprawidłowy atrybut nagłówka w elemencie td. Oczekiwany "[expected headers]", ale znaleziono "[actual headers]"'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H43.HeadersRequired',
					description: 'Nie zdefiniowano relacji pomiędzy komórką td a powiązanym z nią nagłówkiem th. Wskazana tabela ma wiele poziomów th, więc należałoby użyć w komórkach td atrybutu headers.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H43.MissingHeaderIds',
					description: 'Nie wszystkie nagłówki th w tej tabeli mają atrybut id i nie będzie się można do nich odwołać za pomocą atrybutu headers w znacznikach td.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H43.MissingHeadersAttrs',
					description: 'Nie wszystkie komórki td w tej tabeli mają atrybut headers. W atrybucie headers powinny znajdować się identyfikatory powiązanych nagłówków.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H43,H63',
					description: 'Komórki td nie mają ustalonej relacji z komórkami nagłówkowymi th. Należy zdefiniować atrybut scope dla th lub headers dla td.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H63.1',
					description: 'Nie wszystkie komórki th w tej tabeli mają atrybut scope. Ten atrybut pozwala powiązać nagłówki th z odpowiednimi komórkami td.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H39,H73.4',
					description: 'Jeśli tabela zawiera treści i zastosowano w niej atrybut summary oraz znacznik caption, to treści tego atrybutu i znacznika nie mogą być powielone.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H73.3.Check',
					description: 'Jeśli ta tabela zawiera dane, sprawdź, czy atrybut summary opisuje układ tabeli oraz wyjaśnia, jak jej użyć.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H73.3.NoSummary',
					description: 'Jeśli ta tabela zawiera dane, rozważ użycie atrybutu aria-describedby albo starszego summary, aby opisać układ tabeli i wyjaśnić, jak jej użyć.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H39.3.Check',
					description: 'Jeśli ta tabela zawiera dane, sprawdź, czy treść podpisu w caption odpowiednio je opisuje.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H39.3.NoCaption',
					description: 'Jeśli ta tabela zawiera dane, powinna być uzupełniona o podpis w znaczniku caption.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H71.3',
					description: 'Element fieldset nie ma opisu w postaci elementu legend. Wszystkim elementom fieldset powinny towarzyszyć opisy w elementach legend.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H71.NoLegend',
					description: 'Element fieldset nie ma opisu w postaci elementu legend. Wszystkim elementom fieldset powinny towarzyszyć opisy w elementach legend.'
				},					
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H85.2',
					description: 'Jeśli elmenty listy wyboru stanowią grupę, powinny być zgrupowane elementem optgroup.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H71.2',
					description: 'Pola opcji (radio) lub pola wyboru (checkobx) z tym samym atrybutem name muszą być umieszczone w elemencie fieldset.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H71.SameName',
					description: 'Pola opcji (radio) lub pola wyboru (checkobx) z tym samym atrybutem name muszą być umieszczone w elemencie fieldset.'
				},	
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H48.1',
					description: 'Treść przypomina z wyglądu listę nieuporządkowaną. Jeśli jest to lista nieuporządkowana, powinna być oznaczona odpowiednimi znacznikami ul.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H48.2',
					description: 'Treść przypomina z wyglądu listę uporządkowaną. Jeśli jest to lista uporządkowana, powinna być oznaczona odpowiednimi znacznikami ol.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.G141',
					description: 'Nagłówki nie są zagnieżdżone logicznie. Ten element [heading] (powinien być elementem [correct heading], aby był prawidłowo zagnieżdżony. (Wydaje się być głównym nagłówkiem dokumentu, więc powinien być elementem h1).'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H48',
					description: 'Jeśli ten element zawiera nawigację, zaleca się, aby został oznaczony jako lista np. przy użyciu listy nieuporządkowanej ul.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_2.G57',
					description: 'Struktura i ułożenie elementów powinny oddawać sens strony i informacji. Sprawdź, czy treść jest uporządkowana w sensownej kolejności po linearyzacji, na przykład po wyłączeniu arkuszy stylów.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_3.G96',
					description: 'Sprawdź, czy przekazane instrukcje opierają się także na innych właściwościach niż tylko na cechach postrzegalnych przez zmysły, takich jak kształt, wielkość czy położenie.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_4.RestrictView',
					description: 'Sprawdź, czy treść nie ogranicza widoku i działania do jednej orientacji wyświetlania, takiej jak pionowa lub pozioma, chyba że określona orientacja wyświetlania jest niezbędna'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_5_H98.FaultyValue',
					description: 'Ten element ma prawdopodobnie błędną wartość w swoim atrybucie autocomplete.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_5_H98.InvalidAutocomplete_Text',
					description: 'Niepoprawna wartość autocomplete. Element nie należy do grupy kontrolki Tekst.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_5_H98.InvalidAutocomplete_Multiline',
					description: 'Niepoprawna wartość autocomplete. Element nie należy do grupy kontrolki Wielowierszowe.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_5_H98.InvalidAutocomplete_Password',
					description: 'Niepoprawna wartość autocomplete. Element nie należy do grupy kontrolki Hasło.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_5_H98.InvalidAutocomplete_Url',
					description: 'Niepoprawna wartość autocomplete. Element nie należy do grupy kontrolki Url.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_5_H98.InvalidAutocomplete_Telephone',
					description: 'Niepoprawna wartość autocomplete. Element nie należy do grupy kontrolki Telefon.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_5_H98.InvalidAutocomplete_Numeric',
					description: 'Niepoprawna wartość autocomplete. Element nie należy do grupy kontrolki Liczba.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_5_H98.InvalidAutocomplete_Month',
					description: 'Niepoprawna wartość autocomplete. Element nie należy do grupy kontrolki Miesiąc.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_5_H98.InvalidAutocomplete_Date',
					description: 'Niepoprawna wartość autocomplete. Element nie należy do grupy kontrolki Data.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_5_H98.Purpose',
					description: 'Sprawdź, czy pole wprowadzania danych służy celowi określonemu w sekcji Przeznaczenie pól danych w komponentach interfejsu użytkowników (zobacz WCAG 2.1); oraz czy treeść jest zaimplementowana przy użyciu technologii z obsługą określania oczekiwanego znaczenia dla danych wejściowych formularza.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_5_H98.MissingAutocomplete',
					description: 'Ten element nie ma atrybutu autocomplete. Jeśli to pole zbiera informacje o użytkowniku, rozważ jego dodanie, aby spełnić to kryterium sukcesu.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_4.1_4_1.G14,G182',
					description: 'Sprawdź, czy informacje przekazane za pomocą koloru są przedstawione także w inny alternatywny sposób, np. opisane tekstem.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_4.1_4_2.F23',
					description: 'Jeżeli materiał audio włączany jest automatycznie i trwa dłużej niż trzy sekundy, należy umożliwić zatrzymanie bądź wyciszenie odtwarzania.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail',
					description: 'Ten element ma niewystarczający kontrast na tym poziomie zgodności. Oczekiwano współczynnika kontrastu co najmniej 4.5:1, ale tekst w tym elemencie ma współczynnik kontrastu /{value/}. Zalecenie: /{colour recommendations/}.'
				},		
				{
					name: 'WCAG2AA.Principle1.Guideline1_4.1_4_3.G145',
					description: 'Ten element ma niewystarczający kontrast na tym poziomie zgodności. Oczekiwano współczynnika kontrastu co najmniej 3:1, ale tekst w tym elemencie ma współczynnik kontrastu /{value/}. Zalecenie: /{colour recommendations/}.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_4.1_4_3.G18',
					description: 'Tekst elementu wyświetlany jest na obrazku. Sprawdź, czy współczynnik kontrastu między tekstem a tłem wynosi co najmniej 4.5:1.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_4.1_4_3.G145-1',
					description: 'Tekst elementu wyświetlany jest na obrazku. Sprawdź, czy współczynnik kontrastu między tekstem a tłem wynosi co najmniej 3:1.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_4.1_4_3.F24.BGColour',
					description: 'Sprawdź, czy kolor tekstu odpowiada pod względem wymagań kontrastu kolorowi lub obrazkowi tła.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_4.1_4_3.F24.FGColour',
					description: 'Sprawdź, czy kolor tła lub obrazka w tle odpowiada pod względem wymagań kontrastu kolorowi tekstu.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_4.1_4_4.G142',
					description: 'Sprawdź, czy tekst na stronie może być powiększony do 200% bez użycia technologii wspomagających.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_4.1_4_5.G140,C22,C30.AALevel',
					description: 'Sprawdź, czy stosowane technologie pozwalają na użycie tekstu w graficznej formie. Treść powinna być przekazana w formie tekstu, chyba że graficzna forma tekstu jest istotna z punktu widzenia samej informacji, która jest przekazywana.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_4.1_4_10_C32,C31,C33,C38,SCR34,G206.Check',
					description: 'Sprawdź, czy treść może być prezentowana bez utraty informacji lub funkcjonalności oraz bez konieczności przewijania w dwóch wymiarach dla: \nTreści przewijanej pionowo przy szerokości równoważnej 320 pikselom CSS; \nTreści przewijanej poziomo przy wysokości równoważnej 256 pikselom CSS; \nZ wyjątkiem części treści, które wymagają układu dwuwymiarowego ze względu na sposób korzystania lub znaczenie.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_4.1_4_10_C32,C31,C33,C38,SCR34,G206.Fixed',
					description: 'Ten element ma "position: fixed". Może to wymagać przewijania w dwóch wymiarach, co jest uznawane za niespełninie tego kryterium sukcesu.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_4.1_4_10_C32,C31,C33,C38,SCR34,G206.Scrolling',
					description: 'Tekst wstępnie sformatowany może wymagać przewijania w dwóch wymiarach, co jest uznawane za niespełninie tego kryterium sukcesu.'
				},				
				{
					name: 'WCAG2AAA.Principle1.Guideline1_4.1_4_10_C32,C31,C33,C38,SCR34,G206.Zoom',
					description: 'Zakłócanie możliwości powiększania przez program użytkownika może być niespełniniem tego kryterium sukcesu.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_4.1_4_11_G195,G207,G18,G145,G174,F78.Check',
					description: 'Sprawdź, czy wizualna prezentacja poniższych elementów ma współczynnik kontrastu co najmniej 3:1 w stosunku do sąsiadującego koloru(ów): \nKomponenty interfejsu użytkownika: Informacje wizualne wymagane do identyfikacji komponentów i stanów interfejsu użytkownika, z wyjątkiem komponentów nieaktywnych lub gdy wygląd komponentu jest określany przez program użytkownika i nie jest modyfikowany przez autora; \nObiekty graficzne: Części grafiki wymagane do zrozumienia treści, z wyjątkiem sytuacji, gdy szczególna prezentacja grafiki jest niezbędna do przekazania informacji.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_4.1_4_12_C36,C35.Check',
					description: 'Sprawdź, czy nie nastąpi utrata treści lub funkcjonalności, ustawiając wszystkie poniższe elementy i nie zmieniając żadnej innej właściwości stylu: \nWysokość wiersza (odstęp między wierszami) co najmniej 1,5-krotność rozmiaru czcionki; \nOdstępy między akapitami - co najmniej 2-krotność rozmiaru czcionki; \nOdstępy między literami (tracking) - co najmniej 0,12-krotność rozmiaru czcionki; \nOdstępy między wyrazami - co najmniej 0,16 rozmiaru czcionki.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_4.1_4_13_F95.Check',
					description: 'Sprawdź, czy w przypadku, gdy otrzymanie, a następnie usunięcie najechania wskaźnikiem lub fokusu klawiatury powoduje, że dodatkowa treść staje się widoczna, a następnie ukryta, następujące stwierdzenia są prawdziwe: \nOdrzucone: Istnieje mechanizm umożliwiający odrzucenie dodatkowej treści bez przesuwania wskaźnika myszy lub fokusu klawiatury, chyba że dodatkowa treść przekazuje błąd wprowadzanych danych lub nie przesłania ani nie zastępuje innej treści; \nWskazywane: Jeśli wskaźnik myszy (hover) może wyzwolić dodatkową treść, wówczas wskaźnik może zostać przeniesiony na dodatkową treść bez znikania dodatkowej treści; \nTrwałe: Dodatkowa treść pozostaje widoczna do momentu usunięcia wyzwalacza aktywacji lub fokusu, użytkownik odrzuca go lub jego informacje nie są już ważne.'
				},
				{
					name: 'WCAG2AA.Principle2.Guideline2_1.2_1_1.SCR20.DblClick',
					description: 'Funkcjonalność zapewniona przez dwukrotne kliknięce przyciskiem myszy, powinna być dostępna również przez klawiaturę.'
				},
				{
					name: 'WCAG2AA.Principle2.Guideline2_1.2_1_1.SCR20.MouseOver',
					description: 'Funkcjonalność zapewniona przez najechanie kursorem myszy na element, powinna być dostępna również przez klawiaturę.'
				},
				{
					name: 'WCAG2AA.Principle2.Guideline2_1.2_1_1.SCR20.MouseOut',
					description: 'Funkcjonalność zapewniona przez opuszczenie elementu kursorem myszy, powinna być dostępna również przez klawiaturę.'
				},
				{
					name: 'WCAG2AA.Principle2.Guideline2_1.2_1_1.SCR20.MouseMove',
					description: 'Funkcjonalność zapewniona z wykorzystaniem ruchów myszą, powinna być dostępna również przez klawiaturę.'
				},
				{
					name: 'WCAG2AA.Principle2.Guideline2_1.2_1_1.SCR20.MouseDown',
					description: 'Funkcjonalność zapewniona przez wciśnięciu przycisku myszy, powinna być dostępna również przez klawiaturę.'
				},
				{
					name: 'WCAG2AA.Principle2.Guideline2_1.2_1_1.SCR20.MouseUp',
					description: 'Funkcjonalność zapewniona przez zwolnieniu przycisku myszy, powinna być dostępna również przez klawiaturę.'
				},
				{
					name: 'WCAG2AA.Principle2.Guideline2_1.2_1_2.F10',
					description: 'Sprawdź, czy dodatek lub applet pozwalają na uwolnienie fokusu, jeśli przejdzie on do tych funkcjonalności.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline2_1.2_1_4.Check',
					description: 'Sprawdź, czy jeśli skrót klawiaturowy jest zaimplementowany w treści przy użyciu tylko znaków literowych (w tym wielkich i małych liter), znaków interpunkcyjnych, cyfr lub symboli, to prawdziwa jest co najmniej jedna z tych sytuacji: \nWyłączanie: Istnieje mechanizm wyłączania skrótu;\nMapowanie: Istnieje mechanizm zmiany mapowania skrótu w celu użycia jednego lub więcej niedrukowalnych znaków klawiatury (np. Ctrl, Alt, itp.);\nAktywny tylko, gdy ma fokus: Skrót klawiaturowy dla komponentu interfejsu użytkownika jest aktywny tylko wtedy, gdy ten komponent ma fokus.'
				},
				{
					name: 'WCAG2AA.Principle2.Guideline2_2.2_2_1.F40.2',
					description: 'Znacznik meta z atrybutem redirect przekierowuje na inną stronę w czesie określonym jako 0. Użytkownicy nie mają kontroli w takim krótkim czasie.'
				},
				{
					name: 'WCAG2AA.Principle2.Guideline2_2.2_2_1.F41.2',
					description: 'Znacznik meta z atrybutem refresh odświeża aktualną stronę. Użytkownicy nie mają kontroli nad tym odświeżaniem.'
				},
				{
					name: 'WCAG2AA.Principle2.Guideline2_2.2_2_2.SCR33,SCR22,G187,G152,G186,G191',
					description: 'Jeśli na stronie znajduje się element, który porusza się, przewija lub mruga dłużej niż 5 sekund lub jest automatycznie aktualizowany, musi istnieć mechanizm, który umożliwia zatrzymanie tego efektu lub ukrycie treści.'
				},
				{
					name: 'WCAG2AA.Principle2.Guideline2_2.2_2_2.F4',
					description: 'Jeśli ten element miga dłużej niż 5 sekund, sprawdź, czy istnieje mechanizm, który umożliwi zatrzymanie migania lub ukrycie elementu.'
				},
				{
					name: 'WCAG2AA.Principle2.Guideline2_2.2_2_2.F47',
					description: 'Elementu blink nie spełnia wymagania, zgodnie z którym miganie można zatrzymać lub ukryć, gdy trwa dłużej niż 5 sekund.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline2_2.2_2_6.Check',
					description: 'Sprawdź, czy użytkownicy są ostrzegani o czasie trwania każdej bezczynności użytkownika, która może spowodować utratę danych, chyba że dane są przechowywane przez ponad 20 godzin, gdy użytkownik nie podejmuje żadnych działań.'
				},
				{
					name: 'WCAG2AA.Principle2.Guideline2_3.2_3_1.G19,G176',
					description: 'Elementy strony nie mogą błyskać częściej niż trzy razy w ciągu 1 sekundy lub obszar migający musi mieć bezpieczny rozmiar.'
				},
				{
					name: 'WCAG2AA.Principle2.Guideline2_4.2_4_1.H64.1',
					description: 'Element iframe musi mieć tytuł. Wypełnij atrybut title i umieść w nim opis ramki.'
				},
				{
					name: 'WCAG2AA.Principle2.Guideline2_4.2_4_1.H64.2',
					description: 'Sprawdź, czy atrybut title elementu iframe ma tekst, który dokładnie określa treść ramki.'
				},
				{
					name: 'WCAG2AA.Principle2.Guideline2_4.2_4_1.G1,G123,G124,H69',
					description: 'Sprawdź, czy użytkownik może pominąć powtarzającą się nawigację. Można to zapewnić przez użycie łączy pomijających, nagłówków lub punktów orientacyjnych.'
				},
				{
					name: 'WCAG2AA.Principle2.Guideline2_4.2_4_1.G1,G123,G124.NoSuchId',
					description: 'Ten link wskazuje identyfikator "[link target]", ale takiego identyfikatora w dokumencie nie ma.'
				},
				{
					name: 'WCAG2AA.Principle2.Guideline2_4.2_4_1.G1,G123,G124.NoSuchIdFragment2.4.2',
					description: 'Ten link wskazuje identyfikator "[link target]" w dokumencie, ale takiego identyfikatora w testowanym obszarze nie ma.'
				},
				{
					name: 'WCAG2AA.Principle2.Guideline2_4.2_4_2.H25.1.NoTitleEl',
					description: 'Strona nie ma tytułu. Należy dodać do sekcji nagłówkowej strony element title lub wypełnić jego treść.'
				},
				{
					name: 'WCAG2AA.Principle2.Guideline2_4.2_4_2.H25.1.EmptyTitle',
					description: 'Element title w sekcji nagłówkowej strony nie może być pusty. Musi mieć treść.'
				},
				{
					name: 'WCAG2AA.Principle2.Guideline2_4.2_4_2.H25.2',
					description: 'Sprawdź, czy tekst w elemencie title w sekcji nagłówkowej strony dokładnie opisuje treść strony.'
				},
				{
					name: 'WCAG2AA.Principle2.Guideline2_4.2_4_3.H4.2',
					description: 'Jeśli został użyte dodatnie wartości atrybutu tabindex, sprawdź, czy podczas nawigacji sekwencyjnej tabulatorem relacje i następstwo treści są zrozumiałe dla użytkownika.'
				},
				{
					name: 'WCAG2AA.Principle2.Guideline2_4.2_4_4.H77,H78,H79,H80,H81,H33',
					description: 'Sprawdź, czy tekst linku wraz z programowo określonym kontekstem linku lub treścią w atrybucie title pozwala zrozumieć jego cel lub funkcję.'
				},
				{
					name: 'WCAG2AA.Principle2.Guideline2_4.2_4_4.H77,H78,H79,H80,H81',
					description: 'Sprawdź, czy treść linku wraz z programowo określonym kontekstem linku, pozwala na zrozumienie jego celu lub funkcji. Kontekst określony programowo: treść w tym samym akapicie lub tym samym elemencie listy lub w tej samej komórce tabeli, co link, albo w jej nagłówku.'
				},
				{
					name: 'WCAG2AA.Principle2.Guideline2_4.2_4_5.G125,G64,G63,G161,G126,G185',
					description: 'If this Web page is not part of a linear process, check that there is more than one way of locating this Web page within a set of Web pages.'
				},
				{
					name: 'WCAG2AA.Principle2.Guideline2_4.2_4_6.G130,G131',
					description: 'Sprawdź, czy nagłówki i etykiety  opisują temat lub cel treści.'
				},
				{
					name: 'WCAG2AA.Principle2.Guideline2_4.2_4_7.G149,G165,G195,C15,SCR31',
					description: 'Sprawdź, czy każdy element możliwy do nawigacji za pomocą klawiatury, ma widoczny wskaźnik fokusu klawiatury.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline2_5.2_5_1.Check',
					description: 'Sprawdź, czy wszystkie funkcje wykorzystujące do obsługi gesty wielopunktowe lub oparte na ścieżce można obsługiwać za pomocą pojedynczego wskazania bez gestu opartego na ścieżce, chyba że gest wielopunktowy lub oparty na ścieżce jest niezbędny.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline2_5.2_5_2.SinglePointer_Check',
					description: 'Sprawdź, czy dla funkcjonalności, które mogą być obsługiwane za pomocą pomocą pojedynczego wskazania, przynajmniej jedno z poniższych jest prawdziwe: \nBrak zdarzenia: Dotyk wskaźnikiem lub naciskanie nie wywołuje jakiejkolwiek części zdarzenia; \nPrzerwanie lub cofnięcie: Zdarzenie jest zależne od zwolnienia dotyku lub nacisku i istnieje mechanizm, którym można je przerwać lub cofnąć po zwolnieniu dotyku lub nacisku; \nOdwrócenie zdarzenia: Zwolnienie dotyku lub nacisku cofa wywołane zdarzenie i przywraca stan sprzed zdarzenia; \nIstotne: Dotyk wskaźnikiem lub naciskanie jest niezbędne do wywołania zdarzenia.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline2_5.2_5_2.Mousedown_Check',
					description: 'Ten element nasłuchuje zdarzeń mousedown (naciśniecie wskaźnika myszy). Sprawdź, czy dla funkcjonalności, które mogą być obsługiwane za pomocą pojedynczego wskazania, przynajmniej jedno z poniższych jest prawdziwe: \nBrak zdarzenia: Dotyk wskaźnikiem lub naciskanie nie wywołuje jakiejkolwiek części zdarzenia; \nPrzerwanie lub cofnięcie: Zdarzenie jest zależne od zwolnienia dotyku lub nacisku i istnieje mechanizm, którym można je przerwać lub cofnąć po zwolnieniu dotyku lub nacisku; \nOdwrócenie zdarzenia: Zwolnienie dotyku lub nacisku cofa wywołane zdarzenie i przywraca stan sprzed zdarzenia; \nIstotne: Dotyk wskaźnikiem lub naciskanie jest niezbędne do wywołania zdarzenia.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline2_5.2_5_2.Touchstart_Check',
					description: 'Ten element nasłuchuje zdarzeń touchstart. Sprawdź, czy dla funkcjonalności, które mogą być obsługiwane za pomocą pojedynczego wskazania, przynajmniej jedno z poniższych jest prawdziwe: \nBrak zdarzenia: Dotyk wskaźnikiem lub naciskanie nie wywołuje jakiejkolwiek części zdarzenia; \nPrzerwanie lub cofnięcie: Zdarzenie jest zależne od zwolnienia dotyku lub nacisku i istnieje mechanizm, którym można je przerwać lub cofnąć po zwolnieniu dotyku lub nacisku; \nOdwrócenie zdarzenia: Zwolnienie dotyku lub nacisku cofa wywołane zdarzenie i przywraca stan sprzed zdarzenia; \nIstotne: Dotyk wskaźnikiem lub naciskanie jest niezbędne do wywołania zdarzenia.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline2_5.2_5_3_F96.Check',
					description: 'Sprawdź, czy dla komponentów interfejsu użytkownika z etykietami, które zawierają tekst lub obrazy tekstu, nazwa zawiera tekst, który jest prezentowany na ekranie.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline2_5.2_5_3_F96.AccessibleName',
					description: 'Dostępna nazwa tego elementu nie zawiera widocznego tekstu etykiety. Sprawdź, czy dla komponentów interfejsu użytkownika z etykietami, które zawierają tekst lub obrazy tekstu, nazwa zawiera tekst, który jest prezentowany na ekranie.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline2_5.2_5_4.Check',
					description: 'Sprawdź, czy funkcjonalności, które mogą być obsługiwane przez ruch urządzenia lub ruch użytkownika, mogą być również obsługiwane przez elementy interfejsu użytkownika, a reagowanie na ruch może być wyłączone, aby zapobiec przypadkowemu uruchomieniu, z wyjątkiem sytuacji, gdy: \nObsługiwany interfejs: Ruch służy do obsługi funkcjonalności poprzez interfejs obsługiwany przez dostępność; \nIstotny: Ruch jest niezbędny dla funkcjonalności, a jego brak skutkowałoby anulowaniem działania.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline2_5.2_5_4.Devicemotion',
					description: 'Ten element ma nasłuchiwanie zdarzeń devicemotion (ruch urządzenia). Sprawdź, czy funkcjonalności, które mogą być obsługiwane przez ruch urządzenia lub ruch użytkownika, mogą być również obsługiwane przez elementy interfejsu użytkownika, a reagowanie na ruch może być wyłączone, aby zapobiec przypadkowemu uruchomieniu, z wyjątkiem sytuacji, gdy: \nObsługiwany interfejs: Ruch służy do obsługi funkcjonalności poprzez interfejs obsługiwany przez dostępność; \nIstotny: Ruch jest niezbędny dla funkcjonalności, a jego brak skutkowałoby anulowaniem działania.'
				},
				{
					name: 'WCAG2AA.Principle3.Guideline3_1.3_1_1.H57.2',
					description: 'Znacznik html musi mieć atrybut lang, który określa język strony.'
				},
				{
					name: 'WCAG2AA.Principle3.Guideline3_1.3_1_1.H57.3.Lang',
					description: 'Język określony w atrybucie lang nie wydaje się poprawnie sformatowany. Sprawdź w https://datatracker.ietf.org/doc/html/rfc5646'
				},
				{
					name: 'WCAG2AA.Principle3.Guideline3_1.3_1_1.H57.3.XmlLang',
					description: 'Język określony w atrybucie "xml:lang" nie wydaje się poprawnie sformatowany. Sprawdź w https://datatracker.ietf.org/doc/html/rfc5646'
				},
				{
					name: 'WCAG2AA.Principle3.Guideline3_1.3_1_2.H58',
					description: 'Każda zmiana języka w treściach strony powinna być oznaczona atrybutem lang lub xml:lang.'
				},
				{
					name: 'WCAG2AA.Principle3.Guideline3_1.3_1_2.H58.1.Lang',
					description: 'Język określony w atrybucie lang tego elementu nie wydaje się poprawnie sformatowany. Sprawdź w https://datatracker.ietf.org/doc/html/rfc5646'
				},
				{
					name: 'WCAG2AA.Principle3.Guideline3_1.3_1_2.H58.1.XmlLang',
					description: 'Język określony w atrybucie xml:lang tego elementu nie wydaje się poprawnie sformatowany. Sprawdź w https://datatracker.ietf.org/doc/html/rfc5646'
				},
				{
					name: 'WCAG2AA.Principle3.Guideline3_2.3_2_1.G107',
					description: 'Sprawdź, czy po przenieseniu fokusu na dany element formularza nie następuje zaskakująca dla użytkownika zmiana kontekstu (np. przeniesienie na inną stronę).'
				},
				{
					name: 'WCAG2AA.Principle3.Guideline3_2.3_2_2.H32.2',
					description: 'Formularz nie ma przycisku przesyłania (input type="submit", input type="image" albo button type="submit").'
				},
				{
					name: 'WCAG2AA.Principle3.Guideline3_2.3_2_3.G61',
					description: 'Sprawdź, czy powtarzające się na stronach elementy nawigacyjne są umieszczone w tej samej kolejności. Dopuszczalna jest zmiana kolejności przez samego użytkownika.'
				},
				{
					name: 'WCAG2AA.Principle3.Guideline3_2.3_2_4.G197',
					description: 'Elementy, które mają tę samą funkcjonalność, muszą być oznaczone w ten sam sposób na wszystkich stronach internetowych.'
				},
				{
					name: 'WCAG2AA.Principle3.Guideline3_3.3_3_1.G83,G84,G85',
					description: 'Jeśli przy wpisywaniu informacji, błąd zostanie wykryty automatycznie, system powinien wskazać błędny element, a użytkownik otrzymać opis błędu w postaci tekstu.'
				},
				{
					name: 'WCAG2AA.Principle3.Guideline3_3.3_3_2.G131,G89,G184,H90',
					description: 'Sprawdź, czy etykiety lub instrukcje kontrolek przeznaczonych na wprowadzenie danych przez użytkownika (w tym wymaganych) mają zrozumiałe objaśnienia i wskazówki. '
				},
				{
					name: 'WCAG2AA.Principle3.Guideline3_3.3_3_3.G177',
					description: 'Jeśli przy wpisywaniu informacji automatycznie zostanie wykryty błąd, użytkownik powinien otrzymać sugestię korekty, chyba że wpłynie to negatywnie na bezpieczeństwo systemu.'
				},
				{
					name: 'WCAG2AA.Principle3.Guideline3_3.3_3_4.G98,G99,G155,G164,G168.LegalForms',
					description: 'Sprawdź, czy użytkownik może sprawdzić i zmienić informacje wprowadzone w formularzu, zanim ostatecznie potwierdzi jego wysłanie. Jest to szczególnie ważne w sytuacji, gdy użytkownik podaje informacje prawne lub finansowe.'
				},
				{
					name: 'WCAG2AA.Principle4.Guideline4_1.4_1_1.F77',
					description: 'Znaleziono powtórzoną wartość atrybutu "[Element ID]". Dopuszczalne jest jedno wystąpienie wartości identyfikatora.'
				},
				{
					name: 'WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.A.Empty',
					description: 'Link ma atrybut id, nie ma jednak ani adresu w atrybucie href ani treści. Rozważ przeniesienie identyfikatora do elementu nadrzędnego.'
				},
				{
					name: 'WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.A.EmptyWithName',
					description: 'Link ma atrybut name, ale nie ma ani adresu, ani treści. Rozważ przeniesienie wartości atrybutu name do identyfikatora elementu nadrzędnego jako id.'
				},
				{
					name: 'WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.A.EmptyNoId',
					description: 'Link nie ma treści, ani nazwy, ani identyfikatora.'
				},
				{
					name: 'WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.A.NoHref',
					description: 'Link nie powinien być używany do tworzenia wewnętrznych odniesień na stronie. Jeśli identyfikator jest używany do stylów CSS lub oskryptowania JS, rozważ przeniesienie identyfikatora od elementu nadrzędnego (rodzica).'
				},
				{
					name: 'WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.A.Placeholder',
					description: 'Link ma jedynie treść. Brakuje adresu w atrybucie href, identyfikatora lub nazwy (atrybutu name).'
				},
				{
					name: 'WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.A.NoContent',
					description: 'Link ma prawidłowy adres w atrybucie href, ale nie ma treści linku.'
				},
				{
					name: 'WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.[NodeName].Name',
					description: 'Ten /[element type/] nie ma nazwy dostępnej dla API dostępności. Prawidłowe nazwy to /[valid names for this element/].'
				},
				{
					name: 'WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.[NodeName].Value',
					description: 'Ten /[element type/] nie ma wartości dostępnej dla API dostępności. Dodaj ją /[using a element-specific method/].'
				},	
				{
					name: 'WCAG2AA.Principle1.Guideline4_1.4_1_3_ARIA22,G199,ARIA19,G83,G84,G85,G139,G177,G194,ARIA23.Check',
					description: 'Sprawdź, czy komunikaty o stanie mogą być programowo określane poprzez rolę lub właściwości, tak aby mogły być prezentowane użytkownikowi przez technologie wspomagające bez otrzymywania fokusu.'
				}
			]
		},
		{
			title: 'WCAG2AAA',
			rules: [
				{
					name: 'WCAG2AAA.Principle1.Guideline1_1.1_1_1.H30.2',
					description: 'Grafika jest jedyną treścią linku i powinna zostać uzupełniona o tekst alternatywny przedstawiający jego cel.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_1.1_1_1.H37',
					description: 'Element img nie ma atrybutu alt. Dodaj ten atrybut i wpisz do niego krótki opis grafiki.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_1.1_1_1.H67.1',
					description: 'Grafika pełni funkcję dekoracyjną, więc zarówno atrybut alt, jak i title powinny być puste.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_1.1_1_1.H67.2',
					description: 'Grafika jest oznaczona jako dekoracyjna i będzie ignorowana przez technologie wspomagające np. czytniki ekranu.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_1.1_1_1.G94.Image',
					description: 'Sprawdź, czy opis alternatywny grafiki przekazuje tę samą informację, co grafika.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_1.1_1_1.H36',
					description: 'Przycisk graficzny nie ma atrybutu alt. Dodaj alt i opisz w nim funkcję przycisku.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_1.1_1_1.G94.Button',
					description: 'Sprawdź, czy tekst alternatywny przycisku prawidłowo opisuje funkcję przycisku.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_1.1_1_1.H24',
					description: 'Element area w graficznej mapie odsyłaczy nie ma atrybutu alt. Każdy taki obszar powinien mieć atrybut alt z tekstem alternatywnym, który odpowiednio opisuje dany obszar.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_1.1_1_1.H24.2',
					description: 'Sprawdź, czy tekst alternatywny elementu area odpowiada jego funkcji lub treści.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_1.1_1_1.G73,G74',
					description: 'Jeśli krótki tekst alternatywny nie opisuje wystarczająco treści przekazywanej przez grafikę, dodaj rozszerzony opis bezpośrednio na stronie lub na oddzielnej stronie.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_1.1_1_1.H2.EG5',
					description: 'Tekst alternatywny elementu img umieszczonego wewnątrz linku, nie może być taki sam jak tekst samego linku.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_1.1_1_1.H2.EG4',
					description: 'Element img znajdujący się wewnątrz linku nie ma atrybutu alt lub alt jest pusty. Ponieważ w sąsiedztwie znajduje się tekst linku, zaleca się połączenie tych elementów w jedno łącze ze wspólnym opisem.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_1.1_1_1.H2.EG3',
					description: 'Element img znajdujący się wewnątrz linku nie może mieć opisu alternatywnego tej samej treści, co tekst linku znajdujący się w jego sąsiedztwie.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_1.1_1_1.H53',
					description: 'Element object musi mieć atrybut alt z niepustym opisem alternatywnym, o ile nie został zapewniony żaden inny alternatywny opis tego elementu.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_1.1_1_1.G94,G92.Object',
					description: 'Sprawdź, czy dla wszystkich elementów nietekstowych istnieją krótkie lub długie opisy alternatywne i możliwie najdokładniej je opisują.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_1.1_1_1.H35.3',
					description: 'Applet powinien mieć opis alternatywny wewnątrz znaczników object. Zapewni to alternatywę w przeglądarkach, które nie obsługują elementu applet.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_1.1_1_1.H35.2',
					description: 'Applet powinien mieć opis alternatywny w atrybucie alt, aby zapewnić wsparcie w przypadku problemów z załadowaniem treści.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_1.1_1_1.G94,G92.Applet',
					description: 'Sprawdź, czy dla wszystkich elementów nietekstowych istnieją krótkie lub długie opisy alternatywne i możliwie najdokładniej je opisują.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_2.1_2_1.G158',
					description: 'Jeśli nagranie tylko dźwięk osadzone na stronie nie jest alternatywą dla tekstu, czy istnieje do niego alternatywa tekstowa.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_2.1_2_1.G159,G166',
					description: 'Jeśli obiekt wideo (bez dźwięku) osadzony na stronie nie jest alternatywą dla tekstu, sprawdź, czy istnieje do niego alternatywa tekstowa lub ścieżka dźwiękowa prezentująca tę samą treść.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_2.1_2_2.G87,G93',
					description: 'Jeśli obiekt wideo ze ścieżką audio osadzony na stronie nie jest alternatywą dla tekstu, sprawdź, czy ma napisy dla niesłyszących.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_2.1_2_4.G9,G87,G93',
					description: 'Sprawdź, czy osadzony na stronie obiekt, który zawiera zsynchronizowane media prezentowane na żywo ma napisy dla niesłyszących.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_2.1_2_5.G78,G173,G8',
					description: 'Sprawdź, czy osadzony na stronie obiekt, który zawiera zsynchronizowane media, ma dołączoną audiodeskrypcję treści wizualnych.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_2.1_2_6.G54,G81',
					description: 'Sprawdź, czy osadzony na stronie obiekt, który zawiera nagrane zsynchronizowane media, ma dołączone tłumaczenie treści dźwiękowych na język migowy.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_2.1_2_7.G8',
					description: 'Jeśli osadzony na stronie obiekt, który zawiera nagrane zsynchronizowane media, nie ma wystarczających pauz, by uzupełnić go o audiodeskrypcję, sprawdź, czy zamieszczona jest alternatywna wersja lub rozszerzona ścieżka dźwiękowa.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_2.1_2_8.G69,G159',
					description: 'Sprawdź, czy osadzony na stronie obiekt, który zawiera nagrane zsynchronizowane media lub tylko wideo, ma alternatywną tekstową wersję treści.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_2.1_2_9.G150,G151,G157',
					description: 'Sprawdź, czy osadzony na stronie obiekt, który zawiera tylko dźwięk transmitowany na żywo, ma alternatywną tekstową wersję treści.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H42.2',
					description: 'Nagłówek nie ma treści. Tekst, który nie ma funkcji nagłówka nie powinien być oznaczony znacznikami do określania nagłówków.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H93',
					description: 'Wiele elementów label ma taki sam atrybut for. Jeśli te etykiety odnoszą się do różnych kontrolek formularza, kontrolki powinny mieć unikalne atrybuty id.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H44.NonExistent',
					description: 'Atrybut for elementu label zawiera identyfikator pola, które nie istnieje na stronie.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H44.NonExistentFragment',
					description: 'Atrybut for elementu label zawiera identyfikator pola, które nie istnieje w tym obszarze strony.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H44.NotFormControl',
					description: 'Atrybut for elementu label zawiera identyfikator, który jest przypisany do elementu niebędącego kontrolką formularza. Sprawdź, czy identyfikator został umieszczony w odpowiednim znaczniku.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H44.NoForAttr',
					description: 'Element label nie ma atrybutu for. Sprawdź, czy jest jednoznacznie powiązany z kontrolką formularza (czy otacza pole formularza).'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H44.NoId',
					description: 'Kontrolka formularza nie ma atrybutu id, dlatego nie może mieć jawnej etykiety (powiązanej atrybutem for).'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H65.3',
					description: 'Kontrolka formularza bez etykiety ma pusty atrybut title. Atrybut title powinien określać przeznaczenie kontrolki.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H65',
					description: 'Kontrolka formularza ma atrybut title bez treści lub z samymi spacjami. Taki title nie będzie uwzględniany jako prawidłowa etykieta.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H44.2',
					description: 'Kontrolka formularza nie ma jawnego atrybutu label lub title, który określa przeznaczenie kontrolki.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H44.NoLabelAllowed',
					description: 'Element label nie powinien być stosowany w tego typu kontrolce formularza.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H44.1.After',
					description: 'Element label dla tej kontrolki powinien być umieszczony za tą kontrolką.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H44.1.Before',
					description: 'Element label dla tej kontrolki powinien być umieszczony przed tą kontrolką.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H49.Semantic',
					description: 'Do oznaczenia tekstu wyróżnionego lub specjalnego powinien zostać użyty odpowiedni znacznik semantyczny, aby można je było określić programowo.'
				},						
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H49.[NodeName]',
					description: 'Do oznaczenia tekstu wyróżnionego lub specjalnego powinien zostać użyty odpowiedni znacznik semantyczny, aby można je było określić programowo.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H49.AlignAttr',
					description: 'Do oznaczenia tekstu wyróżnionego lub specjalnego powinien zostać użyty odpowiedni znacznik. Atrybut align użyty w innych przypadkach niż w celu wyrównania danych w komórkach tabeli jest przestarzały. Użyj arkuszy stylów CSS.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.AlignAttr.Semantic',
					description: 'Do oznaczenia tekstu wyróżnionego lub specjalnego powinien zostać użyty odpowiedni znacznik. Atrybut align użyty w innych przypadkach niż w celu wyrównania danych w komórkach tabeli jest przestarzały. Użyj arkuszy stylów CSS.'
				},

				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H42',
					description: 'Jeśli ten fragment treści miał być nagłówkiem, powinny zostać użyte znaczniki nagłówków (h1 – h6).'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H63.3',
					description: 'W komórce tabeli użyto niewłaściwy atrybut scope. Dopuszczalne atrybuty to: row, col, rowgroup i colgroup.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H63.2',
					description: 'Atrybuty scope używane dla komórek tabeli (td), aby oznaczyć nagłówek, są przestarzałe w HTML5. Zaleca się skorzystanie ze znacznika th.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H43.ScopeAmbiguous',
					description: 'Użycie atrybutów scope dla elementu th jest niejasne w tabeli z wieloma nagłówkami. Zaleca się użycie atrybutu headers w znaczniku td.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H43.IncorrectAttr',
					description: 'Nieprawidłowy atrybut nagłówka w elemencie td. Oczekiwany "[expected headers]", ale znaleziono "[actual headers]"'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H43.HeadersRequired',
					description: 'Nie zdefiniowano relacji pomiędzy komórką td a powiązanym z nią nagłówkiem th. Wskazana tabela ma wiele poziomów th, więc należałoby użyć w komórkach td atrybutu headers.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H43.MissingHeaderIds',
					description: 'Nie wszystkie nagłówki th w tej tabeli mają atrybut id i nie będzie się można do nich odwołać za pomocą atrybutu headers w znacznikach td.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H43.MissingHeadersAttrs',
					description: 'Nie wszystkie komórki td w tej tabeli mają atrybut headers. W atrybucie headers powinny znajdować się identyfikatory powiązanych nagłówków.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H43,H63',
					description: 'Komórki td nie mają ustalonej relacji z komórkami nagłówkowymi th. Należy zdefiniować atrybut scope dla th lub headers dla td.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H63.1',
					description: 'Nie wszystkie komórki th w tej tabeli mają atrybut scope. Ten atrybut pozwala powiązać nagłówki th z odpowiednimi komórkami td.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H39,H73.4',
					description: 'Jeśli tabela zawiera treści i zastosowano w niej atrybut summary oraz znacznik caption, to treści tego atrybutu i znacznika nie mogą być powielone.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H73.3.Check',
					description: 'Jeśli ta tabela zawiera dane, sprawdź, czy atrybut summary opisuje układ tabeli oraz wyjaśnia, jak jej użyć.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H73.3.NoSummary',
					description: 'Jeśli ta tabela zawiera dane, rozważ użycie atrybutu aria-describedby albo starszego summary, aby opisać układ tabeli i wyjaśnić, jak jej użyć.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H39.3.Check',
					description: 'Jeśli ta tabela zawiera dane, sprawdź, czy treść podpisu w caption odpowiednio je opisuje.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H39.3.NoCaption',
					description: 'Jeśli ta tabela zawiera dane, powinna być uzupełniona o podpis w znaczniku caption.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H71.3',
					description: 'Element fieldset nie ma opisu w postaci elementu legend. Wszystkim elementom fieldset powinny towarzyszyć opisy w elementach legend.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H71.NoLegend',
					description: 'Element fieldset nie ma opisu w postaci elementu legend. Wszystkim elementom fieldset powinny towarzyszyć opisy w elementach legend.'
				},					
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H85.2',
					description: 'Jeśli elmenty listy wyboru stanowią grupę, powinny być zgrupowane elementem optgroup.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H71.2',
					description: 'Pola opcji (radio) lub pola wyboru (checkobx) z tym samym atrybutem name muszą być umieszczone w elemencie fieldset.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H71.SameName',
					description: 'Pola opcji (radio) lub pola wyboru (checkobx) z tym samym atrybutem name muszą być umieszczone w elemencie fieldset.'
				},	
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H48.1',
					description: 'Treść przypomina z wyglądu listę nieuporządkowaną. Jeśli jest to lista nieuporządkowana, powinna być oznaczona odpowiednimi znacznikami ul.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H48.2',
					description: 'Treść przypomina z wyglądu listę uporządkowaną. Jeśli jest to lista uporządkowana, powinna być oznaczona odpowiednimi znacznikami ol.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.G141',
					description: 'Nagłówki nie są zagnieżdżone logicznie. Ten element [heading] (powinien być elementem [correct heading], aby był prawidłowo zagnieżdżony. (Wydaje się być głównym nagłówkiem dokumentu, więc powinien być elementem h1).'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H48',
					description: 'Jeśli ten element zawiera nawigację, zaleca się, aby został oznaczony jako lista np. przy użyciu listy nieuporządkowanej ul.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_2.G57',
					description: 'Struktura i ułożenie elementów powinny oddawać sens strony i informacji. Sprawdź, czy treść jest uporządkowana w sensownej kolejności po linearyzacji, na przykład po wyłączeniu arkuszy stylów.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_3.G96',
					description: 'Sprawdź, czy przekazane instrukcje opierają się także na innych właściwościach niż tylko na cechach postrzegalnych przez zmysły, takich jak kształt, wielkość czy położenie.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_4.RestrictView',
					description: 'Sprawdź, czy treść nie ogranicza widoku i działania do jednej orientacji wyświetlania, takiej jak pionowa lub pozioma, chyba że określona orientacja wyświetlania jest niezbędna'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_5_H98.FaultyValue',
					description: 'Ten element ma prawdopodobnie błędną wartość w swoim atrybucie autocomplete.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_5_H98.InvalidAutocomplete_Text',
					description: 'Niepoprawna wartość autocomplete. Element nie należy do grupy kontrolki Tekst.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_5_H98.InvalidAutocomplete_Multiline',
					description: 'Niepoprawna wartość autocomplete. Element nie należy do grupy kontrolki Wielowierszowe.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_5_H98.InvalidAutocomplete_Password',
					description: 'Niepoprawna wartość autocomplete. Element nie należy do grupy kontrolki Hasło.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_5_H98.InvalidAutocomplete_Url',
					description: 'Niepoprawna wartość autocomplete. Element nie należy do grupy kontrolki Url.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_5_H98.InvalidAutocomplete_Telephone',
					description: 'Niepoprawna wartość autocomplete. Element nie należy do grupy kontrolki Telefon.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_5_H98.InvalidAutocomplete_Numeric',
					description: 'Niepoprawna wartość autocomplete. Element nie należy do grupy kontrolki Liczba.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_5_H98.InvalidAutocomplete_Month',
					description: 'Niepoprawna wartość autocomplete. Element nie należy do grupy kontrolki Miesiąc.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_5_H98.InvalidAutocomplete_Date',
					description: 'Niepoprawna wartość autocomplete. Element nie należy do grupy kontrolki Data.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_5_H98.Purpose',
					description: 'Sprawdź, czy pole wprowadzania danych służy celowi określonemu w sekcji Przeznaczenie pól danych w komponentach interfejsu użytkowników (zobacz WCAG 2.1); oraz czy treeść jest zaimplementowana przy użyciu technologii z obsługą określania oczekiwanego znaczenia dla danych wejściowych formularza.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_5_H98.MissingAutocomplete',
					description: 'Ten element nie ma atrybutu autocomplete. Jeśli to pole zbiera informacje o użytkowniku, rozważ jego dodanie, aby spełnić to kryterium sukcesu.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_6_ARIA11.Check',
					description: 'Sprawdź, czy można programowo określić przeznaczenie komponentów interfejsu użytkownika, ikon i regionów.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_4.1_4_1.G14,G182',
					description: 'Sprawdź, czy informacje przekazane za pomocą koloru są przedstawione także w inny alternatywny sposób, np. opisane tekstem.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_4.1_4_2.F23',
					description: 'Jeżeli materiał audio włączany jest automatycznie i trwa dłużej niż trzy sekundy, należy umożliwić zatrzymanie bądź wyciszenie odtwarzania.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17',
					description: 'Ten element ma niewystarczający kontrast na tym poziomie zgodności. Oczekiwano współczynnika kontrastu co najmniej 7:1, ale tekst w tym elemencie ma współczynnik kontrastu /{value/}. Zalecenie: /{colour recommendations/}.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_4.1_4_6.G18',
					description: 'Ten element ma niewystarczający kontrast na tym poziomie zgodności. Oczekiwano współczynnika kontrastu co najmniej 4.5:1, ale tekst w tym elemencie ma współczynnik kontrastu /{value/}. Zalecenie: /{colour recommendations/}.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17-1',
					description: 'Tekst tego elementu jest umieszczony na obrazie tła. Sprawdź, czy współczynnik kontrastu między tekstem a wszystkimi zakrytymi częściami obrazu wynosi co najmniej 7:1.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_4.1_4_6.G18-1',
					description: 'Tekst tego elementu jest umieszczony na obrazie tła. Sprawdź, czy współczynnik kontrastu między tekstem a wszystkimi zakrytymi częściami obrazu wynosi co najmniej 4.5:1.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_4.1_4_7.G56',
					description: 'W przypadku nagranych wcześniej treści tylko-audio, które są głównie mową (np. narracja), wszelkie dźwięki w tle powinny być wyciszone lub być co najmniej o 20 dB (lub około 4 razy) cichsze niż mowa.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_4.1_4_8.G148,G156,G175',
					description: 'Kolor tekstu oraz kolor tła powinny być możliwe do zmiany przez użytkownika na samej stronie lub poprzez funkcje przeglądarki.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_4.1_4_8.H87,C20',
					description: 'Szerokość bloku tekstowego nie powinna przekraczać 80 znaków (40 w przypadku alfabetów: chińskiego, japońskiego i koreańskiego).'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_4.1_4_8.C19,G172,G169',
					description: 'Tekst nie powinien być wyjustowany (tzn. wyrównany do prawego i lewego marginesu). Albo powinien istnieć mechanizm, który pozwala usunąć wyjustowanie.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_4.1_4_8.G188,C21',
					description: 'Odstępy między wierszami w akapitach powinny wynosić przynajmniej 1,5 wysokości linii, a odległość między akapitami powinna być przynajmniej 1,5 razy większa niż ta pomiędzy wierszami.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_4.1_4_8.H87,G146,C26',
					description: 'Tekst na stronie powinien mieć możliwość powiększenia do 200% bez użycia technologii wspomagających. Nie powinno być też wymagane przewijanie dolnym paskiem ekranu przy takim ustawieniu i zmaksymalizowanym oknie przeglądarki.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_4.1_4_9.G140,C22,C30.NoException',
					description: 'Sprawdź, czy teksty w formie grafiki pełnią wyłącznie funkcję dekoracyjną lub „graficzna” prezentacja tekstu ma znaczenie z uwagi na treść przekazywanej informacji.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_4.1_4_10_C32,C31,C33,C38,SCR34,G206.Check',
					description: 'Sprawdź, czy treść może być prezentowana bez utraty informacji lub funkcjonalności oraz bez konieczności przewijania w dwóch wymiarach dla: \nTreści przewijanej pionowo przy szerokości równoważnej 320 pikselom CSS; \nTreści przewijanej poziomo przy wysokości równoważnej 256 pikselom CSS; \nZ wyjątkiem części treści, które wymagają układu dwuwymiarowego ze względu na sposób korzystania lub znaczenie.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_4.1_4_10_C32,C31,C33,C38,SCR34,G206.Fixed',
					description: 'Ten element ma "position: fixed". Może to wymagać przewijania w dwóch wymiarach, co jest uznawane za niespełninie tego kryterium sukcesu.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_4.1_4_10_C32,C31,C33,C38,SCR34,G206.Scrolling',
					description: 'Tekst wstępnie sformatowany może wymagać przewijania w dwóch wymiarach, co jest uznawane za niespełninie tego kryterium sukcesu.'
				},				
				{
					name: 'WCAG2AAA.Principle1.Guideline1_4.1_4_10_C32,C31,C33,C38,SCR34,G206.Zoom',
					description: 'Zakłócanie możliwości powiększania przez program użytkownika może być niespełniniem tego kryterium sukcesu.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_4.1_4_11_G195,G207,G18,G145,G174,F78.Check',
					description: 'Sprawdź, czy wizualna prezentacja poniższych elementów ma współczynnik kontrastu co najmniej 3:1 w stosunku do sąsiadującego koloru(ów): \nKomponenty interfejsu użytkownika: Informacje wizualne wymagane do identyfikacji komponentów i stanów interfejsu użytkownika, z wyjątkiem komponentów nieaktywnych lub gdy wygląd komponentu jest określany przez program użytkownika i nie jest modyfikowany przez autora; \nObiekty graficzne: Części grafiki wymagane do zrozumienia treści, z wyjątkiem sytuacji, gdy szczególna prezentacja grafiki jest niezbędna do przekazania informacji.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_4.1_4_12_C36,C35.Check',
					description: 'Sprawdź, czy nie nastąpi utrata treści lub funkcjonalności, ustawiając wszystkie poniższe elementy i nie zmieniając żadnej innej właściwości stylu: \nWysokość wiersza (odstęp między wierszami) co najmniej 1,5-krotność rozmiaru czcionki; \nOdstępy między akapitami - co najmniej 2-krotność rozmiaru czcionki; \nOdstępy między literami (tracking) - co najmniej 0,12-krotność rozmiaru czcionki; \nOdstępy między wyrazami - co najmniej 0,16 rozmiaru czcionki.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_4.1_4_13_F95.Check',
					description: 'Sprawdź, czy w przypadku, gdy otrzymanie, a następnie usunięcie najechania wskaźnikiem lub fokusu klawiatury powoduje, że dodatkowa treść staje się widoczna, a następnie ukryta, następujące stwierdzenia są prawdziwe: \nOdrzucone: Istnieje mechanizm umożliwiający odrzucenie dodatkowej treści bez przesuwania wskaźnika myszy lub fokusu klawiatury, chyba że dodatkowa treść przekazuje błąd wprowadzanych danych lub nie przesłania ani nie zastępuje innej treści; \nWskazywane: Jeśli wskaźnik myszy (hover) może wyzwolić dodatkową treść, wówczas wskaźnik może zostać przeniesiony na dodatkową treść bez znikania dodatkowej treści; \nTrwałe: Dodatkowa treść pozostaje widoczna do momentu usunięcia wyzwalacza aktywacji lub fokusu, użytkownik odrzuca go lub jego informacje nie są już ważne.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline2_1.2_1_4.Check',
					description: 'Sprawdź, czy jeśli skrót klawiaturowy jest zaimplementowany w treści przy użyciu tylko znaków literowych (w tym wielkich i małych liter), znaków interpunkcyjnych, cyfr lub symboli, to prawdziwa jest co najmniej jedna z tych sytuacji: \nWyłączanie: Istnieje mechanizm wyłączania skrótu;\nMapowanie: Istnieje mechanizm zmiany mapowania skrótu w celu użycia jednego lub więcej niedrukowalnych znaków klawiatury (np. Ctrl, Alt, itp.);\nAktywny tylko, gdy ma fokus: Skrót klawiaturowy dla komponentu interfejsu użytkownika jest aktywny tylko wtedy, gdy ten komponent ma fokus.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_1.2_1_1.SCR20.DblClick',
					description: 'Funkcjonalność zapewniona przez dwukrotne kliknięce przyciskiem myszy, powinna być dostępna również przez klawiaturę.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_1.2_1_1.SCR20.MouseOver',
					description: 'Funkcjonalność zapewniona przez najechanie kursorem myszy na element, powinna być dostępna również przez klawiaturę.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_1.2_1_1.SCR20.MouseOut',
					description: 'Funkcjonalność zapewniona przez opuszczenie elementu kursorem myszy, powinna być dostępna również przez klawiaturę.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_1.2_1_1.SCR20.MouseMove',
					description: 'Funkcjonalność zapewniona z wykorzystaniem ruchów myszą, powinna być dostępna również przez klawiaturę.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_1.2_1_1.SCR20.MouseDown',
					description: 'Funkcjonalność zapewniona przez wciśnięciu przycisku myszy, powinna być dostępna również przez klawiaturę.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_1.2_1_1.SCR20.MouseUp',
					description: 'Funkcjonalność zapewniona przez zwolnieniu przycisku myszy, powinna być dostępna również przez klawiaturę.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_1.2_1_2.F10',
					description: 'Sprawdź, czy dodatek lub applet pozwalają na uwolnienie fokusu, jeśli przejdzie on do tych funkcjonalności.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_2.2_2_1.F40.2',
					description: 'Znacznik meta z atrybutem redirect przekierowuje na inną stronę w czesie określonym jako 0. Użytkownicy nie mają kontroli w takim krótkim czasie.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_2.2_2_1.F41.2',
					description: 'Znacznik meta z atrybutem refresh odświeża aktualną stronę. Użytkownicy nie mają kontroli nad tym odświeżaniem.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_2.2_2_2.SCR33,SCR22,G187,G152,G186,G191',
					description: 'Jeśli na stronie znajduje się element, który porusza się, przewija lub mruga dłużej niż 5 sekund lub jest automatycznie aktualizowany, musi istnieć mechanizm, który umożliwia zatrzymanie tego efektu lub ukrycie treści.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_2.2_2_2.F4',
					description: 'Jeśli ten element miga dłużej niż 5 sekund, sprawdź, czy istnieje mechanizm, który umożliwi zatrzymanie migania lub ukrycie elementu.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_2.2_2_2.F47',
					description: 'Elementu blink nie spełnia wymagania, zgodnie z którym miganie można zatrzymać lub ukryć, gdy trwa dłużej niż 5 sekund.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_2.2_2_3.G5',
					description: 'Check that timing is not an essential part of the event or activity presented by the content, except for non-interactive synchronized media and real-time events.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_2.2_2_4.SCR14',
					description: 'Check that all interruptions (including updates to content) can be postponed or suppressed by the user, except interruptions involving an emergency.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_2.2_2_5.G105,G181',
					description: 'Jeśli ta strona internetowa jest częścią zestawu stron internetowych z limitem czasu nieaktywności, sprawdź, czy uwierzytelniony użytkownik może kontynuować aktywność bez utraty danych po ponownym uwierzytelnieniu.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline2_2.2_2_6.Check',
					description: 'Sprawdź, czy użytkownicy są ostrzegani o czasie trwania każdej bezczynności użytkownika, która może spowodować utratę danych, chyba że dane są przechowywane przez ponad 20 godzin, gdy użytkownik nie podejmuje żadnych działań.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_3.2_3_2.G19',
					description: 'Check that no component of the content flashes more than three times in any 1-second period.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline2_3.2_3_3.Check',
					description: 'Sprawdź, czy animacja ruchu wywołana przez interakcję może być wyłączona, chyba że jest ona niezbędna dla funkcjonalności lub przekazywanej informacji.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline2_5.2_5_1.Check',
					description: 'Sprawdź, czy wszystkie funkcje wykorzystujące do obsługi gesty wielopunktowe lub oparte na ścieżce można obsługiwać za pomocą pojedynczego wskazania bez gestu opartego na ścieżce, chyba że gest wielopunktowy lub oparty na ścieżce jest niezbędny.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline2_5.2_5_2.SinglePointer_Check',
					description: 'Sprawdź, czy dla funkcjonalności, które mogą być obsługiwane za pomocą pomocą pojedynczego wskazania, przynajmniej jedno z poniższych jest prawdziwe: \nBrak zdarzenia: Dotyk wskaźnikiem lub naciskanie nie wywołuje jakiejkolwiek części zdarzenia; \nPrzerwanie lub cofnięcie: Zdarzenie jest zależne od zwolnienia dotyku lub nacisku i istnieje mechanizm, którym można je przerwać lub cofnąć po zwolnieniu dotyku lub nacisku; \nOdwrócenie zdarzenia: Zwolnienie dotyku lub nacisku cofa wywołane zdarzenie i przywraca stan sprzed zdarzenia; \nIstotne: Dotyk wskaźnikiem lub naciskanie jest niezbędne do wywołania zdarzenia.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline2_5.2_5_2.Mousedown_Check',
					description: 'Ten element nasłuchuje zdarzeń mousedown (naciśniecie wskaźnika myszy). Sprawdź, czy dla funkcjonalności, które mogą być obsługiwane za pomocą pojedynczego wskazania, przynajmniej jedno z poniższych jest prawdziwe: \nBrak zdarzenia: Dotyk wskaźnikiem lub naciskanie nie wywołuje jakiejkolwiek części zdarzenia; \nPrzerwanie lub cofnięcie: Zdarzenie jest zależne od zwolnienia dotyku lub nacisku i istnieje mechanizm, którym można je przerwać lub cofnąć po zwolnieniu dotyku lub nacisku; \nOdwrócenie zdarzenia: Zwolnienie dotyku lub nacisku cofa wywołane zdarzenie i przywraca stan sprzed zdarzenia; \nIstotne: Dotyk wskaźnikiem lub naciskanie jest niezbędne do wywołania zdarzenia.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline2_5.2_5_2.Touchstart_Check',
					description: 'Ten element nasłuchuje zdarzeń touchstart. Sprawdź, czy dla funkcjonalności, które mogą być obsługiwane za pomocą pojedynczego wskazania, przynajmniej jedno z poniższych jest prawdziwe: \nBrak zdarzenia: Dotyk wskaźnikiem lub naciskanie nie wywołuje jakiejkolwiek części zdarzenia; \nPrzerwanie lub cofnięcie: Zdarzenie jest zależne od zwolnienia dotyku lub nacisku i istnieje mechanizm, którym można je przerwać lub cofnąć po zwolnieniu dotyku lub nacisku; \nOdwrócenie zdarzenia: Zwolnienie dotyku lub nacisku cofa wywołane zdarzenie i przywraca stan sprzed zdarzenia; \nIstotne: Dotyk wskaźnikiem lub naciskanie jest niezbędne do wywołania zdarzenia.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline2_5.2_5_3_F96.Check',
					description: 'Sprawdź, czy dla komponentów interfejsu użytkownika z etykietami, które zawierają tekst lub obrazy tekstu, nazwa zawiera tekst, który jest prezentowany na ekranie.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline2_5.2_5_3_F96.AccessibleName',
					description: 'Dostępna nazwa tego elementu nie zawiera widocznego tekstu etykiety. Sprawdź, czy dla komponentów interfejsu użytkownika z etykietami, które zawierają tekst lub obrazy tekstu, nazwa zawiera tekst, który jest prezentowany na ekranie.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline2_5.2_5_4.Check',
					description: 'Sprawdź, czy funkcjonalności, które mogą być obsługiwane przez ruch urządzenia lub ruch użytkownika, mogą być również obsługiwane przez elementy interfejsu użytkownika, a reagowanie na ruch może być wyłączone, aby zapobiec przypadkowemu uruchomieniu, z wyjątkiem sytuacji, gdy: \nObsługiwany interfejs: Ruch służy do obsługi funkcjonalności poprzez interfejs obsługiwany przez dostępność; \nIstotny: Ruch jest niezbędny dla funkcjonalności, a jego brak skutkowałoby anulowaniem działania.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline2_5.2_5_4.Devicemotion',
					description: 'Ten element ma nasłuchiwanie zdarzeń devicemotion (ruch urządzenia). Sprawdź, czy funkcjonalności, które mogą być obsługiwane przez ruch urządzenia lub ruch użytkownika, mogą być również obsługiwane przez elementy interfejsu użytkownika, a reagowanie na ruch może być wyłączone, aby zapobiec przypadkowemu uruchomieniu, z wyjątkiem sytuacji, gdy: \nObsługiwany interfejs: Ruch służy do obsługi funkcjonalności poprzez interfejs obsługiwany przez dostępność; \nIstotny: Ruch jest niezbędny dla funkcjonalności, a jego brak skutkowałoby anulowaniem działania.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline2_5.2_5_5.Check',
					description: 'Sprawdź, czy rozmiar celu punktu dotykowego wynosi co najmniej 44 na 44 piksele CSS, z wyjątkiem sytuacji, gdy:\nOdpowiednik: Cel jest dostępny za pośrednictwem równoważnego łącza lub kontrolki na tej samej stronie, która ma co najmniej 44 na 44 piksele CSS;\nŚródliniowe: Cel znajduje się w zdaniu lub w bloku tekstu;\nKontrola programu użytkownika: Rozmiar obiektu docelowego jest określony przez program użytkownika (przeglądarkę) i nie jest modyfikowany przez autora;\nIstotny: Szczególna prezentacja celu ma istotne znaczenie dla przekazywanych informacji.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline2_5.2_5_6.Check',
					description: 'Sprawdź, czy treść nie ogranicza korzystania z metod wprowadzania danych dostępnych na platformie, z wyjątkiem sytuacji, gdy ograniczenie jest niezbędne, wymagane do zapewnienia bezpieczeństwa treści lub wymagane do przestrzegania ustawień użytkownika.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_4.2_4_1.H64.1',
					description: 'Element iframe musi mieć tytuł. Wypełnij atrybut title i umieść w nim opis ramki.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_4.2_4_1.H64.2',
					description: 'Sprawdź, czy atrybut title elementu iframe ma tekst, który dokładnie określa treść ramki.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_4.2_4_1.G1,G123,G124,H69',
					description: 'Sprawdź, czy użytkownik może pominąć powtarzającą się nawigację. Można to zapewnić przez użycie łączy pomijających, nagłówków lub punktów orientacyjnych.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_4.2_4_1.G1,G123,G124.NoSuchId',
					description: 'Ten link wskazuje identyfikator "[link target]", ale takiego identyfikatora w dokumencie nie ma.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_4.2_4_1.G1,G123,G124.NoSuchIdFragment2.4.2',
					description: 'Ten link wskazuje identyfikator "[link target]" w dokumencie, ale takiego identyfikatora w testowanym obszarze nie ma.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_4.2_4_2.H25.1.NoTitleEl',
					description: 'Strona nie ma tytułu. Należy dodać do sekcji nagłówkowej strony element title lub wypełnić jego treść.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_4.2_4_2.H25.1.EmptyTitle',
					description: 'Element title w sekcji nagłówkowej strony nie może być pusty. Musi mieć treść.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_4.2_4_2.H25.2',
					description: 'Sprawdź, czy tekst w elemencie title w sekcji nagłówkowej strony dokładnie opisuje treść strony.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_4.2_4_3.H4.2',
					description: 'Jeśli został użyte dodatnie wartości atrybutu tabindex, sprawdź, czy podczas nawigacji sekwencyjnej tabulatorem relacje i następstwo treści są zrozumiałe dla użytkownika.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_4.2_4_5.G125,G64,G63,G161,G126,G185',
					description: 'Jeśli strona nie jest częścią procesu krokowego, sprawdź, czy jest więcej niż jeden sposób na dotarcie do tej strony.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_4.2_4_6.G130,G131',
					description: 'Sprawdź, czy nagłówki i etykiety  opisują temat lub cel treści.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_4.2_4_7.G149,G165,G195,C15,SCR31',
					description: 'Sprawdź, czy każdy element możliwy do nawigacji za pomocą klawiatury, ma widoczny wskaźnik fokusu klawiatury.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_4.2_4_8.H59.1',
					description: 'Znacznik link może być umieszczony wyłącznie w sekcji head.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_4.2_4_8.H59.2a',
					description: 'Znacznik link nie ma atrybutu rel, którego wartość wskazuje na typ i powiązanie linku.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_4.2_4_8.H59.2b',
					description: 'Znacznik link nie ma adresu w atrybucie href — nie prowadzi do żadnego zasobu.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_4.2_4_9.H30',
					description: 'Sprawdź, czy treść linku zrozumiale opisuje jego funkcję.'
				},
				{
					name: 'WCAG2AAA.Principle3.Guideline3_1.3_1_1.H57.2',
					description: 'Znacznik html musi mieć atrybut lang, który określa język strony.'
				},
				{
					name: 'WCAG2AAA.Principle3.Guideline3_1.3_1_1.H57.3.Lang',
					description: 'Język określony w atrybucie lang nie wydaje się poprawnie sformatowany. Sprawdź w https://datatracker.ietf.org/doc/html/rfc5646'
				},
				{
					name: 'WCAG2AAA.Principle3.Guideline3_1.3_1_1.H57.3.XmlLang',
					description: 'Język określony w atrybucie "xml:lang" nie wydaje się poprawnie sformatowany. Sprawdź w https://datatracker.ietf.org/doc/html/rfc5646'
				},
				{
					name: 'WCAG2AAA.Principle3.Guideline3_1.3_1_2.H58',
					description: 'Każda zmiana języka w treściach strony powinna być oznaczona atrybutem lang lub xml:lang.'
				},
				{
					name: 'WCAG2AAA.Principle3.Guideline3_1.3_1_2.H58.1.Lang',
					description: 'Język określony w atrybucie lang tego elementu nie wydaje się poprawnie sformatowany. Sprawdź w https://datatracker.ietf.org/doc/html/rfc5646'
				},
				{
					name: 'WCAG2AAA.Principle3.Guideline3_1.3_1_2.H58.1.XmlLang',
					description: 'Język określony w atrybucie xml:lang tego elementu nie wydaje się poprawnie sformatowany. Sprawdź w https://datatracker.ietf.org/doc/html/rfc5646'
				},
				{
					name: 'WCAG2AAA.Principle3.Guideline3_1.3_1_3.H40,H54,H60,G62,G70',
					description: 'Sprawdź, czy jest zapewniony mechanizm, za pomocą którego można sprawdzić definicje słów użytych w nietypowy sposób, co odnosi się też do idiomów i żargonu.'
				},
				{
					name: 'WCAG2AAA.Principle3.Guideline3_1.3_1_4.G102,G55,G62,H28,G97',
					description: 'Sprawdź, czy jest zapewniony mechanizm, za pomocą którego można sprawdzić znaczenie skrótów w ich rozwiniętej formie.'
				},
				{
					name: 'WCAG2AAA.Principle3.Guideline3_1.3_1_5.G86,G103,G79,G153,G160',
					description: 'Jeśli dany tekst wymaga umiejętności czytania na poziomie wyższym niż poziom gimnazjalny, powinna być dostępna jego dodatkowa, uproszczona wersja.'
				},
				{
					name: 'WCAG2AAA.Principle3.Guideline3_1.3_1_6.H62.1.HTML5',
					description: 'Element ruby nie zawiera znacznika rt, który opisuje sposób wymowy.'
				},
				{
					name: 'WCAG2AAA.Principle3.Guideline3_1.3_1_6.H62.1.XHTML11',
					description: 'Element ruby nie zawiera znacznika rt, który opisuje sposób wymowy treści umieszczonej wewnątrz znacznika rb.'
				},
				{
					name: 'WCAG2AAA.Principle3.Guideline3_1.3_1_6.H62.2',
					description: 'Element ruby nie zawiera znacznika rp, który zapewnia wsparcie dla przeglądarek niewspierających treści w znacznikach ruby.'
				},
				{
					name: 'WCAG2AAA.Principle3.Guideline3_2.3_2_1.G107',
					description: 'Sprawdź, czy po przenieseniu fokusu na dany element formularza nie następuje zaskakująca dla użytkownika zmiana kontekstu (np. przeniesienie na inną stronę).'
				},
				{
					name: 'WCAG2AAA.Principle3.Guideline3_2.3_2_2.H32.2',
					description: 'Formularz nie ma przycisku przesyłania (input type="submit", input type="image" albo button type="submit").'
				},
				{
					name: 'WCAG2AAA.Principle3.Guideline3_2.3_2_3.G61',
					description: 'Sprawdź, czy powtarzające się na stronach elementy nawigacyjne są umieszczone w tej samej kolejności. Dopuszczalna jest zmiana kolejności przez samego użytkownika.'
				},
				{
					name: 'WCAG2AAA.Principle3.Guideline3_2.3_2_4.G197',
					description: 'Elementy, które mają tę samą funkcjonalność, muszą być oznaczone w ten sam sposób na wszystkich stronach internetowych.'
				},
				{
					name: 'WCAG2AAA.Principle3.Guideline3_2.3_2_5.H83.3',
					description: 'Sprawdź, czy linki otwierające się w nowym oknie lub karcie przeglądarki mają o tym informację w swojej treści.'
				},
				{
					name: 'WCAG2AAA.Principle3.Guideline3_3.3_3_1.G83,G84,G85',
					description: 'Jeśli przy wpisywaniu informacji, błąd zostanie wykryty automatycznie, system powinien wskazać błędny element, a użytkownik otrzymać opis błędu w postaci tekstu.'
				},
				{
					name: 'WCAG2AAA.Principle3.Guideline3_3.3_3_2.G131,G89,G184,H90',
					description: 'Sprawdź, czy etykiety lub instrukcje kontrolek przeznaczonych na wprowadzenie danych przez użytkownika (w tym wymaganych) mają zrozumiałe objaśnienia i wskazówki. '
				},
				{
					name: 'WCAG2AAA.Principle3.Guideline3_3.3_3_3.G177',
					description: 'Jeśli przy wpisywaniu informacji automatycznie zostanie wykryty błąd, użytkownik powinien otrzymać sugestię korekty, chyba że wpłynie to negatywnie na bezpieczeństwo systemu.'
				},
				{
					name: 'WCAG2AAA.Principle3.Guideline3_3.3_3_5.G71,G184,G193',
					description: 'Sprawdź, czy w formularzu istnieje pomoc kontekstowa na samej stronie lub na stronie służącej do potwierdzenia wprowadzonych treści.'
				},
				{
					name: 'WCAG2AAA.Principle3.Guideline3_3.3_3_6.G98,G99,G155,G164,G168.AllForms',
					description: 'Sprawdź, czy użytkownik może sprawdzić i zmienić informacje wprowadzone w formularzu, zanim ostatecznie potwierdzi jego wysłanie.'
				},
				{
					name: 'WCAG2AAA.Principle4.Guideline4_1.4_1_1.F77',
					description: 'Znaleziono powtórzoną wartość atrybutu "[Element ID]". Dopuszczalne jest jedno wystąpienie wartości identyfikatora.'
				},
				{
					name: 'WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.A.Empty',
					description: 'Link ma atrybut id, nie ma jednak ani adresu w atrybucie href ani treści. Rozważ przeniesienie identyfikatora do elementu nadrzędnego.'
				},
				{
					name: 'WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.A.EmptyWithName',
					description: 'Link ma atrybut name, ale nie ma ani adresu, ani treści. Rozważ przeniesienie wartości atrybutu name do identyfikatora elementu nadrzędnego jako id.'
				},
				{
					name: 'WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.A.EmptyNoId',
					description: 'Link nie ma treści, ani nazwy, ani identyfikatora.'
				},
				{
					name: 'WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.A.NoHref',
					description: 'Link nie powinien być używany do tworzenia wewnętrznych odniesień na stronie. Jeśli identyfikator jest używany do stylów CSS lub oskryptowania JS, rozważ przeniesienie identyfikatora od elementu nadrzędnego (rodzica).'
				},
				{
					name: 'WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.A.Placeholder',
					description: 'Link ma jedynie treść. Brakuje adresu w atrybucie href, identyfikatora lub nazwy (atrybutu name).'
				},
				{
					name: 'WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.A.NoContent',
					description: 'Link ma prawidłowy adres w atrybucie href, ale nie ma treści linku.'
				},
				{
					name: 'WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.[NodeName].Name',
					description: 'Ten /[element type/] nie ma nazwy dostępnej dla API dostępności. Prawidłowe nazwy to /[valid names for this element/].'
				},
				{
					name: 'WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.[NodeName].Value',
					description: 'Ten /[element type/] nie ma wartości dostępnej dla API dostępności. Dodaj ją /[using a element-specific method/].'
				},	
				{
					name: 'WCAG2AAA.Principle1.Guideline4_1.4_1_3_ARIA22,G199,ARIA19,G83,G84,G85,G139,G177,G194,ARIA23.Check',
					description: 'Sprawdź, czy komunikaty o stanie mogą być programowo określane poprzez rolę lub właściwości, tak aby mogły być prezentowane użytkownikowi przez technologie wspomagające bez otrzymywania fokusu.'
				}
			]
		}
	];
}
