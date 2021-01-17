

sp_help 'pacientes'

insert into Pacientes(Nombres, NumeroSeguro, CodigoPostal, Telefono, IdDoctor)
values
('Edison fierro', 123, '4-75', 7949940, 1),
('Nancy Vela', 987, '4-75', 314567, 2),
('Jhon Fierro', 80833, '4-75', 4508023, 3)


sp_help 'Doctor'
insert into Doctor(Nombres, Especialidad, NumeroCredencial,Hospital)
values 
('Rosa Quintero', 'Odontologa', 12345, 'Cardio Infantil'),
('Roberto Quintero', 'Medico General', 98765, 'Kennedy'),
('Agustina Quintero', 'Cardiologa', 65786, 'El bosque')

sp_help 'PacienteDoctors'

insert into PacienteDoctors (IdPaciente, IdDoctor)
values
(1, 1),
(2, 2),
(3, 3)


select * from Pacientes
