import { Model } from "sequelize";

export default class Negocios extends Model {
  static init(sequelize, DataTypes) {
    super.init(
      {
        UidNegocio: {
          type: DataTypes.STRING(255),
          allowNull: false,
          primaryKey: true,
          field: "uid_negocio"
        },
        Nombre: {
          type: DataTypes.STRING(255),
          allowNull: false,
          field: "nombre"
        },
        Descripcion: {
          type: DataTypes.STRING(255),
          allowNull: false,
          field: "descripcion"
        },
        UidUsuario: {
          type: DataTypes.STRING(255),
          allowNull: false,
          references: {
            model: {
              tableName: "usuarios",
              schema: "public"
            },
            key: "uid_usuario"
          },
          field: "uid_usuario"
        },
        Estado: {
          type: DataTypes.STRING(255),
          allowNull: false,
          field: "estado"
        }
      },
      {
        sequelize,
        tableName: "negocios",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "negocios_pkey",
            unique: true,
            fields: [{ name: "uid_negocio" }]
          }
        ]
      }
    );
    return Negocios;
  }

  static Setting() {
    // * llave primaria
    const llavepk = this.primaryKeyAttributes[0];
    // * Estado del registro
    const campoE = this.fieldAttributeMap.estado;
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
        WhereStado: { campoE, valor: "Activo", deleteR: "Despedido" },
        Where: whereAND,
        PkCombinado: false
      },
      vista: null
    };
  }
}
