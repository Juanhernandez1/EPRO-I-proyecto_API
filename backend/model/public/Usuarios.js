import { Model } from "sequelize";

export default class Usuarios extends Model {
  static init(sequelize, DataTypes) {
    super.init(
      {
        UidUsuario: {
          type: DataTypes.STRING(255),
          allowNull: false,
          primaryKey: true,
          field: "uid_usuario"
        },
        Nombre: {
          type: DataTypes.STRING(255),
          allowNull: false,
          field: "nombre"
        },
        Apellido: {
          type: DataTypes.STRING(255),
          allowNull: false,
          field: "apellido"
        },
        Telefono: {
          type: DataTypes.STRING(255),
          allowNull: false,
          field: "telefono"
        },
        Correo: {
          type: DataTypes.STRING(255),
          allowNull: false,
          unique: "usuarios_correo_key",
          field: "correo"
        },
        Idfacebook: {
          type: DataTypes.STRING(255),
          allowNull: true,
          unique: "usuarios_idfacebook_key",
          field: "idfacebook"
        },
        Estado: {
          type: DataTypes.STRING(255),
          allowNull: false,
          field: "estado"
        }
      },
      {
        sequelize,
        tableName: "usuarios",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "usuarios_correo_key",
            unique: true,
            fields: [{ name: "correo" }]
          },
          {
            name: "usuarios_idfacebook_key",
            unique: true,
            fields: [{ name: "idfacebook" }]
          },
          {
            name: "usuarios_pkey",
            unique: true,
            fields: [{ name: "uid_usuario" }]
          }
        ]
      }
    );
    return Usuarios;
  }

  static Setting() {
    // * llave primaria
    const llavepk = this.primaryKeyAttributes[0];
    // * Estado del registro
    const campoE = this.fieldAttributeMap.tipo;
    // * objetos para comparacion
    const Mapobjeto1 = { ...this.fieldAttributeMap };
    const Mapobjeto2 = { ...this.fieldAttributeMap };
    // * Eliminados Campos
    Object.keys(Mapobjeto1).forEach(key => {
      if (Mapobjeto1[key] === "Estado" || Mapobjeto1[key] === llavepk || key.search("uid") === 0) {
        delete Mapobjeto1[key];
      }
    });
    // * lista de campos que permitiran busqueda por like
    const whereLike = Object.values(Mapobjeto1);
    // * Eliminando Campos
    Object.keys(Mapobjeto2).forEach(key => {
      if (key.search("uid") !== 0) {
        delete Mapobjeto2[key];
      }
    });
    // * lista de campos que permiten consultas and
    const whereAND = Object.values(Mapobjeto2);
    // * lista de tablas relacionadas
    const asocicion = Object.values(this.associations);

    return {
      campoPk: llavepk,
      asocicion,
      condicion: {
        WhereLike: whereLike,
        WhereStado: { campoE },
        Where: whereAND
      },
      vista: null
    };
  }
}
