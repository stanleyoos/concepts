// Closure

// domknięcie występuje wtedy gdy, gdy funkcja zapamiętuje i następnie wykorzystuje swój leksykalny zakres,
// nawet wtedy gdy jest wywołana poza nim

const outer = () => {
  const outsideScopeVar = "Get out!"

  const inner = () => {
    debugger
    return outsideScopeVar
  }

  return inner // wywołanie funkcji inner poza jej leksykalnym zakresem
}

const closure = outer()
console.log(closure()) // 'Get out!'

// dostęp do zmiennej jest wciąz mozliwy choć w teorii nie powinno tak być
// działanie funkcji outer zostało zakończone, a co za tym idzie ona i jej zakres zostały usunięte z kontekstu wykonania
// dostęp do zmiennej outsideScopeVar jest mozliwy właśnie dzięki domknięciu
