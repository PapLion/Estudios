public void calcular() {
    String nombre = this.nom.getText();
    String precioStr = this.pre.getText();
    String cantidadStr = this.cant.getText();
    String ivaStr = this.Iva.getText();

    double precio = Double.parseDouble(precioStr);
    int cantidad = Integer.parseInt(cantidadStr);
    double iva = Double.parseDouble(ivaStr);

    double subtotal = precio * cantidad;

    double total = subtotal + (subtotal * iva);

    this.tp.setText(nombre + ", la cantidad a pagar es: " + total);
}

public void borrar() {
    this.nom.setText("");
    this.pre.setText("");
    this.cant.setText("");
    this.Iva.setText("");
    this.tp.setText("");
}