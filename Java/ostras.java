    private void calcularPromedio() {
            String nombreRes = nombreTextField.getText();
            String cursoRes = cursoTextField.getText();
            double nota1Res = Double.parseDouble(nota1TextField.getText());
            double nota2Res = Double.parseDouble(nota2TextField.getText());
            double nota3Res = Double.parseDouble(nota3TextField.getText());
            double promedioRes = (nota1 + nota2 + nota3) / 3;
                if (promedio >= 7) {
                    String resultadoRes = "APROBADO";
                } else {
                    String resultadoRes = "REPROBADO";
                }
            resultadoLabel.setText(nombreRes + ", estudiante del curso " + cursoRes + ", tiene un promedio de " + String.format("%.2f", promedioRes) + ". Está " + resultadoRes + ".");
    }

private void borrarPromedio(){
     String nombre = this.nombreRes.setText("");
        String curso = this.cursoRes.setText("");
        double nota1 = this.nota1Res.setText("");
        double nota2 = this.nota2Res.setText("");
        double nota3 = this.nota3Res.setText("");
        double promedio = this.promedioRes.setText("");
        String resultado = this.resultadoRes.setText("");
}