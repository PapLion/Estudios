# 📘 Clase: Algoritmos de Ordenamiento en Python

En esta clase estudiaremos los algoritmos de ordenamiento más conocidos, desde los más simples hasta los más eficientes. Todos los ejemplos están implementados en Python.

---

## 🔁 1. Bubble Sort

- Compara elementos adyacentes y los intercambia si están en el orden incorrecto.
- Tiempo: **O(n²)**

```python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            print(f"Comparando {arr[j]} y {arr[j+1]}")
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

# Ejemplo
arr = [5, 1, 4, 2, 8]
print("Ordenado:", bubble_sort(arr))
```

---

## 🧪 2. Insertion Sort

- Inserta elementos en la posición correcta de una lista ordenada a la izquierda.
- Tiempo: **O(n²)**

```python
def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        
        while j >= 0 and arr[j] > key:
            print(f"Moviendo {arr[j]} a la derecha")
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    return arr

# Ejemplo
arr = [12, 11, 13, 5, 6]
print("Ordenado:", insertion_sort(arr))
```

---

## ✅ 3. Selection Sort

- Selecciona el elemento más pequeño y lo coloca al inicio.
- Tiempo: **O(n²)**

```python
def selection_sort(arr):
    for i in range(len(arr)):
        min_idx = i
        for j in range(i+1, len(arr)):
            if arr[j] < arr[min_idx]:
                min_idx = j
        print(f"Intercambiando {arr[i]} con {arr[min_idx]}")
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr

# Ejemplo
arr = [64, 25, 12, 22, 11]
print("Ordenado:", selection_sort(arr))
```

---

## ⚡ 4. Quick Sort

- Usa divide y vencerás con un **pivote**.
- Tiempo promedio: **O(n log n)**, peor caso: **O(n²)**

```python
def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[0]
    menores = [x for x in arr[1:] if x <= pivot]
    mayores = [x for x in arr[1:] if x > pivot]
    return quick_sort(menores) + [pivot] + quick_sort(mayores)

# Ejemplo
arr = [10, 7, 8, 9, 1, 5]
print("Ordenado:", quick_sort(arr))
```

---

## 🧠 5. Merge Sort

- Divide el array en mitades y las ordena recursivamente.
- Tiempo: **O(n log n)**

```python
def merge_sort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2
        left_half = arr[:mid]
        right_half = arr[mid:]
        
        merge_sort(left_half)
        merge_sort(right_half)

        # Combinar
        i = j = k = 0
        while i < len(left_half) and j < len(right_half):
            if left_half[i] < right_half[j]:
                arr[k] = left_half[i]
                i += 1
            else:
                arr[k] = right_half[j]
                j += 1
            k += 1
        
        while i < len(left_half):
            arr[k] = left_half[i]
            i += 1
            k += 1
        
        while j < len(right_half):
            arr[k] = right_half[j]
            j += 1
            k += 1
    return arr

# Ejemplo
arr = [38, 27, 43, 3, 9, 82, 10]
print("Ordenado:", merge_sort(arr))
```

---

## 🏔️ 6. Heap Sort

- Convierte el array en un **heap** y extrae el elemento máximo.
- Tiempo: **O(n log n)**

```python
def heapify(arr, n, i):
    largest = i
    l = 2*i + 1
    r = 2*i + 2
    
    if l < n and arr[l] > arr[largest]:
        largest = l
    if r < n and arr[r] > arr[largest]:
        largest = r
    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, n, largest)

def heap_sort(arr):
    n = len(arr)
    
    # Construir el heap
    for i in range(n//2 - 1, -1, -1):
        heapify(arr, n, i)
    
    # Extraer elementos uno por uno
    for i in range(n-1, 0, -1):
        arr[i], arr[0] = arr[0], arr[i]
        heapify(arr, i, 0)
    return arr

# Ejemplo
arr = [4, 10, 3, 5, 1]
print("Ordenado:", heap_sort(arr))
```

---

## 🧪 7. Timsort (usado por Python)

- Combinación de **Merge Sort** y **Insertion Sort**.
- Optimizado para datos reales y parcialmente ordenados.
- Tiempo: **O(n log n)** en el peor caso.

```python
# Python usa Timsort en sort() y sorted()
arr = [5, 2, 9, 1, 5, 6]
arr.sort()  # Ordena en el lugar
print("Con sort():", arr)

arr = [5, 2, 9, 1, 5, 6]
print("Con sorted():", sorted(arr))  # Crea una nueva lista ordenada
```

---

¿Quieres ver una tabla comparativa o practicar con problemas reales usando estos algoritmos? ✨
