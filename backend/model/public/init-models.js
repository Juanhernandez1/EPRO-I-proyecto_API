import { DataTypes } from "sequelize";
import _Accesos from "./Accesos";
import _Bloqueados from "./Bloqueados";
import _Citas from "./Citas";
import _Configuracion from "./Configuracion";
import _Detalle from "./Detalle";
import _Direcciones from "./Direcciones";
import _InfContato from "./InfContato";
import _Negocios from "./Negocios";
import _Servicios from "./Servicios";
import _Usuarios from "./Usuarios";

export default function initModels(sequelize) {
  const Accesos = _Accesos.init(sequelize, DataTypes);
  const Bloqueados = _Bloqueados.init(sequelize, DataTypes);
  const Citas = _Citas.init(sequelize, DataTypes);
  const Configuracion = _Configuracion.init(sequelize, DataTypes);
  const Detalle = _Detalle.init(sequelize, DataTypes);
  const Direcciones = _Direcciones.init(sequelize, DataTypes);
  const InfContato = _InfContato.init(sequelize, DataTypes);
  const Negocios = _Negocios.init(sequelize, DataTypes);
  const Servicios = _Servicios.init(sequelize, DataTypes);
  const Usuarios = _Usuarios.init(sequelize, DataTypes);

  Accesos.belongsTo(Usuarios, { as: "UidUsuarioUsuario", foreignKey: "UidUsuario" });
  Usuarios.hasOne(Accesos, { as: "Acceso", foreignKey: "UidUsuario" });
  Bloqueados.belongsTo(Negocios, { as: "UidNegocioNegocio", foreignKey: "UidNegocio" });
  Negocios.hasOne(Bloqueados, { as: "Bloqueado", foreignKey: "UidNegocio" });
  Citas.belongsTo(Negocios, { as: "UidNegocioNegocio", foreignKey: "UidNegocio" });
  Negocios.hasMany(Citas, { as: "Cita", foreignKey: "UidNegocio" });
  Citas.belongsTo(Usuarios, { as: "UidUsuarioUsuario", foreignKey: "UidUsuario" });
  Usuarios.hasMany(Citas, { as: "Cita", foreignKey: "UidUsuario" });
  Configuracion.belongsTo(Negocios, { as: "UidNegocioNegocio", foreignKey: "UidNegocio" });
  Negocios.hasOne(Configuracion, { as: "Configuracion", foreignKey: "UidNegocio" });
  Detalle.belongsTo(Citas, { as: "IdCitaCita", foreignKey: "IdCita" });
  Citas.hasMany(Detalle, { as: "Detalles", foreignKey: "IdCita" });
  Detalle.belongsTo(Servicios, { as: "IdServicioServicio", foreignKey: "IdServicio" });
  Servicios.hasMany(Detalle, { as: "Detalles", foreignKey: "IdServicio" });
  Direcciones.belongsTo(Negocios, { as: "UidNegocioNegocio", foreignKey: "UidNegocio" });
  Negocios.hasOne(Direcciones, { as: "Direccione", foreignKey: "UidNegocio" });
  InfContato.belongsTo(Negocios, { as: "UidNegocioNegocio", foreignKey: "UidNegocio" });
  Negocios.hasOne(InfContato, { as: "InfContato", foreignKey: "UidNegocio" });
  Negocios.belongsTo(Usuarios, { as: "UidUsuarioUsuario", foreignKey: "UidUsuario" });
  Usuarios.hasMany(Negocios, { as: "Negocios", foreignKey: "UidUsuario" });
  Servicios.belongsTo(Negocios, { as: "UidNegocioNegocio", foreignKey: "UidNegocio" });
  Negocios.hasMany(Servicios, { as: "Servicios", foreignKey: "UidNegocio" });

  return {
    Accesos,
    Bloqueados,
    Citas,
    Configuracion,
    Detalle,
    Direcciones,
    InfContato,
    Negocios,
    Servicios,
    Usuarios
  };
}
