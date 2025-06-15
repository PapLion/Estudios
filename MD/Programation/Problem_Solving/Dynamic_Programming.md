# 🧠 Programación Dinámica (Dynamic Programming)

## 💡 ¿Qué es?

Es una técnica de optimización para resolver **problemas complejos dividiéndolos en subproblemas más simples**, pero a diferencia de *Divide y Vencerás*, **evita repetir cálculos almacenando soluciones ya resueltas**.

> Se basa en la idea de **guardar resultados parciales (memoización o tabulación)** para no recalcularlos innecesariamente.

---

## 📦 ¿Cuándo usarla?

Usala si el problema tiene:

1. **Subestructura óptima:**  
   La solución óptima del problema completo se puede construir a partir de soluciones óptimas de subproblemas.

2. **Subproblemas superpuestos:**  
   Vas a resolver **los mismos subproblemas múltiples veces**, como en el caso del Fibonacci recursivo.

---

## 🔁 Enfoques

### 1. **Top-down (Memoización)**

Usás recursión, pero guardás los resultados en una tabla (diccionario o array).

```python
memo = {}
def fib(n):
    if n <= 1:
        return n
    if n not in memo:
        memo[n] = fib(n-1) + fib(n-2)
    return memo[n]
```

---

### 2. **Bottom-up (Tabulación)**

Construís la solución desde los casos base hacia arriba, usando iteraciones.

```python
def fib(n):
    if n <= 1:
        return n
    dp = [0] * (n+1)
    dp[1] = 1
    for i in range(2, n+1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n]
```

---

## 🧠 Ejemplos clásicos

| Problema                     | Tipo                | Qué se guarda                         |
|-----------------------------|---------------------|----------------------------------------|
| Fibonacci                   | Secuencia           | Valor de cada `f(n)`                   |
| Knapsack (Mochila 0/1)      | Optimización        | Máximo valor para capacidad `W`        |
| Edit Distance               | String              | Coste mínimo entre substrings          |
| Longest Common Subsequence  | String              | Longitud de subsecuencia común         |
| Coin Change                 | Combinatorio        | Mínimas monedas para un monto          |

---

## 🧮 Complejidad

Programación dinámica generalmente **reduce la complejidad exponencial a polinomial**.

Ejemplo:  
Fibonacci recursivo sin DP: `O(2^n)`  
Fibonacci con DP: `O(n)`

---

## 🧠 Cómo pensarlo como Dani

Tu forma de pensar natural al detectar repeticiones lógicas y querer optimizarlas se alinea mucho con este enfoque. Si en tu proyecto encontrás que **estás recalculando lo mismo una y otra vez**, pensá:
- ¿Puedo guardar esto en un dict?
- ¿Estoy repitiendo pasos de lógica que ya resolví?
- ¿Esto tiene un patrón acumulativo o combinatorio?

---

## 📌 Tip: Identificar problemas DP

Preguntate:
- ¿Hay decisiones múltiples por tomar (como tomar o no un ítem)?
- ¿La decisión depende de estados anteriores?
- ¿Hay "pasos" o "fases" acumulativas?

Si sí → probablemente sea un problema de DP.

---
