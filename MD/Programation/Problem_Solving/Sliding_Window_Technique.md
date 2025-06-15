# 🪟 Sliding Window Technique

## 💡 ¿Qué es?

Una técnica usada principalmente en **arrays o strings**, donde se analiza una **subsecuencia continua (una ventana)** que se **"desliza"** sobre la estructura de datos para resolver problemas de forma **eficiente**.

> Ideal cuando necesitás analizar partes contiguas (como sumas, máximos, substrings) sin recalcular todo cada vez.

---

## 🧠 ¿Por qué sirve?

Reduce la complejidad de algoritmos que harían trabajo redundante.  
En vez de recalcular toda la ventana cada vez, **se actualiza usando la información anterior**.

---

## 📦 Cuándo usarla

Usala si el problema:
- Usa **arrays o strings**.
- Pide trabajar con **subconjuntos contiguos**.
- Implica **sumas, máximos, mínimos, frecuencias** sobre una ventana.
- Quiere saber **la primera vez que algo sucede, el máximo actual, o cuántas veces**.

---

## 🔁 Tipos de ventanas

1. **Ventana fija (Fixed-size)**  
   Usás cuando el tamaño `k` de la ventana es constante.

2. **Ventana variable (Dynamic-size / Two Pointers)**  
   Usás cuando el tamaño de la ventana cambia según condiciones.

---

## 📌 Ejemplo 1: Ventana fija — suma máxima de subarray de tamaño `k`

```python
def max_sum_subarray(arr, k):
    max_sum = curr_sum = sum(arr[:k])
    for i in range(k, len(arr)):
        curr_sum += arr[i] - arr[i - k]
        max_sum = max(max_sum, curr_sum)
    return max_sum
```

🔧 En vez de recalcular la suma entera cada vez, simplemente se **resta el primero y se suma el nuevo elemento**.

---

## 📌 Ejemplo 2: Ventana variable — Substring más largo sin repetir caracteres

```python
def length_of_longest_substring(s):
    seen = set()
    left = max_len = 0
    for right in range(len(s)):
        while s[right] in seen:
            seen.remove(s[left])
            left += 1
        seen.add(s[right])
        max_len = max(max_len, right - left + 1)
    return max_len
```

🎯 La ventana se expande o contrae dinámicamente, controlando los caracteres repetidos.

---

## 📊 Complejidad

- Tiempo: `O(n)` en la mayoría de los casos.
- Espacio: `O(k)` o `O(n)` dependiendo de la estructura de soporte (sets, dicts, etc).

---

## 🧠 Ventajas

- Reduce bucles anidados innecesarios.
- Ideal para **optimización de rendimiento** en streams o procesamiento online.
- Muy intuitiva cuando se la practica un par de veces.

---

## 🔍 Ejemplos comunes

| Problema                                       | Tipo de ventana     |
|-----------------------------------------------|---------------------|
| Subarray con suma máxima de tamaño fijo       | Fija                |
| Longest substring sin caracteres repetidos     | Variable            |
| Número mínimo de operaciones para convertir    | Variable            |
| Detección de patrones en stream                | Fija/Variable       |
| Análisis de frecuencias (frecuencia de letras) | Fija/Variable       |

---

## 🔥 Tip final

Cuando pienses en usar bucles anidados para mirar subconjuntos contiguos, **pará y pensá si una ventana te lo permite hacer en 1 sola pasada**.

---
