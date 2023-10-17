// Scope

// Zarządzanie zmiennymi to jest fundamentalną cechą języka programowania i wymaga złozonego systemu zasad.
// System ten nazywamy zakresem (scope)
// Jego rolę mozemy sprowadzić do określenia gdzie i w jaki sposób zmienne mogą być odnalezione
// Zmienne mogą być wyszukiwane na potrzeby przypisania referencji (tzw. LHS - left hand side look-up)
//lub zwrócenia wartości (tzw. RHS - right hand side look-up).

// Engine & Compilator & Scope

// Engine - odpowiedzialny za kompilacje i wykonanie kodu

// Compiler - odpowiedzialny za parsowanie i 'przygotowanie' kodu
// parsowanie - proces analizowania tekstu (np. kodu źródłowego) w celu przekształcenia go w strukturę danych zrozumiałą dla komputera

// Scope - odpowiedzialny za gromadzenie i zarządzanie zadeklarowanymi zmiennymi, i tym, w jaki sposób te informacje dostępne są dla aktualnie wykonywanego kodu

// Global Scope: Zmienne zdefiniowane poza jakimkolwiek blokiem lub funkcją są dostępne globalnie w całym skrypcie.
// Są to zmienne, które można uznać za globalne, ponieważ są dostępne wszędzie.

// Local Scope: Zmienne zdefiniowane wewnątrz bloku, funkcji lub pętli są dostępne tylko wewnątrz tego bloku, funkcji lub pętli.
// Są to zmienne, które można uznać za lokalne.
