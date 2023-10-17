// Lexical Scope

// Zakres leksykalny określany jest w momencie definiowania kodu

// lexing (tokenizing) - pierwsza faza pracy kompilatora polegająca na interpretowaniu ciągu tekstu kodu zródłowego na zrozumiałe dla silnika tokeny

// const name = 'John' zostaje rozłozone na ['const', 'name', '=', 'John']

// lexical scope to zakres określany w czasie trwania fazy leksykalnej (lexical time)

// jego strukturę określa informacja o tym gdzie definiowane są zmienne i bloki

let shadow = 1

function outer(arg1) {
  let shadow = 10 // shadowing - przysłonięcie - w tym przypadku zakresu globalnego przez zakres funkcyjny

  function inner(arg2) {
    console.log(arg1, arg2, shadow) // 1, 2, 10
  }

  inner(arg1 * 2)
}

outer(shadow)

// https://zacznijprogramowac.net/szybki-kurs-javascript/domkniecia-closures/#lexical-scope-zakres-leksykalny
