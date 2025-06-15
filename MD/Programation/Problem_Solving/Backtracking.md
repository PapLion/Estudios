# 🧩 Backtracking (Retroceso)

## 💡 ¿Qué es?

Técnica de **exploración de decisiones** en problemas de tipo "búsqueda".  
Explora todos los caminos posibles y **retrocede cuando un camino no lleva a solución válida**.

> "Explora → valida → retrocede si no sirve → prueba otro camino"

---

## 📦 ¿Cuándo usarlo?

- Generación de combinaciones/permutaciones
- Resolver sudokus, laberintos
- N-reinas
- Palabras en tablero (Word Search)
- Subconjuntos, particiones

---

## 🔁 Estructura base

```python
def backtrack(caso_actual):
    if condición_final:
        guardar_solución()
        return

    for opción in opciones_posibles:
        if opción válida:
            aplicar_opción()
            backtrack(nuevo_estado)
            deshacer_opción()
```

---

## ⚙️ Ejemplo: N-Queens

```python
def solve_n_queens(n):
    res = []
    board = [["."] * n for _ in range(n)]
    
    def is_valid(r, c):
        for i in range(r):
            if board[i][c] == "Q":
                return False
            if c - (r - i) >= 0 and board[i][c - (r - i)] == "Q":
                return False
            if c + (r - i) < n and board[i][c + (r - i)] == "Q":
                return False
        return True

    def backtrack(r):
        if r == n:
            res.append(["".join(row) for row in board])
            return
        for c in range(n):
            if is_valid(r, c):
                board[r][c] = "Q"
                backtrack(r + 1)
                board[r][c] = "."

    backtrack(0)
    return res
```

---

## 🧠 Consejo mental

> Pensá en árboles de decisiones. Cada nodo es una opción. Retrocedés cuando un nodo no lleva a una solución válida.

---

## 🛠️ Tip: Poda (Pruning)

- Podés optimizar el tiempo usando condiciones que **evitan caminos imposibles antes de explorarlos** (como `is_valid()` en el ejemplo).

---
