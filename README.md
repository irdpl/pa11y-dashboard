# Pa11y Dashboard, czyli Pulpit Pa11y

Pa11y Dashboard to interfejs sieciowy do automatycznego narzędzia raportowania dostępności [Pa11y][pa11y]; który pozwala _skupić_ się na naprawianiu problemów, a nie na ich szukaniu.

![Version][shield-version]
[![Node.js version support][shield-node]][info-node]
[![Build status][shield-build]][info-build]
[![GPL-3.0 licensed][shield-license]][info-license]

![dashboard](https://user-images.githubusercontent.com/6110968/61603347-0bce1000-abf2-11e9-87b2-a53f91d315bb.jpg)
![results-page](https://user-images.githubusercontent.com/6110968/62183438-05851580-b30f-11e9-9bc4-b6a4823ae9e8.jpg)

---

## Wymagania

Pa11y Dashboard to aplikacja [Node.js][node], która wymaga stabilnej lub LTS wersji Node, obecnie w wersji 12 lub 14.

⚠️ W chwili obecnej Pa11y Dashboard nie działa z Node.js v16. **Użyj Node.js 12 lub 14**. ⚠️

Pa11y Dashboard wykorzystuje do przechowywania wyników testów bazę danych [MongoDB][mongo]. Baza danych nie musi znajdować się na tym samym serwerze lub komputerze, z którego działa Pa11y Dashboard.

Pa11y Dashboard używa [puppeteer](https://www.npmjs.com/package/puppeteer) do stworzenia bezgłowej instancji przeglądarki Chromium w celu przeprowadzenia testów. W niektórych środowiskach może to wymagać zainstalowania dodatkowych zależności. Na przykład w systemach Debian/Ubuntu może być konieczne zainstalowanie bibliotek `libnss3` i `libgconf-2-4`, aby móc uruchamiać testy na Pa11y Dashboard. Aby uzyskać szczegółowe informacje, jak to zrobić, zapoznaj się z dokumentacją dostawcy.


## Konfigurowanie pulpitu Pa11y

Aby uruchomić Pa11y Dashboard, zalecamy sklonowanie tego repozytorium lokalnie:

```sh
git clone https://github.com/pa11y/pa11y-dashboard.git
```

Następnie zainstaluj zależności:

```sh
cd pa11y-dashboard
npm install
```

### Instalacja MongoDB

Instrukcje dotyczące instalowania i uruchamiania MongoDB wykraczają poza zakres tego dokumentu. W razie wątpliwości zapoznaj się z [instrukcją instalacji MongoDB](https://docs.mongodb.com/manual/installation/) aby uzyskać szczegółowe informacje o tym, jak zainstalować i uruchomić MongoDB w swoim systemie operacyjnym. Poniżej przedstawiono przykład procesu instalacji i konfiguracji systemu macOS.

Pa11y Dashboard korzysta obecnie z wersji 3 sterownika MongoDB Node.js, co oznacza, że [tylko serwery MongoDB w wersji 4.4 lub starszej są obsługiwane](https://docs.mongodb.com/drivers/node/current/compatibility/#mongodb-compatibility). Przed próbą uruchomienia Pa11y Dashboard upewnij się, że Twój serwer MongoDB spełnia wymagania.

#### Przykładowa instalacja MongoDB dla systemu macOS

W najnowszych wersjach systemu macOS (10.13 lub nowszej) możesz użyć [Homebrew](https://brew.sh/), aby zainstalować MongoDB Community Edition. Nowsze wersje MongoDB są nieprzetestowane i nie są obsługiwane.

Stuknij w MongoDB Homebrew:

```sh
brew tap mongodb/brew
```

Zainstaluj obsługiwaną społecznościową wersję MongoDB:

```sh
brew install mongodb-community@4.4
```

Uruchom serwer MongoDB:

```sh
brew services start mongodb/brew/mongodb-community@4.4
```

Sprawdź, czy usługa została poprawnie uruchomiona:

```sh
$ brew services list
Name              Status  User       Plist
mongodb-community started pa11y      /Users/pa11y/Library/LaunchAgents/homebrew.mxcl.mongodb-community.plist
```

### Konfigurowanie pulpitu Pa11y

Ostatnim krokiem przed uruchomieniem Pa11y Dashboard jest zdefiniowanie dla niego konfiguracji. Można to zrobić na dwa sposoby:

#### Opcja 1: Używanie zmiennych środowiskowych

Każdą konfigurację można ustawić za pomocą zmiennej środowiskowej, a nie pliku konfiguracyjnego. Na przykład, aby uruchomić aplikację na porcie`8080`, możesz użyć następujących opcji:

```sh
PORT=8080 node index.js
```

[Dostępne konfiguracje](#konfiguracje) są udokumentowane w następnej sekcji.

#### Opcja 2: Korzystanie z plików konfiguracyjnych

Możesz zapisać konfigurację Pa11y Dashboard w pliku JSON. Możesz użyć różnych plików konfiguracyjnych dla każdego środowiska, w którym planujesz uruchomić Pa11y Dashboard. Możesz wybrać konkretne środowisko do uruchomienia aplikacji, ustawiając zmienną środowiskową `NODE_ENV`:

```sh
NODE_ENV=development node index.js
```

W tym repozytorium znajdują się trzy przykładowe pliki, które można skopiować i dostosować do własnych upodobań:

```sh
cp config/development.sample.json config/development.json
cp config/production.sample.json config/production.json
cp config/test.sample.json config/test.json
```

[Dostępne konfiguracje](#konfiguracje) są udokumentowane w następnej sekcji.

Jeśli napotkasz problemy, sprawdź [przewodnik rozwiązywania problemów][#rozwiazywanie-problemow].

## Konfiguracje

### port

*(liczba)* Port, na którym ma zostać uruchomiona aplikacja. Ustaw za pomocą pliku konfiguracyjnego lub zmiennej środowiskowej `PORT`.

### noindex

*(boolean)* Jeśli ustawione na `true` (domyślnie), pulpit nie będzie indeksowany przez wyszukiwarki. Ustaw `false`, aby zezwolić na indeksowanie. Ustaw za pomocą pliku konfiguracyjnego lub zmiennej środowiskowej `NOINDEX`.

### readonly

*(boolean)* Jeśli ustawione na `true`, użytkownicy nie będą mogli dodawać, usuwać ani uruchamiać adresów URL (domyślnie `false`). Ustaw za pomocą pliku konfiguracyjnego lub zmiennej środowiskowej `READONLY`.

### siteMessage

*(string)* Wiadomość, która ma być wyświetlana w widocznym miejscu na stronie głównej witryny. Domyślnie `null`.

### webservice

Może to być obiekt zawierający [konfiguracje Pa11y Webservice][pa11y-webservice-config] lub ciąg będący podstawowym adresem URL instancji [Pa11y Webservice][pa11y-webservice], którą uruchamiasz oddzielnie. Jeśli używasz zmiennych środowiskowych, poprzedź vars usługi sieci Web prefiksem `WEBSERVICE_`.

## Współpraca i wkład

Istnieje wiele sposobów wniesienia wkładu do Pa11y Dashboard, omówimy je w [przewodniku dotyczącym wkładu](CONTRIBUTING.md) dla tego repozytorium.

Jeśli chcesz udostępnić trochę kodu, musisz sklonować repozytorium i skonfigurować zgodnie z opisem w [przewodniku konfiguracji](#setup). YNastępnie musisz uruchomić aplikację w trybie testowym za pomocą:

```sh
NODE_ENV=test node index.js
```

Będziesz teraz mógł uruchamiać następujące polecenia:

```sh
make verify              # Zweryfikuj cały kod (ESLint)
make test                # Uruchom wszystkie testy
make test-integration    # Uruchom testy integracyjne
```

Aby skompilować JavaScript i CSS po stronie klienta, potrzebujesz następujących poleceń. Skompilowany kod jest przekazywany do repozytorium.

```sh
make less    # Skompiluj CSS strony z plików LESS
make uglify  # Skompiluj i zbuguj JavaScript po stronie klienta
```

## Użyteczne zasoby

- [Konfigurowanie pulpitu dostępności od podstaw za pomocą Pa11y na DigitalOcean](https://una.im/pa11y-dash/)
- [Monitorowanie zgodności z dostępnością internmetową za pomocą Pa11y Dashboard](https://www.lullabot.com/articles/monitoring-web-accessibility-compliance-with-pa11y-dashboard)

## Rozwiązywanie problemów

### Typowe problemy

- Błędy `500` lub `Could not connect to pa11y-webservice`: komunikaty są często związane z MongoDB. Upewnij się, że masz zainstalowaną [odpowiednią wersję MongoDB][#installing-mongodb] i że baza działa — nie zawsze uruchamia się automatycznie.
- Komunikaty o błędach mówiące, że `pa11y-webservice isn't running`, mogą być spowodowane problemami z instalacją zależności. Spróbuj usunąć  katalog`pa11y-dashboard/node_modules` i uruchomić ponownie `npm install`.

### Utwórz nowy problem

Sprawdź [issue tracker][issues] pod kątem podobnych problemów przed utworzeniem nowego. Jeśli występujący problem nie jest objęty jednym z istniejących problemów, możesz [utworzyć nowy problem][create-issue]. Podaj numery wersji node.js i MongoDB oraz swój system operacyjny, a także wszelkie informacje, które mogą być przydatne podczas debugowania problemu.

## Wsparcie i migracja

Główne wersje Pa11y Dashboard są zwykle obsługiwane przez 6 miesięcy od ich ostatniego wydania pomocniczego. Oznacza to, że zostaną dodane zmiany na poziomie łatek, a błędy zostaną naprawione. W poniższej tabeli przedstawiono daty zakończenia wsparcia dla wersji głównych oraz ostatnią wersję pomocniczą dla tej wersji.

Twórca utrzymuje również [przewodnik migracji](MIGRATION.md), który pomoże Ci przeprowadzić migrację.

| :grey_question: | Wersja główna | Ostatnie mniejsze wydanie | Wersje Node.js | koiec wsparcia |
| :-------------- | :------------ | :------------------------ | :------------- | :------------- |
| :heart:         | 4             | N/A                       | 12+            | N/D            |
| :hourglass:     | 3             | 3.3.0                     | 8+             | 2022-05-26     |
| :skull:         | 2             | 2.4.2                     | 4+             | 2020-01-16     |
| :skull:         | 1             | 1.12                      | 0.10–6         | 2016-12-05     |

Jeśli otwierasz problemy z nimi związane, podaj wersję, której dotyczy problem.

## License

Pa11y Dashboard jest objęty licencją [GNU General Public License 3.0][info-license].<br/>
Copyright &copy; 2013–2020,  Zespół Pa11y i współpracownicy

[gpl]: http://www.gnu.org/licenses/gpl-3.0.html
[mongo]: http://www.mongodb.org/
[node]: http://nodejs.org/
[pa11y]: https://github.com/pa11y/pa11y
[pa11y-webservice-config]: https://github.com/pa11y/webservice#configurations
[issues]: https://github.com/pa11y/pa11y-dashboard/issues?utf8=%E2%9C%93&q=is%3Aissue
[create-issue]: https://github.com/pa11y/pa11y-dashboard/issues/new
[info-node]: package.json
[info-build]: https://travis-ci.org/pa11y/pa11y-dashboard
[info-license]: LICENSE
[shield-version]: https://img.shields.io/github/package-json/v/pa11y/pa11y-dashboard.svg
[shield-node]: https://img.shields.io/node/v/pa11y/pa11y-dashboard.svg
[shield-build]: https://img.shields.io/travis/pa11y/pa11y-dashboard/master.svg
[shield-license]: https://img.shields.io/badge/license-GPL%203.0-blue.svg

<!--
# Inne
lang - określany w app.js -->