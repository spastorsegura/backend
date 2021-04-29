import categoria_model from "../models/categoria";
import estante_model from "../models/estante";
import producto_model from "../models/producto";
import producto_estante_model from "../models/productoEstante";
import rol_model from "../models/rol"
import usuario_model from "../models/usuario"

export const Categoria = categoria_model();
export const Estante = estante_model();
export const Producto = producto_model();
export const ProductoEstante = producto_estante_model();
export const Rol = rol_model();
export const Usuario=usuario_model();

//Solo para resetear solo usuarios
// Usuario.sync({force:true});

Categoria.hasMany(Estante,{
    foreignKey:{
        name:"categorias_id",
        allowNull:false,
    },
});

Estante.belongsTo(Categoria,{
    foreignKey:"categorias_id"
})

Estante.hasMany(ProductoEstante,{
    foreignKey:{
        name:"estantes_id",
        allowNull:false,
    }
})
ProductoEstante.belongsTo(Estante,{
    foreignKey:"estantes_id"
})
Producto.hasMany(ProductoEstante,{
    foreignKey:{
        name:"productos_id",
        allowNull:false,
    }
})
ProductoEstante.belongsTo(Producto,{
    foreignKey:"productos_id"
})

Rol.hasMany(Usuario,{
    foreignKey:{
        name:"roles_id",
        allowNull:false
    }
})
Usuario.belongsTo(Rol,{
    foreignKey:"roles_id",
})