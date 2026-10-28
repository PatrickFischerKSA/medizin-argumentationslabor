# Medizin / Denken

Interaktive Lernumgebung zur Argumentationslehre für die Sekundarstufe II. Material: Alena Buyx im Gespräch mit Jochen Wegner, «Darf Medizin alles, was sie kann?», DIE ZEIT, 21.10.2026.

## Unterricht

Acht Themenblöcke, 32 eigenständig formulierte Argumentrekonstruktionen, kommentierte Gegenproben, neun Denkwerkzeuge, acht Diagnoseübungen, Argumentkarte, Schreibauftrag und Lernjournal. Basis und Fortgeschritten teilen dieselben Materialien; die Vertiefung ergänzt methodische Prüfhinweise. Kein automatisches Urteil über Wahrheit, Gültigkeit oder Qualität einer Position.

Der Kernpfad zeigt die ersten zwei Karten jeder Einheit, der vollständige Pfad alle vier. Der Argumentatlas bleibt unabhängig davon vollständig durchsuchbar. Verlinkung zum Beispiel: `?von=1&bis=8&umfang=core#start` oder `?von=5&bis=6&umfang=all#einheiten`.

Vier Lektionen: Quellenarbeit; Rekonstruktion; Gegenprobe; Stellungnahme mit Peerfeedback. Bewertung nach Rekonstruktionsgenauigkeit, Belegqualität, Explikation von Normen, fairer Abwägung und begrenztem Urteil.

## Material und Fundstellen

Seitenangaben beziehen sich auf die achtseitige bereitgestellte bereinigte PDF-Lesefassung, nicht auf eine Seitenzählung der ZEIT-Website. Die Karten sind keine vollständige Transkription. Es gibt keine erfundenen Filmzeitmarken. Im Gesprächsbereich können Lernende ihre MP4 und ihr PDF lokal öffnen und tatsächliche Filmzeiten sichern. Dateien werden nicht hochgeladen und müssen nach Neuladen erneut gewählt werden. Der verlinkte Originalbeitrag ist ein weiterer Zugang, kann aber Zugangsbeschränkungen haben.

Volltext und 788-MB-Film werden nicht öffentlich dupliziert. Ein einzelnes Filmstandbild dient der Identifikation des analysierten Gesprächs (DIE ZEIT, 03:00). Die Originalmaterialien müssen im Unterricht separat bereitgestellt werden.

## Technik

Buildless HTML, CSS, JavaScript. Einstieg: `index.html`. Lokaler Server: `python3 -m http.server 8765`. GitHub Pages: main-Branch, Repository-Wurzel. `.nojekyll` deaktiviert Jekyll.

Eingaben bleiben im lokalen Browser. Markdown-Export enthält Freitexte und Einheitenstatus; JSON-Sicherung enthält auch Selbstkontrolle, Quizantworten und Lernniveau. Ein JSON-Import ersetzt nach Bestätigung den aktuellen Stand. Browserdaten können gelöscht werden: regelmässig exportieren. Schriftarten werden über Google Fonts geladen, Systemschriften funktionieren als Fallback. GitHub verarbeitet beim Seitenaufruf übliche Verbindungsdaten.

`node tests/smoke.cjs` prüft Datenintegrität, Fundstellen, Asset-Verweise und JavaScript-Syntax. `python3 build_content.py` erzeugt die Inhaltsdatei und den Markdown-Atlas aus der redaktionellen Quelle.

## Quellen und Grenzen

Siehe [QUELLEN.md](QUELLEN.md). Umsetzung orientiert sich am [Klima-Argumentationslabor](https://patrickfischerksa.github.io/klima-argumentationslabor/). Das dortige allgemeine Handbuch wird als externe Vertiefung verlinkt.
