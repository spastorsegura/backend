from django.db import models

class AlmacenModel(models.Model):
    almacenId=models.AutoField(
        unique=True,
        primary_key=True,
        null=False,
        db_column="id",
        verbose_name="Id del almacen"
    )
    
    almacenNombre=models.CharField(
        max_length=30,
        db_column="nombre",
        verbose_name="Nombre del almacen",
        help_text="Nombrecito del almacen",
    )

    almacenDireccion=models.TextField(
        db_column="direccion",
        verbose_name="Direccion del almacen",
        help_text="Direccion expresaba en texto indicando: calle, número, distrito, provincia"
    )