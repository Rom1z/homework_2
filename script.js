const student = "Марупов Ромиз Алимухаммадович"; // Очевидно, что здесь ваши личные Фамилия, Имя и Отчество

document.getElementById("student").innerHTML = student;

// Отсюда и ниже идет ваш код решения домашнего задания
// ...

// Функция подсчёта накопления сбережений. 
// Сумму на проезд не учитываем, так как она тратится в день поездки. 
// Во время экзаменационных недель более 3 пар быть не может, поэтому мама не даёт денег на обед.
function count(gameConsole, dinnerPrice) {
    // Сбережения, кол-во дней
    let savings = 0;
    let actualDay = 0;
  
    // Массив кол-ва пар в 1 семестре
    const semester1 = [4, 1, 2, 5, 2, 2, 0];
    
    // Кол-во недель в 1 семестре без учёта сессии
    const weeks1 = 16;
    
    // Массив кол-ва пар во 2 семестре
    const semester2 = [1, 4, 4, 2, 5, 0, 0];
    
    // Кол-во недель во 2 семестре без учёта сессии
    const weeks2 = 23;
    
    // Локальная переменная для ограничения недель в циклах
    let i = 0;
    
    // Цикл проходит по кол-ву недель 1 семестра
    while(i < weeks1){
      // Каждая неделя проверяется по всем дням недели
      for (let day = 0; day < semester1.length; day = day + 1) {
        // Увеличиваем общее кол-во дней
        actualDay = actualDay + 1;
  
        // Если в дне от 1 до 3 пар, пополняем сбережения
        if (semester1[day] < 4 && semester1[day] > 0) {
          savings = savings + dinnerPrice;
  
          // Если сбережений достаточно, выходим из цикла, чтобы сохранить кол-во дней
          if (savings >= gameConsole) {
            i = weeks1;
            break;
          }
        }
      }
      
      i = i + 1;
    }
  
    // Если сбережений недостаточно,  увеличиваем счётчик дней на экзаменационную неделю и каникулы.
    // Переходим ко 2 семестру
    if (savings < gameConsole) {
      // Сессия
      actualDay = actualDay + 7;
      
      // Каникулы
      actualDay = actualDay + 14;
      
      // Обнуление кол-ва дней в цикле
      i = 0;
      
      // Цикл проходит по кол-ву недель 2 семестра
      while (i < weeks2) {
        // Каждая неделя проверяется по всем дням недели
        for (let day = 0; day < semester2.length; day++) {
          // Увеличиваем общее кол-во дней
          actualDay = actualDay + 1;
  
          // Если в дне от 1 до 3 пар, пополняем сбережения
          if (semester2[day] < 4 && semester2[day] > 0) {
            savings = savings + dinnerPrice;
  
            // Если сбережений достаточно, выходим из цикла, чтобы сохранить кол-во дней
            if (savings >= gameConsole) {
              i = weeks2;
              break;
            }
          }
        }
        
        i = i + 1;
      }
    }
  
    // Если сбережений недостаточно,  увеличиваем счётчик дней на экзаменационную неделю.
    if (savings < gameConsole) {
      // Сессия
      actualDay = actualDay + 7;
    }
  
    // Выбор элемента на странице с id 'aboutResult'
    let aboutResult = document.querySelector('#aboutResult');
    
    if (savings < gameConsole) {
      aboutResult.innerHTML = 'Купить приставку не получится, но на последний день учебного года получится накопить ' + savings + ' руб.';
    } else {
      aboutResult.innerHTML = 'Накопить получилось за ' + actualDay + ' дней с начала учебного года';
    }
  }