# Varför Service Worker

PWA står för "Progressive Web App" och Service Worker (SW) är en central del av det. Vad är PWA och varför bry sig?

De flesta använder privat sina mobiltelefoner när de ska göra något som till exempel ett bankärende. Som bank behöver
man möta kunden på mobilen. Ett alternativ är då att skapa en app som kunden installerar på sin telefon. 

Tyvärr finns det en del nackdelar med det.

* Kunden är bara villig att göra det om den har en relation med banken och kanske inte då heller. Presumtiva kunder kommer
inte att installera den.

* En app innebär att man behöver göra tre versioner av gränssnittet mot kunden, en för Apple, en för Android och en för
webbläsare. Det finns teknik, till exempel Flutter, som minskar ansträngningen genom att skriva en gång och sedan bygga
för alla tre plattformarna.

* Man behöver ha god teknisk kunskap om att skriva en app.

* Test på olika mobiler är nödvändigt.

* Underhållet av en app är omständligt eftersom varje uppdatering måste godkännas av Apple och Google. Ledtiden på
flera veckor är vanlig. 

* Om man har någon form av inkomst från appen kan Apple vilja ha en del av kakan.

Alternativet är att bara göra en webbapp som anpassar sig väl till olika fönsterstorlekar. Det är betydligt enklare och
ger ett större urval av tekniska lösningar. Men det finns nackdelar.

* Om kunden har dåligt eller inget nätverk fungerar den inte särskilt väl. Det går visserligen inte att se sitt saldo i en
app heller om man inte har nätverkskontakt men en webbapp kräver att mycket laddas ner varje gång. Bandbreddskravet är
helt enkelt mycket högre.

* Webbappen nås genom att användaren matar in en webbadress i webbläsaren om denne inte har lagt ett bokmärke. I motsats
till att klicka på en ikon på skärmen som i fallet med en app.

* Vissa saker går inte att göra som notifieringar och rita på hela skärmen.

## Progressive Web App

För att väga upp detta så har man skapat begreppet **PWA**. Det är en teknik som bryggar över en del av bristerna hos en
webbapp. Det gör det möjligt att **installera** en webbapp genom att klicka på en knapp i appen. Då blir det en ikon på
startskärmen som är sökbar på samma sätt som andra appar. Det finns ett API för att cacha tillgångar, typiskt det som är
statiska delar av användargränssnittet.

Man kan också skicka **notiser** och rita på hela skärmen, samt komma åt saker på enheten, till exempel kamera och mikrofon.

Om man vill, så kan man ha sin PWA i App store respektive Google Play.

Så PWA ska ge bästa av båda världar även om vi kanske inte är riktigt där än i alla delar och på alla plattformar. Därav
namnet, en PWA måste testa om en feature finns implementerad innan den använder den. Progressivt får den över tid
tillgång till fler features.

Tyvärr fungerar inte allt, trots att det ska göra det, enligt dokumentationen. Firefox på desktop ska stödja
notifieringar men det är trasigt just nu. Som alltid måste man testa på olika plattformar för att vara säker.

## Att bygga en PWA

För att kunna stödja en dålig nätverksförbindelse som ofta är fallet med en mobil, så behöver man en Service Worker. Det
är ett skript som arbetar i bakgrunden och ger möjligheter att hämta och cacha data. Den behövs också för att göra
pushnotiser.
