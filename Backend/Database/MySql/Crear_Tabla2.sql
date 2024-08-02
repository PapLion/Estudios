CREATE TABLE Cases (
Id_Case int NOT NULL auto_increment,
Tipo nvarchar(30),
Fecha_Inicial datetime,
Fecha_Final date,
Id_Abogado int NOT NULL,
Id_Client int NOT NULL,
PRIMARY KEY (Id_Case),
FOREIGN KEY (Id_Abogado) REFERENCES abogado(Id_Abogado)
);