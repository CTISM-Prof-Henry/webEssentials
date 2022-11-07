# Strings em Javascript

Nesta lista, você deve implementar uma função para cada exercício.

O arquivo [strings.html](strings.html) possui um botão para cada exercício, e uma função pré-implementada correspondente.
Basta você modificar o código-fonte dentro das tags `<script>`.

## Enunciados

1. Escreva uma função JavaScript para verificar se uma variável é uma string ou não.
2. Escreva uma função JavaScript para verificar se uma string possui zero caracteres.
3. Escreva uma função JavaScript para dividir uma string e convertê-la em uma lista de palavras.

   Entrada:

   ```javascript
   exercise_03("Robin Singh");
   ```

   Saída:

   ```bash
   ["Robin", "Singh"]
   ```

4. Escreva uma função JavaScript para extrair um número específico de caracteres de uma string.

   Entrada:

   ```javascript
   exercise_04("Robin Singh", 4);
   ```

   Saída:

   ```bash
   "Robi"
   ```

5. Escreva uma função JavaScript para parametrizar uma string.

   Entrada:

   ```javascript
   exercise_05("Robin Singh from USA.");
   ```

   Saída:

   ```bash
   "robin-singh-from-usa"
   ```

6. Escreva uma função JavaScript para colocar em maiúscula a primeira letra de uma string.

   Entrada:

   ```javascript
   exercise_06('js string exercises');
   ```

   Saída:

   ```bash
   "Js string exercises"
   ```

7. Escreva uma função JavaScript para colocar em maiúscula a primeira letra de cada palavra em uma string.

   Entrada:

   ```javascript
   exercise_07('js string exercises');
   ```

   Saída:

   ```bash
   "Js String Exercises"
   ``` 

8. Escreva uma função JavaScript para concatenar uma determinada string n vezes.

   Entrada:

   ```javascript
   exercise_08('Ha!', 1);
   exercise_08('Ha!', 2);
   exercise_08('Ha!', 3);
   ```

   Saída:

   ```bash
   "Ha!"
   "Ha!Ha!"
   "Ha!Ha!Ha!"
   ```

9. Escreva uma função JavaScript para truncar uma string se ela for maior que o número especificado de caracteres.
Strings truncadas terminarão com uma sequência de reticências traduzível ("...") (por padrão) ou caracteres especificados. 

   Entrada:

   ```javascript
   exercise_09('We are doing JS string exercises.',  0, '.');
   exercise_09('We are doing JS string exercises.', 19, '...');
   exercise_09('We are doing JS string exercises.', 15, '!!!');
   ```

   Saída:

   ```bash
   "We are doing JS string exercises."
   "We are doing JS ..."
   "We are doing !!!"
   ```

10. Escreva uma função JavaScript para cortar uma string em pedaços de um determinado comprimento. 

    Entrada:     

    ```javascript
    exercise_10('w3resource', 1);
    exercise_10('w3resource', 2);
    exercise_10('w3resource', 3);
    ```
    
    Saída:    

    ```bash
    ["w3resource"]
    ["w3", "re", "so", "ur", "ce"]
    ["w3r", "eso", "urc", "e"]
    ```

## Referências

Os exercícios foram adaptados do [w3resource](https://www.w3resource.com/javascript-exercises/javascript-string-exercises.php)
(em inglês, com gabarito).