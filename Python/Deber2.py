# Enteros
a = 21 
b = 23
c = 22

# Operaciones con enteros
print("La raíz cuadrada de", a, "es:", a ** 0.5)
print("La raíz cuadrada de", b, "es:", b ** 0.5)
print("La raíz cúbica de", c, "es:", c ** (1/3))

# Flotantes
j = 45.2
d = 16.5
e = 125.7

# Operaciones con flotantes
print("La raíz cuadrada de", j, "es:", j ** 0.5)
print("La raíz cuadrada de", d, "es:", d ** 0.5)
print("La raíz cúbica de", e, "es:", e ** (1/3))

# Operaciones de módulo
# Declaración de variables para módulo float
f = 17.8
g = 4.2
print("El módulo de", f, "%", g, "es:", f % g)

# Declaración de variables para módulo int
h = 20
i = 3
print("El módulo de", h, "%", i, "es:", h % i)

# Ejemplos de concatenación y f-strings

# Ejemplo 1: Información del paciente
peso = 65
nombre = "Juan"

# Concatenación tradicional
print("El paciente " + nombre + " pesa " + str(peso) + " kilos.")
# Usando f-string
print(f"El paciente {nombre} pesa {peso} kilos.")

# Ejemplo 2: Compra de productos
producto = "manzana"
precio_unitario = "0.75"  # string
cantidad = 6
total = float(precio_unitario) * cantidad  # conversión de string a float

# Concatenación tradicional
mensaje = "Has comprado " + str(cantidad) + " " + producto + "s por un total de $" + str(total)
print(mensaje)
# Usando f-string
print(f"Has comprado {cantidad} {producto}s por un total de ${total}")

# Ejemplo 3: Información personal
nombre = "Ana"
edad = 25
altura = float(1.65)  # antes estaba como int(1.65), lo cual lo convertía en 1

# Concatenación tradicional
print("Mi nombre es " + nombre + ", tengo " + str(edad) + " años y mido " + str(altura) + " metros")
# Usando f-string
print(f"Mi nombre es {nombre}, tengo {edad} años y mido {altura} metros")