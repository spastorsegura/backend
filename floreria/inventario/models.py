from django.db import models


class AlmacenModel(models.Model):
    almacenId = models.AutoField(
        unique=True,
        primary_key=True,
        null=False,
        db_column="id",
        verbose_name="Id del almacen"
    )
    almacenNombre = models.CharField(
        max_length=30,
        db_column="nombre",
        verbose_name="Nombre del almacen",
        help_text="Nombrecito del almacen",
    )
    almacenDireccion = models.TextField(
        db_column="direccion",
        verbose_name="Direccion del almacen",
        help_text="Direccion expresaba en texto indicando: calle, número, distrito, provincia"
    )
    almacenEstado = models.BooleanField(
        default=True,
        null=False,
        db_column="estado",
        verbose_name="Estado del almacen",
        help_text="Estado de disponibilidad del almacen"
    )

    class Meta:
        db_table = "almacenes"
        ordering = ["almacenNombre", ]
        unique_together = [["almacenNombre", "almacenDireccion"], [
            "almacenDireccion", "almacenEstado"]]
        verbose_name = "almacen"
        verbose_name_plural = "almacenes"


class ProductoModel(models.Model):
    productoId = models.AutoField(
        primary_key=True,
        null=False,
        unique=True,
        db_column="id",
    )
    productoNombre = models.CharField(
        max_length=50,
        null=False,
        unique=True,
        db_column="nombre"
    )
    productoDescripcion = models.CharField(
        max_length=100,
        null=False,
        unique=True,
        db_column="descripcion",
        default="Por el momento no hay descripción del producto",
    )
    productoEstado = models.BooleanField(
        default=True,
        null=False,
    )
    productoPrecio = models.DecimalField(
        max_digits=5,
        decimal_places=2,
        db_column="precio",
        null=False,
    )

    almacenId = models.ForeignKey(
        to=AlmacenModel,
        on_delete=models.PROTECT,
        related_name="almacenProductos"
    )

    class Meta:
        db_table = "productos"
        verbose_name = "producto"
        verbose_name_plural = "productos"
