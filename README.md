# IM2 Arbeitsreflexion

**Human Hater**  
Nyah Plozza und Leonie Eigenheer, 12.06.2026

## Ausgangsidee

Die Grundidee unserer Website ist, dass ein Dino die Menschen hasst, weil er sie für das Aussterben vieler Tierarten verantwortlich macht. Er nutzt jede Gelegenheit, um den Besucherinnen und Besuchern ein schlechtes Gewissen zu machen und sie auf eine übertriebene, humorvolle Art mit ihrer Rolle als Mensch zu konfrontieren.

Der Dino schreibt seinen Feinden einen Brief, der zuerst noch relativ harmlos wirkt, sich dann aber immer mehr als Werk eines Human-Haters herauskristallisiert. Die ganze Website ist deshalb wie ein Brief aufgebaut: Man öffnet zuerst den Umschlag und gelangt danach auf die eigentliche Briefseite, auf der der Dino seine Wut auf die Menschen ausdrückt.

Die Arbeit soll vor allem lustig sein und nicht zu ernst genommen werden. Uns war wichtig, dass die Website eine ironische, absurde und sarkastische Stimmung hat. Schon bei der Konzeption hatten wir viel Spass, und auch beim Coden haben wir uns über jeden funktionierenden Schritt gefreut.

Das Thema der ausgestorbenen Tiere fanden wir beide von Anfang an spannend. Erst nach der Themenwahl haben wir genauer entschieden, welche Richtung unser Projekt nehmen soll. Das erste ausgestorbene Tier, das uns einfiel, war der Dino. Daraus entstand schnell die Idee, ihn zur Hauptfigur der Website zu machen. Die restliche Geschichte und die einzelnen Elemente entwickelten sich danach durch gemeinsames Brainstorming.

Die Besucherinnen und Besucher sollen sich durch die Website klicken, zufällig ausgestorbene Tiere entdecken und diese in einer Regret List speichern können. Dadurch verbindet die Website Informationen über ausgestorbene Tiere mit einer spielerischen und sarkastischen Erzählweise.

## Konzept und Figma

Als Erstes haben wir unser Konzept auf Papier geplant und sind erst danach ins Figma gegangen. Der Dino und seine genervten Kommentare bildeten von Anfang an das Grundgerüst unserer Idee. Die Regret List, also das Speichern der einzelnen ausgestorbenen Tiere, kam erst gegen Ende der Konzeptphase dazu. Wir fanden dieses Feature passend, weil sich der Mensch dadurch wenigstens ein bisschen bessern kann.

Am Anfang war unsere Website noch sehr frei und kompliziert aufgebaut. Es gab noch keine klaren Bereiche oder Boxen, die sich einfach in Code übersetzen liessen. Deshalb mussten wir zuerst überlegen, aus welchen Blöcken die Website bestehen soll und wie wir das Layout technisch sinnvoll umsetzen können.

Durch Gespräche mit den Dozenten konnten wir viele mögliche Fehler früh vermeiden. Dadurch ist die finale Website sehr nah an unserem Figma geblieben. Nur kleinere Dinge haben sich während der Umsetzung verändert, zum Beispiel die Anordnung der Regret-List-Karten in der Mobile-Version.

Durch unsere letzten Projekte war uns bewusst, dass freie und verspielte Layouts gestalterisch spannend sind, in der Umsetzung aber schnell kompliziert werden können. Deshalb mussten wir beim Figma darauf achten, dass unsere Gestaltung zwar kreativ wirkt, aber technisch noch realistisch umsetzbar bleibt. Besonders bei frei platzierten Elementen, Animationen und responsiven Ansichten kann es sonst schwierig werden, die Website auf verschiedenen Bildschirmgrössen stabil darzustellen.

## Gestaltung

Der Brief wirkt so, als wäre er vom Dino selbst geschrieben worden. Die grauen Kommentare sind zusätzliche Sprüche des Dinos, die den Menschen die ganze Zeit vor Augen führen, was sie angerichtet haben. Dadurch entsteht der Eindruck, dass der Dino nicht nur informiert, sondern die Besucherinnen und Besucher direkt anspricht und provoziert.

Die handschriftlichen Schriften unterstützen diese Idee sehr gut. Sie lassen die Website persönlicher, direkter und etwas chaotischer wirken, als würde der Dino seine Wut wirklich selbst auf den Brief schreiben. Auch die Farben und Illustrationen passen zu diesem Stil: Die Website soll nicht clean oder neutral wirken, sondern emotional, verspielt und etwas übertrieben.

Die Karten in der Regret List greifen diese Gestaltung weiter auf. Jedes gespeicherte Tier bekommt eine eigene Karte, fast wie ein kleiner Eintrag in einer Sammlung von Dingen, für die sich die Menschen schämen sollten. Dadurch wird die Regret List nicht nur zu einer technischen Speicherfunktion, sondern zu einem Teil der Erzählung.

## Technische Umsetzung

Die Website ist in mehrere Seiten aufgeteilt. Zuerst öffnet man einen geschlossenen Briefumschlag, danach gelangt man zur geöffneten Briefseite mit dem Dino, der Sprechblase, dem Wikipedia-Ausschnitt und den interaktiven Buttons. Von dort aus können Tiere in der Regret List gespeichert werden, wo sie als einzelne Karten angezeigt werden.

Unsere API enthält 804 Tiere, die nach dem Zufallsprinzip angezeigt werden. Unsere Idee und die Interaktion der Website haben sich deshalb an diese technische Grundlage angepasst.

Ein Hauptproblem zu Beginn der Arbeit war, dass die API zwar Links zu Bildern der einzelnen Tiere enthielt, diese aber nicht funktionierten. Dadurch mussten wir zuerst fast auf Bilder verzichten. Während der weiteren Planung wurde uns jedoch klar, dass Bilder für unsere Website wichtig sind. Deshalb haben wir einen Bereich eingebaut, der direkt zur jeweiligen Wikipedia-Seite des Tieres führt. Dort gibt es meistens passende Bilder, weshalb diese Lösung für uns ein guter Kompromiss war.

Die Tiere werden mit `localStorage` im Browser gespeichert. Wenn man auf der Hauptseite auf den Regret-Button klickt, wird das aktuell angezeigte Tier als JavaScript-Objekt in eine Liste gelegt und mit `JSON.stringify()` unter dem Key `regretList` gespeichert. Auf der Regretlist-Seite wird diese Liste mit `localStorage.getItem("regretList")` wieder ausgelesen, mit `JSON.parse()` zurück in JavaScript-Daten umgewandelt und danach als Karten auf der Seite angezeigt. Die Speicherung passiert also lokal im Browser, nicht auf einem Server.
Die gespeicherten Tiere bleiben auch nach dem Neuladen der Seite im Browser erhalten und werden erst gelöscht, wenn der Browser-Speicher manuell geleert wird.
Tiere können bewusst nicht direkt aus der Regret List gelöscht werden, da dies nicht der Intention des Dinos entspricht. Die Regret List ist nur dann leer, wenn noch keine Tiere hinzugefügt wurden.

## Herausforderungen

Während der Umsetzung gab es mehrere Herausforderungen. Ein erstes Problem war die API, da die Bildlinks nicht wie erwartet funktionierten. Deshalb mussten wir eine andere Lösung finden und die Wikipedia-Seiten der Tiere einbinden.

Schwierig war auch das Zusammenspiel der verschiedenen interaktiven Elemente. Der Kill-Button lädt ein neues Tier, der Regret-Button speichert das aktuell angezeigte Tier, und die Regret List muss diese gespeicherten Daten später wieder korrekt anzeigen. Dabei mussten wir darauf achten, dass die Buttons nach jedem Schritt wieder den richtigen Zustand haben.

Auch die Gestaltung für verschiedene Bildschirmgrössen brauchte viel Feinarbeit. Besonders die Karten in der Regret List, die Footer-Buttons und einzelne Texte mussten so angepasst werden, dass sie auf unterschiedlichen Screens gut funktionieren.

Zu den Bugs gehörten zum Beispiel ein Regret-Button, der nach dem Laden eines neuen Tieres schwarz blieb, Hover-Bilder, die nicht sofort korrekt angezeigt wurden, und eine Animation, deren Grösse sich beim Öffnen verändert hat.

Ausserdem war es schwierig, eine Lottie-Animation eines Dinos zu finden, die zu unserem Konzept passte. Wenn eine Animation gut gepasst hätte, war sie meistens kostenpflichtig. Im Nachhinein hätten wir uns vielleicht früher um den Dino kümmern sollen, da er eine sehr wichtige Rolle in unserem Konzept einnimmt. Trotzdem konnten wir am Ende eine gute Alternative finden. Eine eigene Animation zu erstellen erschien uns für dieses Projekt zu aufwendig.

## Zusammenarbeit und Arbeitsprozess

Wir haben zu zweit an diesem Projekt gearbeitet. Deshalb gibt es zwei JavaScript-Dateien und zwei CSS-Dateien: Eine Datei ist hauptsächlich für die Hauptseite zuständig, die andere für die Regret List. So konnten wir die Arbeit besser aufteilen und die beiden Bereiche der Website getrennt weiterentwickeln.

Nyah hat vor allem an der Mainpage gearbeitet, Leonie hauptsächlich an der Regret List. Dabei haben wir uns stark an unserem Figma orientiert und im Verlauf der Umsetzung keine grossen gestalterischen Veränderungen vorgenommen.

Den Grundstein der Website haben wir selbst programmiert. Besonders geholfen hat uns dabei die Beispielaufgabe mit den Politiker\*innen aus der Vorlesung, da wir dieses Prinzip auch für die Auflistung unserer Regret List verwenden konnten. Sobald wir nicht mehr weiterkamen oder es komplizierter wurde, haben wir mit ChatGPT gearbeitet. Das war vor allem dann hilfreich, wenn bestimmte Themen im Unterricht noch nicht behandelt wurden oder wir uns bei der Umsetzung nicht mehr sicher waren.

Den generierten Code haben wir jeweils kontrolliert, eingefügt und versucht nachzuvollziehen, damit wir verstehen konnten, was genau umgesetzt wurde. Schwierige Aspekte waren zum Beispiel die Responsiveness zwischen den verschiedenen Bildschirmgrössen sowie das Zusammenspiel von JavaScript, `localStorage` und den interaktiven Buttons.

## Learnings

Wir haben gelernt, wie HTML, CSS und JavaScript zusammenarbeiten. HTML gibt der Website die Struktur, CSS gestaltet das Aussehen, und JavaScript macht die Website interaktiv. Besonders spannend war zu sehen, wie Buttons, Animationen und neue Inhalte durch JavaScript gesteuert werden können.

Über APIs haben wir gelernt, wie man externe Daten in eine Website laden kann. Mit `localStorage` haben wir verstanden, wie Informationen im Browser gespeichert werden können, ohne dass man dafür einen Server braucht. Dadurch konnten wir die gespeicherten Tiere auch auf einer anderen Seite wieder anzeigen.

Beim nächsten Projekt würden wir früher eine klare Struktur für die Dateien und den Code festlegen. Dadurch könnten wir vermeiden, dass CSS- oder JavaScript-Dateien unübersichtlich werden oder doppelte Funktionen entstehen.

Auch die Responsiveness würden wir von Anfang an stärker mitplanen. Wir haben gemerkt, dass es einfacher ist, Layouts direkt für verschiedene Bildschirmgrössen zu denken, statt sie erst am Schluss anzupassen. Das konnten wir zum Glück noch während der Arbeit am Figma einplanen.

## Fazit

Uns gefällt vor allem die Kreativität unseres Konzeptes. Besonders spannend finden wir, wie der Dino die ausgestorbenen Tiere beschützt und den Besucherinnen und Besuchern mithilfe der API Fakten über diese Tiere vermittelt.

Wir finden, dass unsere Website bereits genügend Funktionen hat. Weiterentwickeln könnte man sie zum Beispiel, indem man anstelle der eingebundenen Wikipedia-Seite passende Bilder direkt in die Website integriert. Diese Bilder könnte man eventuell aus Wikipedia beziehen und mit den API-Daten verbinden.

Eine weitere Idee wäre ein Button, mit dem man theoretisch die ganze Regret List löschen könnte. Diese Funktion könnte dann aber vom Dino blockiert werden, weil das Löschen der gespeicherten Tiere nicht zu seiner Intention passt. Der Kreativität wären hier keine Grenzen gesetzt.
