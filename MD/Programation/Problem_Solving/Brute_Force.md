# 🛠️ Brute Force (Fuerza Bruta)

## 💡 ¿Qué es?

Técnica donde simplemente **probás todas las combinaciones posibles** para encontrar una solución.

> "Hacé todo lo que se puede hacer, sin optimizar."

---

## 📦 ¿Cuándo usarla?

- Cuando el tamaño del problema es pequeño (`n ≤ 10⁴` o menos)
- Cuando querés validar un resultado o tener una primera versión funcional
- Cuando no sabés una estrategia eficiente aún

---

## ⚙️ Ejemplo: Subconjuntos de un conjunto

```python
def all_subsets(nums):
    res = []
    def backtrack(i, path):
        if i == len(nums):
            res.append(path)
            return
        backtrack(i + 1, path + [nums[i]])
        backtrack(i + 1, path)
    backtrack(0, [])
    return res
```

---

## ⚔️ Otro ejemplo: Fuerza bruta de contraseña

```python
import itertools

def brute_force_password(target):
    for length in range(1, 5):
        for comb in itertools.product('abc123', repeat=length):
            attempt = ''.join(comb)
            if attempt == target:
                return attempt
```

---

## 🧠 Consejo mental

> Úsalo como **primer paso**, pero sabé que en muchos casos **es muy ineficiente**.  
> Sirve mucho para entender el problema y luego buscar optimizaciones (como DP, greedy, etc.).

---

## ❌ Desventajas

- Muy lento con entradas grandes.
- No escala.
- No es elegante.

## ✅ Ventajas

- Simple de implementar.
- Útil para validar otros algoritmos.
- Siempre encuentra la solución si existe.

---
