// Генерация случайных чисел в заданном диапазоне
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Создание двумерного массива
const createRandomArray = (rows, cols, num) => Array.from({ length: rows }, () => Array.from({ length: cols }, num));

function printMatrix(arr) {
    arr.forEach(row => {
        let minPositive = Infinity, minReplacements = 0, currentSequence = 1;

        row.forEach((num, i) => {

            // Вывод наименьшего положительного числа в строке
            minPositive = (num > 0 && num < minPositive) ? num : minPositive;

            // Подсчет количества подряд идущих положительных или отрицательных чисел
            currentSequence = ((row[i] * row[i - 1] > 0) && (currentSequence >= 3 ? 1 : currentSequence + 1)) || 1;
            minReplacements += currentSequence >= 3;

        });

        // Пометить строку с минимальным числом - звездочкой
        const star = Math.min(...row) === Math.min(...arr.map(r => Math.min(...r))) ? '*' : ' ';

        // Вывод строки
        console.log(
            row.map(num => num.toString().padStart(5, ' ')).join('') + ' | ' + star + ' | ' + 'min positive: ' + minPositive + ', ' + 'min replacements: ' + minReplacements
        );
    });
}

printMatrix(createRandomArray(10, 10, () => getRandomNumber(-100, 100)));
