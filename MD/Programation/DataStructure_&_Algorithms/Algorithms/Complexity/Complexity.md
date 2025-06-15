# ⏳🧠 Complejidad Temporal vs Espacial

---

## ⏳ Time Complexity (Complejidad de Tiempo)

### ¿Qué es?
Mide **cuántas operaciones** realiza un algoritmo **en función del tamaño de la entrada `n`**.

### ¿Por qué es importante?
Determina qué tan rápido se ejecuta el algoritmo.

### Ejemplo
```python
def suma_total(arr):
    total = 0         # O(1)
    for num in arr:   # O(n)
        total += num  # O(1)
    return total
```

- **Complejidad Temporal Total**: `O(n)`

---

## 🧠 Space Complexity (Complejidad de Espacio)

### ¿Qué es?
Mide cuánta **memoria adicional** necesita un algoritmo **además de la entrada**.

### ¿Por qué es importante?
Determina cuánta RAM o recursos usa el algoritmo.

### Ejemplo
```python
def duplicar_array(arr):
    nueva = []                   # O(1)
    for num in arr:              # O(n)
        nueva.append(num * 2)    # O(1)
    return nueva
```

- **Espacio para `nueva`**: `O(n)`
- **Complejidad Espacial Total**: `O(n)`

---

## ⚖️ Comparación

| Aspecto            | Time Complexity | Space Complexity |
|--------------------|------------------|------------------|
| ¿Qué mide?         | Operaciones      | Memoria usada    |
| Relevancia         | Velocidad        | Eficiencia       |
| Afectado por       | Bucles, recursión| Variables, arrays|
| Ejemplo clásico    | Búsqueda         | Copias de datos  |

---

## 📐 ¿Cómo calcular complejidad?

### 1. **Cuenta operaciones significativas**
- Acceso a arreglos
- Comparaciones
- Llamadas a funciones
- Asignaciones no constantes

```python
def ejemplo(arr):        # O(1)
    for x in arr:        # O(n)
        if x > 0:        # O(1)
            print(x)     # O(1)
```
**Resultado**: `O(n)`

---

### 2. **Suma y quédate con el término dominante**

```python
def doble_bucle(n):          
    for i in range(n):        # O(n)
        for j in range(n):    # O(n)
            print(i, j)       # O(1)
```
**Total**: `O(n * n)` → `O(n²)`

---

### 3. **Ignora constantes y factores menores**

```python
def algoritmo(arr):
    print(arr[0])           # O(1)
    for x in arr:           # O(n)
        print(x * 2)        # O(1)
```

**Total**: `O(1 + n)` → `O(n)`

---

### 4. **Considera llamadas recursivas**

```python
def factorial(n):
    if n == 0:
        return 1
    return n * factorial(n - 1)
```

- Llamadas recursivas: `n`
- **Time Complexity**: `O(n)`
- **Space Complexity** (por stack de llamadas): `O(n)`

---

## 🧪 Resumen para Calcular Complejidad

✅ Identifica bucles y recursión  
✅ Ignora constantes (ej. 2n + 5 → O(n))  
✅ Considera estructuras adicionales (arrays, diccionarios)  
✅ Para espacio, **cuenta variables adicionales**, no la entrada

---

¿Te gustaría una hoja de trucos con patrones típicos de complejidad para distintos tipos de estructuras y algoritmos?
