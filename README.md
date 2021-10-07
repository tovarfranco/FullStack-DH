# Tarea Base de Datos

## Consiga

1) Definición de relaciones y 5 ejemplos de c/u (1:1, 1:N, N:N)
2) Investigar que es un SGBD (cuales son los mas famosos)
3) Diferencias entre bases de datos relacionales y no relacionales.

## Ejercicio 1

En los sistemas de bases de datos relacionales, las tablas se relacionan entre sí a través de campos. Éste tipo de relaciones presentan lo que se denomina cardinalidad. 
La relacion entre las tablas puede tener cardinalidad de 1 a 1, de 1 a muchos o de muchos a muchos. 

#### Cardinalidad 1:1

En este tipo de cardinalidad, a cada elemento de una tabla A le corresponde unicamente un elemento de la tabla B

Por ejemplo:

Persona(dni,nombre,apellido,edad)

Pasaporte(dni,id,fecha de emisión,lugar de emisión)

(Restricción: una persona puede tener un único pasaporte, y un pasaporte puede perteneces a solo una persona)

#### Cardinalidad 1:N

En este tipo de cardinalidad, a cada elemento de una tabla A le corresponde uno o mas elementos de la tabla B, pero a cada elemento de la tabla B, le corresponde un único elemento de la tabla A

Por ejemplo:

Persona(id_persona,nombre,apellido,mail)

Pedido(id_pedido,descripción,cantidad,id_persona)

(Restricción: una persona puede realizar uno o muchos pedidos, pero un pedido es realizado solo por una persona)


#### Cardinalidad N:N

En este tipo de cardinalidad, a cada elemento de una tabla A le corresponde uno o mas elementos de la tabla B y viceversa, a cada elemento de una tabla B, le corresponde uno o mas elementos de la tabla A.
Para éste tipo de cardinalidad, se necesitará una tabla intermedia que estára formada por las PK de ambas tablas y un ID. 

Por ejemplo:

Alumno(legajo,nombre,apellido)

Materia(id_materia,nombre,descripción,año)

Intermedia(id,legajo,id_materia)

(Restricción: una persona puede anotarse a una o muchas materias, y en una materia puede anotarse uno o muchos alumnos)

## Ejercicio 2

Un sistema de gestion de base de datos es un software que nos permite interactuar con el motor de base de datos a través de una interfaz gráfica, permitiendo el almacenamiento, la modificación y extracción de la información de una base de datos. 
Los SGBD mas famosos son:
- Microsoft SQL Server
- Oracle Database
- MySQL

## Ejercicio 3

Las bases de datos relacionales, poseen tablas que comparten una relación entre si a través de un identificador, llamados Primary Key y Foreing Key. Permite emplear lenguaje SQL

Mientras que las bases de datos no relacionales, no tienen un identificador que sirva de relación entre un conjunto de datos y otros. No se puede emplear lenguaje SQL. 

