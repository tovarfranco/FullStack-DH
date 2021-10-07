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

Persona       Tiene     Direccion

dni                     dni
nombre                  calle
apellido                localidad
                        pais

Restriccion: una persona puede tener sola una dirección declarada. 


#### Cardinalidad 1:N

En este tipo de cardinalidad, a cada elemento de una tabla A le corresponde uno o mas elementos de la tabla B, pero a cada elemento de la tabla B, le corresponde un único elemento de la tabla A

Por ejemplo:



#### Cardinalidad N:N

En este tipo de cardinalidad, a cada elemento de una tabla A le corresponde uno o mas elementos de la tabla B y viceversa, a cada elemento de una tabla B, le corresponde uno o mas elementos de la tabla A.
Para éste tipo de cardinalidad, se necesitará una tabla intermedia que estára formada por las PK de ambas tablas y un ID. 

Por ejemplo:


## Ejercicio 2

Un sistema de gestion de base de datos, nos permite interactuar con el motor de base de datos a través de una interfaz gráfica, permitiendo el almacenamiento, la modificación y extracción de la información de una base de datos. 


