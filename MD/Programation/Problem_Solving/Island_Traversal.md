# 🏝️ Island Traversal

## 💡 ¿Qué es?

Técnica clásica para explorar **componentes conectados en un grid 2D**, como "islas" de 1s entre mares de 0s.  
Usa `DFS` o `BFS` para recorrer cada isla completamente una vez.

---

## 📦 ¿Cuándo usarlo?

- Contar islas
- Medir el área de una isla
- Verificar si dos islas son iguales
- Flood fill, caminos, laberintos

---

## ⚙️ Ejemplo con DFS

```python
def num_islands(grid):
    rows, cols = len(grid), len(grid[0])
    visited = set()

    def dfs(r, c):
        if (
            r < 0 or c < 0 or r >= rows or c >= cols or
            grid[r][c] == '0' or (r, c) in visited
        ):
            return
        visited.add((r, c))
        dfs(r+1, c)
        dfs(r-1, c)
        dfs(r, c+1)
        dfs(r, c-1)

    count = 0
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == '1' and (r, c) not in visited:
                dfs(r, c)
                count += 1

    return count
```

---

## 📐 Alternativas

- DFS (recursivo o con stack)
- BFS (con queue)
- Union-Find para contar grupos

---

## 🧠 Consejo mental

> Si ves una **matriz 2D con regiones conectadas**, pensá en "island traversal" con DFS o BFS.
