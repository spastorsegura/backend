import categoria_model from "../models/categoria";
import estante_model from "../models/estante";
import producto_model from "../models/producto";
import producto_estante_model from "../models/productoEstante";

export const Categoria = categoria_model();
export const Estante = estante_model();
export const Producto = producto_model();
export const ProductoEstante = producto_estante_model();

Categoria.hasMany(Estante,{
    foreignKey:{
        name:"categoria_id",
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

