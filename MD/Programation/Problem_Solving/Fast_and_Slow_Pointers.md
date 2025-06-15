# 🐢🐇 Fast and Slow Pointers

## 💡 ¿Qué es?

Técnica donde usás dos punteros que se mueven a diferentes velocidades para detectar ciclos, colisiones o puntos clave en listas, arrays o paths.

---

## 📦 ¿Para qué sirve?

- Detectar ciclos en listas enlazadas
- Encontrar el inicio del ciclo
- Encontrar el punto medio de una lista
- Detectar número repetido (Floyd's cycle)
- Evitar recorrer dos veces la estructura

---

## ⚙️ Ejemplo: Detección de ciclo en lista enlazada

```python
def has_cycle(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    return False
```

---

## ⚙️ Ejemplo: Encontrar duplicado (Floyd’s Tortoise and Hare)

```python
def find_duplicate(nums):
    slow = nums[0]
    fast = nums[0]

    while True:
        slow = nums[slow]
        fast = nums[nums[fast]]
        if slow == fast:
            break

    slow = nums[0]
    while slow != fast:
        slow = nums[slow]
        fast = nums[fast]
    return slow
```

---

## ⏱ Complejidad

- Tiempo: `O(n)`
- Espacio: `O(1)`

---

## 🧠 Consejo mental

> Si necesitás **detectar repeticiones o ciclos** sin usar espacio extra, pensá en esta técnica.
