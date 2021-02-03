-- ***************************************************************************************
-- * Base de Datos para Control de Citas de Tu negocio
-- * Diseñada por:
-- *
-- * Version: 1.0.0
-- * Ultima modificación: 29/01/2021
-- * servidores de Bases de datos
-- * - PostgreSQL
-- ***************************************************************************************
-- * Creando Base de Datos
-- ***************************************************************************************
-- DROP DATABASE IF EXISTS "CitasDB";
-- CREATE DATABASE "CitasDB" WITH OWNER = Postgres E
--					NCODING = 'UTF8'
--					LC_COLLATE = 'es_SV.UTF-8'
--					LC_CTYPE = 'es_SV.UTF-8'
--					TABLESPACE = Pg_default
--					Connection LIMIT = - 1;
-- ***************************************************************************************
-- * Tablas Usuario
-- ***************************************************************************************
CREATE TABLE Usuarios (
    Uid_usuario varchar(255) NOT NULL,
    PRIMARY KEY (Uid_usuario),
    Nombre varchar(255) NOT NULL,
    Apellido varchar(255) NOT NULL,
    Telefono varchar(255) NOT NULL,
    Correo varchar(255) NOT NULL,
    IdFacebook varchar(255) NULL,
    Estado varchar(255) NOT NULL
);

-- ***************************************************************************************
-- * Tablas Accesos
-- ***************************************************************************************
CREATE TABLE Accesos (
    Uid_usuario varchar(255) NOT NULL,
    PRIMARY KEY (Uid_usuario),
    FOREIGN KEY (Uid_usuario) REFERENCES Usuarios (Uid_usuario),
    Usuario varchar(255) NOT NULL,
    Contraseña varchar(255) NOT NULL,
    Tipo char(1) NOT NULL
);

-- ***************************************************************************************
-- * Tablas Negocios
-- ***************************************************************************************
CREATE TABLE Negocios (
    Uid_negocio varchar(255) NOT NULL,
    PRIMARY KEY (Uid_negocio),
    Nombre varchar(255) NOT NULL,
    Descripcion varchar(255) NOT NULL,
    Uid_usuario varchar(255) NOT NULL,
    FOREIGN KEY (Uid_usuario) REFERENCES Usuarios (Uid_usuario),
    Estado varchar(255) NOT NULL
);

-- ***************************************************************************************
-- * Tablas Negocios Contacto
-- ***************************************************************************************
CREATE TABLE Inf_contato (
    Uid_negocio varchar(255) NOT NULL,
    PRIMARY KEY (Uid_negocio),
    FOREIGN KEY (Uid_negocio) REFERENCES Negocios (Uid_negocio),
    Telefono varchar(255) NOT NULL,
    Redes_sociales jsonb NOT NULL,
    Email varchar(255) NOT NULL
);

-- ***************************************************************************************
-- * Tablas Negocios Direcciones
-- ***************************************************************************************
CREATE TABLE Direcciones (
    Uid_negocio varchar(255) NOT NULL,
    PRIMARY KEY (Uid_negocio),
    FOREIGN KEY (Uid_negocio) REFERENCES Negocios (Uid_negocio),
    Departamento varchar(255) NOT NULL,
    Direccion varchar(255) NOT NULL,
    Url_direccion varchar(255) NOT NULL
);

-- ***************************************************************************************
-- * Tablas Negocios Configuracion
-- ***************************************************************************************
-- CSC: cantida de sevicios por cita
-- TEC: tiempo estimado por cita
-- ITC: intevalo de tiempo entre citas
-- CCD: Cantidad de Citas por Dia
CREATE TABLE Configuracion (
    Uid_negocio varchar(255) NOT NULL,
    PRIMARY KEY (Uid_negocio),
    FOREIGN KEY (Uid_negocio) REFERENCES Negocios (Uid_negocio),
    hora_inicio varchar(255) NOT NULL,
    hora_fin varchar(255) NOT NULL,
    Csc varchar(255) NOT NULL,
    Tec varchar(255) NOT NULL,
    Itc varchar(255) NOT NULL,
    Ccd varchar(255) NOT NULL
);

-- ***************************************************************************************
-- * Tablas Negocios Servicios
-- ***************************************************************************************
CREATE TABLE Servicios (
    Id_servicio varchar(255) NOT NULL,
    PRIMARY KEY (Id_servicio),
    Uid_negocio varchar(255) NOT NULL,
    FOREIGN KEY (Uid_negocio) REFERENCES Negocios (Uid_negocio),
    Nombre_servicio varchar(255) NOT NULL,
    Descipcion varchar(255) NOT NULL,
    Url_imagen varchar(255) NOT NULL,
    Precio decimal NOT NULL,
    Estado varchar(255) NOT NULL
);

-- ***************************************************************************************
-- * Tablas Citas
-- ***************************************************************************************
CREATE TABLE Citas (
    Id_cita varchar(255) NOT NULL,
    PRIMARY KEY (Id_cita),
    Uid_usuario varchar(255) NOT NULL,
    FOREIGN KEY (Uid_usuario) REFERENCES Usuarios (Uid_usuario),
    Uid_negocio varchar(255) NOT NULL,
    FOREIGN KEY (Uid_negocio) REFERENCES Negocios (Uid_negocio),
    Fecha timestamp NOT NULL,
    Estado varchar(255) NOT NULL
);

-- ***************************************************************************************
-- * Tablas Citas Detalle
-- ***************************************************************************************
CREATE TABLE Detalle (
  id_cita varchar(255) NOT NULL ,
  FOREIGN KEY (id_cita) REFERENCES Citas (id_cita),
  id_servicio varchar(255) NOT NULL,
  FOREIGN KEY (id_servicio) REFERENCES Servicios (id_servicio)
);