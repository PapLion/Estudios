# 🔄 Cyclic Sort

## 💡 ¿Qué es?

Una técnica eficiente para ordenar arrays **donde los elementos están dentro de un rango específico (1 a n)**  
La idea es **colocar cada número en su índice correcto en una sola pasada**, si no está ya ahí.

---

## 📦 Casos ideales

- Arrays de `1 a n`, sin repeticiones
- Encontrar números faltantes, duplicados
- Reordenamiento mínimo

---

## ⚙️ Ejemplo base

```python
def cyclic_sort(nums):
    i = 0
    while i < len(nums):
        correct_index = nums[i] - 1
        if nums[i] != nums[correct_index]:
            nums[i], nums[correct_index] = nums[correct_index], nums[i]
        else:
            i += 1
    return nums
```

---

## 🔍 Problemas clásicos

- Encontrar número duplicado
- Encontrar número faltante
- First missing positive
- All numbers missing

---

## ⏱ Complejidad

- Tiempo: `O(n)`
- Espacio: `O(1)`

---

## 🧠 Consejo mental

> Si el array contiene **valores entre 1 y n** sin orden, **cyclic sort** es casi siempre lo que buscás.
