# 🌀 Recursion (Recursión)

## 💡 ¿Qué es?

Una técnica donde una función **se llama a sí misma** para resolver un problema dividiéndolo en **subproblemas más pequeños** del mismo tipo.

> "Para resolver un problema grande, resolvés versiones más pequeñas del mismo problema".

---

## 🧠 Estructura básica

```python
def funcion():
    if caso_base:
        return resultado_base
    else:
        return funcion(reducción_del_problema)
```

- **Caso base**: punto donde la función deja de llamarse a sí misma (condición de parada).
- **Paso recursivo**: el problema se reduce y se vuelve a llamar la función con esa versión más simple.

---

## ⚙️ Ejemplo clásico: Factorial

```python
def factorial(n):
    if n == 0:
        return 1            # caso base
    return n * factorial(n-1)  # paso recursivo
```

---

## 🧱 Ejemplo visual: Recursión de pila

```txt
factorial(4)
→ 4 * factorial(3)
→ 4 * 3 * factorial(2)
→ 4 * 3 * 2 * factorial(1)
→ 4 * 3 * 2 * 1 * factorial(0)
→ 4 * 3 * 2 * 1 * 1
→ 24
```

---

## 🧩 Ejemplos comunes

| Problema             | Usa Recursión |
|----------------------|---------------|
| Factorial            | ✅             |
| Fibonacci            | ✅ (pero lento sin DP) |
| Binary Search        | ✅             |
| Torres de Hanoi      | ✅             |
| DFS en árboles/grafos| ✅             |
| Backtracking (sudoku, n-reinas) | ✅ |

---

## 🔁 Recursión vs Iteración

| Característica        | Recursión                         | Iteración                         |
|-----------------------|----------------------------------|----------------------------------|
| Usa pila de llamadas  | ✅ (stack de llamadas)            | ❌                                |
| Más elegante/simple   | ✅ (más expresivo)                | ❌ (pero más eficiente a veces)  |
| Puede causar stack overflow | ✅                            | ❌                                |
| Más fácil de convertir a DP| ✅                            | ✅                                |

---

## 💥 Cuidado

- Puede explotar si no tiene **caso base bien definido**.
- Muchas llamadas recursivas → **stack overflow**.
- En problemas de tipo **Fibonacci**, puede ser exponencial sin memoization.

---

## ✨ Optimización: Memoization (ver Dynamic Programming)

```python
from functools import lru_cache

@lru_cache(maxsize=None)
def fib(n):
    if n <= 1:
        return n
    return fib(n - 1) + fib(n - 2)
```

---

## 🧠 Consejo mental

> Si el problema puede **dividirse en sí mismo**, y hay una condición clara para detenerse, probablemente puedas resolverlo con recursión.

---

## 🚩 Bonus: Tail Recursion

Algunos lenguajes optimizan "tail recursion" (la llamada recursiva es lo último que se hace).  
Python **NO** optimiza tail recursion → se recomienda iteración si el stack es muy profundo.

---
