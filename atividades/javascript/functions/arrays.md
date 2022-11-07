# Strings em Javascript

Nesta lista, você deve implementar uma função para cada exercício.

O arquivo [arrays.html](arrays.html) possui um botão para cada exercício, e uma função pré-implementada correspondente.
Basta você modificar o código-fonte dentro das tags `<script>`.

## Enunciados

1. Escreva uma função JavaScript para verificar se uma variável é um array ou não.

   Entrada:
   
   ```javascript
   exercise_01('oi');
   exercise_01([1, 2, 3]);
   ```
   
   Saída:
   
   ```bash
   false
   true
   ```

2. Escreva uma função Javascript para mostrar o comprimento de um array.

   Entrada:
   
   ```javascript
   exercise_02([1, 2, 3]);
   exercise_02([1]);
   exercise_02([]);
   ```
   
   Saída:
   
   ```bash
   3
   1
   0
   ```

3. Escreva uma função JavaScript para obter o n-ésimo elemento de um array.

   Entrada:

   ```javascript
   let a = ['a', 'b', 'c', 'd', 'e'];
   exercise_03(0);
   exercise_03(3);
   exercise_03(4);
   exercise_03(999);
   ```
   
   Saída:
   
   ```bash
   'a'
   'd'
   'e'
   null
   ```

4. Escreva um programa JavaScript para unir todos os elementos de um array em uma string. 

   Entrada:
   
   ```javascript
   let b = ["Red", "Green", "White", "Black"];
   exercise_04(b, ' ');
   exercise_04(b, ',');
   exercise_04(b, '+');
   ```
   
   Saída:
   
   ```bash
   "Red,Green,White,Black"
   "Red,Green,White,Black"
   "Red+Green+White+Black"
   ```

5. Escreva uma função JavaScript para ordenar os itens de um array.

   Entrada:
   
   ```javascript
   let c = [5, 3, 1, 2, 4];
   exercise_05(c);
   ```
   
   Saída:
   
   ```bash
   [1, 2, 3, 4, 5]
   ```

6. Escreva uma função JavaScript para encontrar o item mais frequente de um array.

   Entrada:
   
   ```javascript
   let d = [1, 1, 1, 2, 2, 3, 3, 4, 4];
   exercise_06(d);
   ```
   
   Saída:
   
   ```bash
   'o item mais frequente é 1'
   ```

7. Escreva uma função JavaScript para calcular a soma de um array de inteiros.

   Entrada:
   
   ```javascript
   let d = [1, 1, 1, 2, 2, 3, 3, 4, 4];
   exercise_07(d);
   ```
   
   Saída:
   
   ```bash
   21
   ```

8. Escreva uma função JavaScript para calcular o produto de um array de inteiros.

   Entrada:
   
   ```javascript
   let d = [1, 1, 1, 2, 2, 3, 3, 4, 4];
   exercise_08(d);
   ```
   
   Saída:
   
   ```bash
   576
   ```

9. Escreva uma função JavaScript para encontrar valores duplicados em uma matriz JavaScript.

   Entrada:
   
   ```javascript
   let d = [1, 1, 1, 2, 2, 3, 3, 4, 4];
   exercise_09(d);
   ```
   
   Saída:
   
   ```bash
   'os itens 1, 2, 3 e 4 são duplicados'
   ```

10. Escreva uma função JavaScript para achatar uma matriz aninhada (qualquer profundidade). 
    
    Entrada:

    ```javascript
    exercise_09([1, [2], [3, [[4]]],[5,6]]);
    ```
    
    Saída:

    ```bash
    [1, 2, 3, 4, 5, 6]
    ```

## Referências

Os exercícios foram adaptados do [w3resource](https://www.w3resource.com/javascript-exercises/javascript-array-exercises.php)
(em inglês, com gabarito).