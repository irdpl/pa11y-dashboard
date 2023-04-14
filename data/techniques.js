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

module.exports = getTechniques;

function getTechniques() {
	return {
		H30: {
			title: 'H30: Zapewnienie tekstu łącza opisującego cel łącza dla elementów kotwiących',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/html/H30'
		},
		H37: {
			title: 'H37: Używanie atrybutów alt w elementach img',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/html/H37'
		},
		H67: {
			title: 'H67: Używanie pustego tekstu alternatywnego i nieużywanie atrybutu title w elementach img dla obrazów, które powinny być zignorowane przez technologię wspomagającą',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/html/H67'
		},
		G94: {
			title: 'G94: Zapewnienie dla treści nietekstowych krótkiego tekstu alternatywnego, który wskazuje ten sam cel i prezentuje te same informacje, co treści nietekstowe',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G94'
		},
		H36: {
			title: 'H36: Używanie atrybutów alt na obrazach używanych jako przyciski przesyłania',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/html/H36'
		},
		H24: {
			title: 'H24: Zapewnienie alternatyw tekstowych dla elementów area graficznych map odsyłaczy',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/html/H24'
		},
		G73: {
			title: 'G73: Zapewnienie długiego opisu w innym miejscu z łączem sąsiadującym bezpośrednio z treścią nietekstową',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G73'
		},
		G74: {
			title: 'G74: Zapewnienie długiego opisu w tekście w pobliżu treści nietekstowych, z odniesieniem do lokalizacji długiego opisu w krótkim opisie',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G74'
		},
		H2: {
			title: 'Zapewnienie alternatyw tekstowych dla elementów area graficznych map odsyłaczy',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/html/H2'
		},
		H53: {
			title: 'Użycie ciała (treści) elementu object',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/html/H53'
		},
		G92: {
			title: 'G92: Zapewnienie dla treści nietekstowych długiego opisu, który wskazuje ten sam cel i prezentuje te same informacje, co treści nietekstowe',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G92'
		},
		H35: {
			title: 'H35: Zapewnienie alternatyw tekstowych w elementach apletu',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/html/H35'
		},
		G158: {
			title: 'G158: Zapewnienie alternatywy dla treści audio w mediach dynamicznych (opartych na czasie)',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G158'
		},
		G159: {
			title: 'G159: Zapewnienie alternatywy dla treści tylko wideo w mediach dynamicznych (opartych na czasie)',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G159'
		},
		G166: {
			title: 'G166: Zapewnienie narracji dźwiękowej opisującej ważną treść wideo i opisującą ją jako taką',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G166'
		},
		G87: {
			title: 'G87: Zapewnienie napisów zamkniętych',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G87'
		},
		G93: {
			title: 'G93: Zapewnienie otwartych (zawsze widocznych) napisów',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G93'
		},
		G69: {
			title: 'G69: Zapewnienie alternatywy dla mediów dynamicznych (opartych na czasie)',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G69'
		},
		G78: {
			title: 'G78: Zapewnienie drugiej, wybranej przez użytkownika ścieżki dźwiękowej, która zawiera audiodeskrypcję',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G78'
		},
		G173: {
			title: 'G173: Udostępnianie wersji filmu z audiodeskrypcją',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G173'
		},
		G8: {
			title: 'G8: Udostępnianie filmu z rozszerzoną audiodeskrypcją',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G8'
		},
		G9: {
			title: 'G9: Tworzenie na żywo napisów dla niesłyszących w mediach zsynchronizowanych',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G9'
		},
		G54: {
			title: 'G54: Włączenie tłumaczenia na język migowy do strumienia wideo',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G54'
		},
		G81: {
			title: 'G81: Zapewnienie zsynchronizowanego wideo-tłumacza języka migowego, które może być wyświetlane w innym oknie wirtualnym lub nałożone przez odtwarzacz na obraz',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G81'
		},
		G150: {
			title: 'G150: Zapewnienie tekstowych alternatyw dla treści dźwiękowej (tylko) na żywo',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G150'
		},
		G151: {
			title: 'G151: Zapewnienie łącza do transkrypcji tekstowej, przygotowanej wypowiedzi lub scenariusza, jeśli scenariusz jest przestrzegany',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G151'
		},
		G157: {
			title: 'G157: Włączenie na stronie internetowej usługi dodawania napisów do audio na żywo',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G157'
		},
		H42: {
			title: 'H42: Użycie znaczników h1-h6 do identyfikacji nagłówków',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/html/H42'
		},
		H93: {
			title: 'H93: Zapewnienie, że atrybuty id są unikalne',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/html/H93'
		},
		H44: {
			title: 'H44: Użycie elementu label do kojarzenia etykiet tekstowych z kontrolkami formularzy',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/html/H44'
		},
		H65: {
			title: 'H65: Użycie atrybutu title do identyfikacji kontrolek formularzy, gdy nie można użyć elementu label',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/html/H65'
		},
		H49: {
			title: 'H49: Użycie znaczników semantycznych do oznaczenia tekstu wyróżnionego lub specjalnego',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/html/H49'
		},
		H63: {
			title: 'H63: Użycie atrybutu scope do kojarzenia komórek nagłówka z komórkami danych w tabelach',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/html/H63'
		},
		H43: {
			title: 'H43: Użycie atrybutów id i headers do kojarzenia komórek danych z komórkami nagłówków w tabelach danych',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/html/H43'
		},
		H39: {
			title: 'H39: Użycie elementu caption do powiązania podpisu tabeli danych z tabelą danych',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/html/H39'
		},
		H73: {
			title: 'H73: Użycie atrybutu summary w celu opisu sposobu zorganizowania danych w tabelach danych',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/html/H73'
		},
		H71: {
			title: 'H71: Zapewnienie opisu dla grup kontrolek formularzy za pomocą elementów fieldset i legend',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/html/H71'
		},
		H85: {
			title: 'H85: Użycie optgroup do grupowania elementów option wewnątrz select',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/html/H85'
		},
		H48: {
			title: 'H48: Użycie ol, ul i dl dla list lub grup łączy',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/html/H48'
		},
		G141: {
			title: 'G141: Organizowanie strony za pomocą nagłówków',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G141'
		},
		G57: {
			title: 'G57: Porządkowanie treści w znaczącej kolejności',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G57'
		},
		G96: {
			title: 'G96: Zapewnienie tekstowego określenia elementów, które są wskazywane za pomocą informacji odwołujących się do ich właściwości zmysłowych',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G96'
		},
		G14: {
			title: 'G14: Zapewnienie, że informacje przekazywane przez różne kolory są również dostępne w tekście',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G14'
		},
		G182: {
			title: 'G182: Zapewnienie dodatkowych wskazówek wizualnych, gdy do przekazywania informacji używane są różnice koloru tekstu',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G182'
		},
		F23: {
			title: 'F23: Niespełnienie kryterium sukcesu 1.4.2 z powodu odtwarzania dźwięku dłuższego niż 3 sekundy i braku mechanizmu wyłączania dźwięku',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/failures/F23'
		},
		G18: {
			title: 'G18: Zapewnienie, że istnieje kontrast wynoszący co najmniej 4,5:1 między tekstem (i obrazami tekstu) a tłem pod tekstem',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G18'
		},
		G145: {
			title: 'G145: Zapewnienie, że kontrast między tekstem (i obrazami tekstu) a tłem pod tekstem wynosi co najmniej 3:1',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G145'
		},
		F24: {
			title: 'F24: Niespełnienie kryterium sukcesu 1.4.3, 1.4.6 i 1.4.8 z powodu określenia kolorów pierwszego planu bez określania kolorów tła i odwrotnie',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/failures/F24'
		},
		G142: {
			title: 'G142: Korzystanie z technologii powszechnie dostępnych programów klienckich obsługujących powiększanie',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G142'
		},
		G140: {
			title: 'G140: Oddzielanie informacji i struktury od prezentacji, aby umożliwić prezentację w różny sposób',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G140'
		},
		C22: {
			title: 'C22: Stosowanie CSS do kontrolowania wizualnej prezentacji tekstu',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/css/C22'
		},
		C30: {
			title: 'C30: Stosowanie CSS do zastępowania tekstu obrazami tekstu i zapewniania przełączników interfejsu użytkownika',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/css/C30'
		},
		G17: {
			title: 'G17: Zapewnienie, że istnieje kontrast wynoszący co najmniej 7:1 między tekstem (i obrazami tekstu) a tłem pod tekstem',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G17'
		},
		G56: {
			title: 'G56: Miksowanie plików audio w taki sposób, aby dźwięki inne niż mowa były co najmniej 20 decybeli niższe niż dźwięk mowy',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G56'
		},
		G148: {
			title: 'G148: Nieokreślanie koloru tła, nieokreślanie koloru tekstu i nieużywanie funkcji technologii, które zmieniają wartości domyślne',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G148'
		},
		G156: {
			title: 'G156: Korzystanie z technologii powszechnie dostępnych programów użytkownika, które mogą zmieniać pierwszy plan i tło bloków tekstu',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G156'
		},
		G175: {
			title: 'G175: Zapewnienie na stronie narzędzia do selekcji o wyboru wielu kolorów dla pierwszego planu i tła',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G175'
		},
		H87: {
			title: 'G146: Korzystanie z układu płynnego',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G146'
		},
		C19: {
			title: 'C19: Określanie wyrównania do lewej lub prawej strony w CSS',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/css/C19'
		},
		G172: {
			title: 'G172: Zapewnienie mechanizmu usuwania obustronnego wyrównania tekstu',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G172'
		},
		G169: {
			title: 'G169: Wyrównanie tekstu tylko z jednej strony',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G169'
		},
		G188: {
			title: 'G188: Udostępnienie na stronie przycisku w celu zwiększenia odstępów między wierszami i akapitami',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G188'
		},
		C21: {
			title: 'C21: Określanie odstępów między wierszami w CSS',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/css/C21'
		},
		SCR20: {
			title: 'SCR20: Użycie zarówno klawiatury, jak i innych funkcji specyficznych dla urządzenia',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR20'
		},
		F10: {
			title: 'F10: Niespełnienie kryterium sukcesu 2.1.2 i wytycznej 5 z powodu łączenia wielu formatów treści w sposób, który powoduje uwięzienie użytkownika w jednym typie formatu',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/failures/F10'
		},
		F40: {
			title: 'F40: Niespełnienie kryterium sukcesu 2.2.1 i 2.2.4 z powodu zastosowania przekierowania meta z limitem czasu',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/failures/F40'
		},
		F41: {
			title: 'F41: Niespełnienie kryterium sukcesu 2.2.1, 2.2.4 i 3.2.5 z powodu zastosowania meta refresh w celu przeładowania strony',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/failures/F41'
		},
		SCR33: {
			title: 'SCR33: Użycie skryptu do przewijania treści i zapewniania mechanizmu do jej wstrzymywania',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR33'
		},
		SCR22: {
			title: 'SCR22: Użycie skryptów do kontroli migotania i zatrzymywania go w czasie pięciu sekund lub mniejszym',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR22'
		},
		G187: {
			title: 'G187: Użycie technologii włączającej migające treści, które można wyłączyć za pomocą programu użytkownika',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G187'
		},
		G152: {
			title: 'G152: Ustawianie animowanych obrazów GIF, aby przestały migać po n cyklach (w ciągu 5 sekund)',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G152'
		},
		G186: {
			title: 'G186: Zapewnienie na stronie internetowej kontrolki, która umożliwia zatrzymanie przesuwania, migania lub automatycznej aktualizacji treści',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G186'
		},
		G191: {
			title: 'G191: Zapewnienie łącza, przycisku lub innego mechanizmu, który odświeża stronę bez migania treści',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G191'
		},
		F4: {
			title: 'F4: Niespełnienie kryterium sukcesu 2.2.2 z powodu używania właściwości text-decoration:blink bez mechanizmu zatrzymującego miganie, gdy trwa dłużej niż pięć sekund',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/failures/F4'
		},
		F47: {
			title: 'F47: Niespełnienie kryterium sukcesu 2.2.2 z powodu użycia elementu migającego',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/failures/F47'
		},
		G5: {
			title: 'G5: Umożliwienie użytkownikom dokończenia działania bez limitu czasowego',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G5'
		},
		SCR14: {
			title: 'SCR14: Użycie skryptów do opcjonalnych nieistotnych alertów',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR14'
		},
		G105: {
			title: 'G105: Zapisywanie danych, aby można było z nich korzystać po ponownym uwierzytelnieniu użytkownika',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G105'
		},
		G181: {
			title: 'G181: Kodowanie danych użytkownika na stronie ponownego uwierzytelniania jako ukrytych lub zaszyfrowanych',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G181'
		},
		G19: {
			title: 'G19: Zapewnienie, że żaden element treści nie miga częściej niż trzy razy w ciągu 1 sekundy',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G19'
		},
		G176: {
			title: 'G176: Ograniczanie obszaru migania do bezpiecznego rozmiaru',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G176'
		},
		H64: {
			title: 'H64: Użycie atrybutu title do tytułowania elementów frame i iframe',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/html/H64'
		},
		G1: {
			title: 'G1: Dodanie na początku każdej strony łącza, które prowadzi bezpośrednio do obszaru treści głównej',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G1'
		},
		G123: {
			title: 'G123: Dodanie na początku bloku powtarzanej treści łącza, aby przejść na koniec bloku',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G123'
		},
		G124: {
			title: 'G124: Dodawanie na początku strony łączy do każdego obszaru treści',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G124'
		},
		H69: {
			title: 'H69: Zapewnienie na początku każdej sekcji treści nagłówków',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/html/H69'
		},
		H25: {
			title: 'H25: Zapewnienie tytułu za pomocą elementu title',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/html/H25'
		},
		H4: {
			title: 'H4: Tworzenie logicznej kolejności tabulacji poprzez łącza, kontrolki formularzy i obiekty',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/html/H4'
		},
		H77: {
			title: 'H77: Określenie celu łącza za pomocą tekstu łącza w połączeniu z jego pozycją na liście',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/html/H77.html'
		},
		H78: {
			title: 'H78: Określenie celu łącza za pomocą tekstu łącza w połączeniu z akapitem, w którym znajduje się łącze',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/html/H78'
		},
		H79: {
			title: 'H79: Określenie celu łącza za pomocą tekstu łącza w połączeniu z otaczającą go komórką tabeli i powiązanymi nagłówkami tabeli',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/html/H79'
		},
		H80: {
			title: 'H80: Określenie celu łącza za pomocą tekstu łącza w połączeniu z poprzedzającym je nagłówkiem',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/html/H80'
		},
		H81: {
			title: 'H81: Określenie celu łącza w zagnieżdżonej liście przy użyciu tekstu łącza połączonego z elementem listy nadrzędnej, w którym lista jest zagnieżdżona',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/html/H81'
		},
		H33: {
			title: 'H33: Uzupełnianie tekstu łącza za pomocą atrybutu title',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/html/H33'
		},
		G125: {
			title: 'G125: Zapewnienie łączy nawigacyjnych do powiązanych stron internetowych',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G125'
		},
		G64: {
			title: 'G64: Zapewnienie spisu treści',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G64'
		},
		G63: {
			title: 'G63: Zapewnienie mapy witryny',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G63'
		},
		G161: {
			title: 'G161: Zapewnienie funkcji wyszukiwania, aby pomóc użytkownikom znaleźć treść',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G161'
		},
		G126: {
			title: 'G126: Zapewnienie listy łączy do wszystkich innych stron internetowych',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G126'
		},
		G185: {
			title: 'G185: Łączenie do wszystkich stron witryny ze strony głównej',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G185'
		},
		G130: {
			title: 'G130: Zapewnienie opisowych nagłówków',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G130'
		},
		G131: {
			title: 'G131: Zapewnienie opisowych etykiet',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G131'
		},
		G149: {
			title: 'G149: Stosowanie komponentów interfejsu użytkownika, które są wyróżniane przez program użytkownika, gdy otrzymują fokus',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G149'
		},
		G165: {
			title: 'G165: Stosowanie domyślnego dla platformy oznaczenia fokusu, dzięki czemu będzie ono przenoszone na inne platformy',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G165'
		},
		G195: {
			title: 'G195: Stosowanie dobrze widocznego wskaźnika fokusu zapewnionego przez autora',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G195'
		},
		C15: {
			title: 'C15: Stosowanie CSS do zmiany wyglądu składnika interfejsu użytkownika, gdy otrzymuje on fokus',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/css/C15'
		},
		SCR31: {
			title: 'SCR31: Użycie skryptu do zmiany koloru tła lub obramowania elementu z fokusem',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR31'
		},
		H59: {
			title: 'H59: Użycie elementu link i narzędzi nawigacyjnych',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/html/H59'
		},
		H57: {
			title: 'H57: Użycie atrybutu lang dla elementu html',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/html/H57'
		},
		H58: {
			title: 'H58: Użycie atrybutu lang do wskazywania zmian w języku naturalnym',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/html/H58'
		},
		H40: {
			title: 'H40: Stosowanie list opisów',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/html/H40'
		},
		H54: {
			title: 'H54: Użycie elementu dfn do oznaczania instancji definiującej słowo',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/html/H54'
		},
		H60: {
			title: 'H60: Użycie elementu link do połączeń ze słownikiem',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/html/H60'
		},
		G62: {
			title: 'G62: Zapewnienie słownika',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G62'
		},
		G70: {
			title: 'G70: Zapewnienie funkcji wyszukiwania w słowniku internetowym',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G70'
		},
		G102: {
			title: 'G102: Zapewnienie rozwinięcia lub wyjaśnienia skrótu',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G102'
		},
		G55: {
			title: 'G55: Linkowanie do definicji',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G55'
		},
		H28: {
			title: 'H28: Zapewnienie definicji skrótów za pomocą elementu abbr',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/html/H28'
		},
		G97: {
			title: 'G97: Umieszczenie skrótu bezpośrednio po rozwiniętej formie',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G97'
		},
		G86: {
			title: 'G86: Zapewnienie streszczenia tekstu, które może być zrozumiałe przez osoby mniejszych umiejętnościach czytania niż na poziomie szkoły średniej II stopnia',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G86'
		},
		G103: {
			title: 'G103: Zapewnienie wizualnych ilustracji, obrazów i symboli, które pomagają wyjaśnić pomysły, zdarzenia i procesy',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G103'
		},
		G79: {
			title: 'G79: Zapewnienie mówionej wersji tekstu',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G79'
		},
		G153: {
			title: 'G153: Uczynienie tekstu łatwym do czytania',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G153'
		},
		G160: {
			title: 'G160: Zapewnienie w języku migowym informacji, pomysłów i procesów, które muszą być zrozumiałe, aby móc korzystać z treści',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G160'
		},
		H62: {
			title: 'H62: Użycie elementu ruby',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/html/H62'
		},
		G107: {
			title: 'G107: Stosowanie jako wyzwalacza zmiany kontekstu raczej „aktywacji” niż „fokusu”',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G107'
		},
		H32: {
			title: 'H32: Zapewnienie przycisków przesyłania',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/html/H32'
		},
		G61: {
			title: 'G61: Prezentowanie powtarzających się komponentów w tej samej kolejności, za każdym razem, gdy się pojawiają',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G61'
		},
		G197: {
			title: 'G197: Stosowanie etykiet, nazw i alternatyw tekstowych w sposób spójny dla treści o takiej samej funkcjonalności',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G197'
		},
		H83: {
			title: 'H83: Użycie atrybutu target do otwarcia nowego okna na żądanie użytkownika i wskazanie tego w tekście łącza',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/html/H83'
		},
		G83: {
			title: 'G83: Zapewnienie opisów tekstowych wskazujących wymagane pola, które nie zostały wypełnione',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G83'
		},
		G84: {
			title: 'G84: Zapewnienie komunikatu tekstowego, gdy użytkownik podaje informacje, które nie znajdują się na liście dozwolonych wartości',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G84'
		},
		G85: {
			title: 'G85: Zapewnienie komunikatu tekstowego, gdy dane wprowadzane przez użytkownika nie mieszczą się w wymaganym formacie lub zakresie wartości',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G85'
		},
		G89: {
			title: 'G89: Podanie oczekiwanego formatu danych i przykładu',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G89'
		},
		G184: {
			title: 'G184: Podanie na początku formularza lub zestawu pól instrukcji tekstowych opisujących niezbędne dane wejściowe',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G184'
		},
		H90: {
			title: 'H90: Wskazanie wymaganych kontrolek formularza za pomocą elementów label i legend',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/html/H90'
		},
		G177: {
			title: 'G177: Zapewnienie tekstu sugerującego korektę',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G177'
		},
		G98: {
			title: 'G98: Zapewnienie użytkownikowi możliwości sprawdzenia i poprawienia odpowiedzi przed przesłaniem',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G98'
		},
		G99: {
			title: 'G99: Zapewnienie możliwości odzyskiwania usuniętych informacji',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G99'
		},
		G155: {
			title: 'G155: Zapewnienie obok pola wyboru przycisku przesyłania',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G155'
		},
		G164: {
			title: 'G164: Zapewnienie określonego czasu po złożeniu formularza, gdy przesłanie formularza może zostać zaktualizowane lub anulowane przez użytkownika',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G164'
		},
		G168: {
			title: 'G168: Żądanie potwierdzenia, aby kontynuować wybraną akcję',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G168'
		},
		G71: {
			title: 'G71: Zapewnienie łącza pomocy na każdej stronie internetowej',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G71'
		},
		G193: {
			title: 'G193: Udzielanie pomocy na stronie internetowej przez asystenta',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G193'
		},
		F77: {
			title: 'F77: Niespełnienie kryterium sukcesu 4.1.1 z powodu zduplikowanych wartości ID',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/failures/F77'
		},
		H91: {
			title: 'H91: Stosowanie kontrolek formularzy HTML i łączy',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/html/H91'
		},
		F102: {
			title: 'F102: Niespełnienie kryterium sukcesu 1.4.10 z powodu zniknięcia treści i niedostępności po ponownym wlaniu treści',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/failures/F102'
		},
		F103: {
			title: 'F103: Niespełnienie kryterium sukcesu 4.1.3 z powodu dostarczania komunikatów o stanie, których nie można programowo określić za pomocą roli lub właściwości',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/failures/F103'
		},
		F104: {
			title: 'F104: Niespełnienie kryterium sukcesu 1.4.12 z powodu obciętej lub nachodzącej na siebie treści po dostosowaniu odstępów między tekstami',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/failures/F104'
		},
		F105: {
			title: 'F105: Niespełnienie kryterium sukcesu 2.5.1 z powodu zapewnienia funkcjonalności za pomocą gestu opartego na ścieżce bez prostej alternatywy w postaci wskazania',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/failures/F105'
		},
		F106: {
			title: 'F106: Niespełnienie kryterium sukcesu 2.5.4 z powodu niemożności wyłączenia aktywowania ruchem',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/failures/F106'
		},
		G216: {
			title: 'G216: Zapewnienie jednopunktowego sposobu obsługi kontrolki suwaka',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G216'
		},
		G215: {
			title: 'G215: Zapewnienie kontrolki, aby uzyskać taki sam efekt jak w przypadku gestów opartych na ścieżce lub gestów wielopunktowych',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G215'
		},
		F100: {
			title: 'F100: Niespełnienie kryterium sukcesu 1.3.4 z powodu wyświetlenia komunikatu z prośbą o zmianę orientacji urządzenia',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/failures/F100'
		},
		G214: {
			title: 'G214: Użycie kontrolki, aby umożliwić dostęp do treści w różnych orientacjach wyświetlacza',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G214'
		},
		C40: {
			title: 'C40: Tworzenie dwukolorowego wskaźnika fokusu, aby zapewnić wystarczający kontrast ze wszystkimi komponentami',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/css/C40'
		},
		F99: {
			title: 'F99: Niespełnienie kryterium sukcesu 2.1.4 z powodu zaimplementowania jednoznakowych skrótów klawiaturowych, których nie można wyłączyć ani przemapować',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/failures/F99'
		},
		SCR39: {
			title: 'SCR39: Sprawianie, że treść z fokusem lub wskazywana (hover) może być odrzucona, wskazywana i widoczna (nie znika)',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR39'
		},
		G212: {
			title: 'G212: Stosowanie natywnych elementów sterujących, aby zapewnić, że funkcjonalność zostanie uruchomiona w przypadku zdarzenia zwolnienia dotyku lub nacisku.',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G212'
		},
		F98: {
			title: 'F98: Błąd spowodowany interakcjami ograniczonymi do urządzeń z ekranem dotykowym',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/failures/F98'
		},
		G213: {
			title: 'G213: Zapewnienie konwencjonalnego sterowania i ustawienie aplikacji dla kontrolek aktywowanych ruchem',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G213'
		},
		ARIA24: {
			title: 'ARIA24: Semantyczne oznakowanie ikony czcionki za pomocą atrybutu role="img"',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA24'
		},
		F97: {
			title: 'F97: Błąd spowodowany zablokowaniem orientacji do widoku poziomego lub pionowego',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/failures/F97'
		},
		F52: {
			title: 'F52: Niespełnienie kryterium sukcesu 3.2.1 i 3.2.5 z powodu otwarcia nowego okna zaraz po załadowaniu nowej strony',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/failures/F52'
		},
		G209: {
			title: 'G209: Zapewnienie wystarczającego kontrastu na granicach między sąsiednimi kolorami',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G209'
		},
		C39: {
			title: 'C39: Stosowanie zapytania reduce-motion, aby zapobiegać ruchowi (animacji)',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/css/C39'
		},
		G207: {
			title: 'G207: Zapewnienie współczynnika kontrastu 3:1 dla ikon',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G207'
		},
		C38: {
			title: 'C38: Stosowanie własności CSS width, max-width i flexbox, aby dopasować etykiety i pola formularzy',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/css/C38'
		},
		C34: {
			title: 'C34: Użycie zapytań medialnych do usuwania „przypięcia” nagłówków i stopek',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/css/C34'
		},
		C36: {
			title: 'C36: Umożliwienie zmiany rozmiarów odstępów między wierszami tekstu',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/css/C36'
		},
		C37: {
			title: 'C37: Użycie własności CSS max-width oraz height, aby dopasować obrazy',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/css/C37'
		},
		F95: {
			title: 'F95: Niespełnienie kryterium sukcesu 1.4.13 z powodu braku możliwości wyświetlenia treści po najechaniu kursorem',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/failures/F95'
		},
		F96: {
			title: 'F96: Błąd spowodowany dostępną nazwą, która nie zawiera widocznego tekstu etykiety',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/failures/F96'
		}
	};
}
