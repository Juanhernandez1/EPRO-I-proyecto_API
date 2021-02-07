import { Model } from "sequelize";

export default class Citas extends Model {
  static init(sequelize, DataTypes) {
    super.init(
      {
        IdCita: {
          type: DataTypes.STRING(255),
          allowNull: false,
          primaryKey: true,
          field: "id_cita"
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
        UidNegocio: {
          type: DataTypes.STRING(255),
          allowNull: false,
          references: {
            model: {
              tableName: "negocios",
              schema: "public"
            },
            key: "uid_negocio"
          },
          field: "uid_negocio"
        },
        Fecha: {
          type: DataTypes.DATE,
          allowNull: false,
          field: "fecha"
        },
        Estado: {
          type: DataTypes.STRING(255),
          allowNull: false,
          field: "estado"
        }
      },
      {
        sequelize,
        tableName: "citas",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "citas_pkey",
            unique: true,
            fields: [{ name: "id_cita" }]
          }
        ]
      }
    );
    return Citas;
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
