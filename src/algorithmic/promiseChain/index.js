/*
  Напишите функцию которая последовательно
  переберет массив Promise'ов или чисел

  Пример 1:
  const f1 = async () => 1;
  const f2 = async () => 2;
  const f3 = async () => 3;
  Input: [f1(), f2(), f3()]
  Output: [1, 2, 3]

  Пример 2:
  const f1 = new Promise((resolve, reject) => resolve(1))
  const f2 = new Promise((resolve, reject) => resolve(2))
  const f3 = new Promise((resolve, reject) => reject(3))
  Input: [f1, f2, f3]
  Output: [1, 2, 3]

  Пример 3:
  Input: [1, 2, 3]
  Output: [1, 2, 3]
*/

export async function promiseChain(arr) {
  //
}
