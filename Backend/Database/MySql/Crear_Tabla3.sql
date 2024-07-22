CREATE TABLE Clientx (
Id_Client int NOT NULL auto_increment,
Nombre nvarchar(50) NOT NULL,
Apellido nvarchar(50),
DNI nvarchar(10) NOT NULL,
Antecedentes nvarchar(255) NOT NULL,
Fono nvarchar(10),
Direccion nvarchar(150),
Id_Case int NOT NULL,
PRIMARY KEY (Id_Client),
FOREIGN KEY (Id_Case) REFERENCES cases(Id_Case)
);