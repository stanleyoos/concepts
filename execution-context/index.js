// Execution context

// abstrakcyjny koncept środowiska w którym interpretowany i wykonywany jest kod JS
// za kazdym razem gdy uruchamiany jest kod JS, dzieje się to w Execution Context

// global execution context - domyślny kontekst wykonania który obsługuje kod nie znajdujący się wewnatrz zadnej funkcji, moze być jedynie jeden taki kontekst w programie JS

// functional execution context - za kazdym razem gdy wykonywana jest funkcja, tworzony jest nowy kontekst dla tej funkcji, kazda funkcja posiada swój własny kontekst

// execution stack - to miejsce w którym przechowywane są konteksty wykonywania,
// domyślnie trafia do niego Global Execution Context a następnie według zasady LIFO
// (last in, first out) pozostałe konteksty są do niego dodawane i w trakcie wykonywania, usuwane

const temp = 10 // global context
var old = 5 // global context
function first() {
  console.log("Start first!")

  function second() {
    console.log("Start second!")
  }

  second() // second functional context
}
first() // first functional context

// execution stack

// global context
// "first" function context
// "second" function context

// kolejność wykonania LIFO !!
// second -> first -> global
