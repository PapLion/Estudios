# 🧵 Multithreaded Programming

## 💡 ¿Qué es?

Una forma de programar donde **varios hilos (threads)** se ejecutan al mismo tiempo (en paralelo o concurrentemente), compartiendo recursos y memoria.

---

## 📦 ¿Cuándo usarlo?

- Operaciones I/O pesadas (leer archivos, red).
- Procesos que pueden correr en paralelo.
- Aplicaciones en tiempo real, servidores, juegos, etc.

---

## ⚙️ Ejemplo en Python (con `threading`)

```python
import threading

def worker(id):
    print(f"Hilo {id} en ejecución")

threads = []
for i in range(3):
    t = threading.Thread(target=worker, args=(i,))
    threads.append(t)
    t.start()

for t in threads:
    t.join()
```

---

## 🧠 Problemas clásicos

- Race conditions
- Deadlocks
- Uso de locks, semáforos y colas para sincronización

---

## ⏱ Consideraciones

- CPU-bound ➜ usar **multiprocessing**
- I/O-bound ➜ usar **threading** o **asyncio**

---

## 🧠 Consejo mental

> Si tenés tareas **concurrentes o paralelas** que comparten memoria, pensá en threads (y cuidado con sincronizar bien).
