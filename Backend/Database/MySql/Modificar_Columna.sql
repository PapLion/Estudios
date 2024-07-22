Use Bufete;
ALTER TABLE abogado
Drop Column Id_Case,
Add Id_Case int NOT NULL, 
ADD FOREIGN KEY (Id_Case) References cases(Id_Case);