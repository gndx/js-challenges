# JavaScript - Challenges

## Información del reto
### 1) Factorial

En matemáticas, el factorial `!` de un número entero no negativo `n`, es el producto de la multiplicación de todos los números enteros positivos menores o iguales que `n`. Por ejemplo:
```BASH
5! = 5 * 4 * 3 * 2 * 1 = 120
```

### 2) Prueba de primalidad

Un número primo (o primo) es un número natural mayor que 1 que no se puede formar multiplicando dos números naturales más pequeños. Un número natural mayor que 1 que no es primo se llama número compuesto. Por ejemplo:

`5` es primo porque las únicas formas de escribirlo como producto, `1 x 5` o `5 x 1`, involucran a `5` en sí.

`6` es compuesto porque es el producto de dos números, `2 × 3`, que son más pequeños que `6`.

### 3) Números de Fibonacci

En matemáticas, los números de Fibonacci, o sucesión de Fibonacci, son una serie infinita de números enteros que se caracterizan por el hecho de que cada número después de los dos primeros es la suma de los dos anteriores `F(n)= F(n-1) + F(n-2)`, siendo el primer término de la sucesión `F(0) = 0`, y el segundo `F(1) = 1`: 
```BASH
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
```

## Descripción del reto

1. Genera una función que devuelve número factorial que se le pase como parámetro. Ejemplos:

|**ENTRADA** 	  |**SALIDA**     	|
|-------------	|---------------	|
|`5`           	|`120`           	|
|`9`           	|`362880`        	|
|`15`          	|`1307674368000` 	|

2. Genera un algoritmo para determinar si un número de entrada es primo o no. Ejemplos:

|**ENTRADA**  	|**SALIDA** 	|
|-------------	|------------	|
|`5`           	|`true`      	|
|`6`           	|`false`     	|

3. Genera una función que recibe un número de entrada `n` y devuelve `n` numeros de la secuencia de Fibonacci como una array. Ejemplo:

|**ENTRADA**  	|**SALIDA** 	|
|-------------	|------------	|
|`5`           	|`0,1,1,2,3`  |

## Enviar solución de reto

Debes hacer un "Fork" de este proyecto, revolver los problemas y crear un Pull Request hacia este repositorio.

### Instalación

```
npm install
```

### Test

```
npm run test
```

### Contribuir

Si alguien quiere agregar o mejorar algo, lo invito a colaborar directamente en este repositorio: [javascript-challenges](https://github.com/platzimaster/gndx/javascript-challenges)

### Licencia

javascript-challenges se lanza bajo la licencia [MIT](https://opensource.org/licenses/MIT).
