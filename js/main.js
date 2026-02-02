// ============ ТРЕНИРОВКИ — 30 ДНЕЙ (без генерации) ============
const workouts = [
  { day: 1, title: "Ягодицы & Ноги", img: "https://images.pexels.com/photos/7029883/pexels-photo-7029883.jpeg?auto=compress&cs=tinysrgb&w=600", exercises: ["Приседания с гантелями — 3×15", "Выпады назад — 3×12 (на каждую ногу)", "Махи ногой назад (на четвереньках) — 3×20", "Скакалка — 2 мин", "Планка — 45 сек"] },
  { day: 2, title: "Спина & Руки", img: "https://images.pexels.com/photos/8454343/pexels-photo-8454343.jpeg?auto=compress&cs=tinysrgb&w=600", exercises: ["Тяга гантелей в наклоне — 3×12", "Жим гантелей от плеч — 3×10", "Отжимания — 3×максимум", "Супермен (лежа) — 3×20 сек", "Скакалка — 1.5 мин"] },
  { day: 3, title: "Кардио + Ягодицы", img: "https://images.pexels.com/photos/7080870/pexels-photo-7080870.jpeg?auto=compress&cs=tinysrgb&w=600", exercises: ["Бёрпи — 4×10", "Приседания пульс — 3×20", "Мостик с подъёмом — 3×15", "Скакалка — 3 мин", "Боковая планка — 30 сек/сторона"] },
  { day: 4, title: "Full Body", img: "https://images.pexels.com/photos/7029873/pexels-photo-7029873.jpeg?auto=compress&cs=tinysrgb&w=600", exercises: ["Становая тяга с гантелями — 3×12", "Жим лёжа (гантели) — 3×10", "Выпады вперёд — 3×10", "Скакалка — 2 мин", "Планка с подъёмом рук — 3×20 сек"] },
  { day: 5, title: "Ягодицы & Кор", img: "https://images.pexels.com/photos/7029875/pexels-photo-7029875.jpeg?auto=compress&cs=tinysrgb&w=600", exercises: ["Приседания сумо — 3×15", "Ягодичный мост — 3×20", "Подъёмы на носки с гантелями — 3×20", "Вакуум живота — 3×30 сек", "Скакалка — 1.5 мин"] },
  { day: 6, title: "Спина & Плечи", img: "https://images.pexels.com/photos/8454345/pexels-photo-8454345.jpeg?auto=compress&cs=tinysrgb&w=600", exercises: ["Разведение гантелей в стороны — 3×12", "Тяга к поясу (гантели) — 3×12", "Обратные отжимания — 3×10", "Птица-собака — 3×12/сторона", "Скакалка — 2 мин"] },
  { day: 7, title: "Активный отдых", img: "https://images.pexels.com/photos/7029877/pexels-photo-7029877.jpeg?auto=compress&cs=tinysrgb&w=600", exercises: ["Растяжка спины — 10 мин", "Ходьба или йога — 20 мин", "Дыхательные упражнения — 5 мин"] },
  { day: 8, title: "Ягодицы (интенсив)", img: "https://images.pexels.com/photos/7029883/pexels-photo-7029883.jpeg?auto=compress&cs=tinysrgb&w=600", exercises: ["Приседания с прыжком — 3×12", "Выпады с весом — 3×10", "Гиперэкстензия — 3×15", "Скакалка — 2.5 мин", "Планка — 60 сек"] },
  { day: 9, title: "Руки + Спина", img: "https://images.pexels.com/photos/8454343/pexels-photo-8454343.jpeg?auto=compress&cs=tinysrgb&w=600", exercises: ["Жим лёжа — 3×12", "Тяга в наклоне — 3×12", "Отжимания — 3×макс", "Скакалка — 1 мин", "Планка — 45 сек"] },
  { day: 10, title: "Кардио-вызов", img: "https://images.pexels.com/photos/7080870/pexels-photo-7080870.jpeg?auto=compress&cs=tinysrgb&w=600", exercises: ["Бёрпи — 4×10", "Скакалка — 4 мин", "Махи ногами — 3×20", "Планка с поворотом — 3×10", "Растяжка"] },
  { day: 11, title: "Спина + Поясница", img: "https://images.pexels.com/photos/7029873/pexels-photo-7029873.jpeg?auto=compress&cs=tinysrgb&w=600", exercises: ["Тяга гантелей — 4×12", "Супермен — 3×20 сек", "Мостик — 3×20", "Скакалка — 1.5 мин", "Кошка-корова — 2 мин"] },
  { day: 12, title: "Ноги + Ягодицы", img: "https://images.pexels.com/photos/7029875/pexels-photo-7029875.jpeg?auto=compress&cs=tinysrgb&w=600", exercises: ["Приседания сумо — 3×15", "Выпады — 3×10", "Махи назад — 3×20", "Скакалка — 2 мин", "Планка — 50 сек"] },
  { day: 13, title: "Full Body Power", img: "https://images.pexels.com/photos/8454345/pexels-photo-8454345.jpeg?auto=compress&cs=tinysrgb&w=600", exercises: ["Становая тяга — 3×10", "Жим от плеч — 3×10", "Бёрпи — 3×10", "Скакалка — 3 мин", "Планка — 60 сек"] },
  { day: 14, title: "Восстановление", img: "https://images.pexels.com/photos/7029877/pexels-photo-7029877.jpeg?auto=compress&cs=tinysrgb&w=600", exercises: ["Йога — 20 мин", "Растяжка — 10 мин", "Дыхание — 5 мин"] },
  { day: 15, title: "Ягодицы & Ноги", img: "https://images.pexels.com/photos/7029883/pexels-photo-7029883.jpeg?auto=compress&cs=tinysrgb&w=600", exercises: ["Приседания — 4×15", "Выпады — 3×12", "Мостик — 3×20", "Скакалка — 2 мин", "Планка — 50 сек"] },
  { day: 16, title: "Спина & Руки", img: "https://images.pexels.com/photos/8454343/pexels-photo-8454343.jpeg?auto=compress&cs=tinysrgb&w=600", exercises: ["Тяга — 3×12", "Жим — 3×10", "Отжимания — 3×макс", "Скакалка — 1.5 мин", "Супермен — 3×20 сек"] },
  { day: 17, title: "Кардио + Кор", img: "https://images.pexels.com/photos/7080870/pexels-photo-7080870.jpeg?auto=compress&cs=tinysrgb&w=600", exercises: ["Бёрпи — 4×10", "Скакалка — 3 мин", "Скручивания — 3×20", "Планка — 60 сек", "Боковая планка — 30 сек"] },
  { day: 18, title: "Full Body", img: "https://images.pexels.com/photos/7029873/pexels-photo-7029873.jpeg?auto=compress&cs=tinysrgb&w=600", exercises: ["Становая — 3×12", "Жим — 3×10", "Выпады — 3×10", "Скакалка — 2 мин", "Планка — 50 сек"] },
  { day: 19, title: "Ягодицы Intense", img: "https://images.pexels.com/photos/7029875/pexels-photo-7029875.jpeg?auto=compress&cs=tinysrgb&w=600", exercises: ["Приседания пульс — 3×20", "Мостик с подъёмом — 3×15", "Махи — 3×20", "Скакалка — 2.5 мин", "Планка — 60 сек"] },
  { day: 20, title: "Спина & Плечи", img: "https://images.pexels.com/photos/8454345/pexels-photo-8454345.jpeg?auto=compress&cs=tinysrgb&w=600", exercises: ["Тяга — 3×12", "Разведение — 3×12", "Обратные отжимания — 3×10", "Скакалка — 2 мин", "Птица-собака — 3×12"] },
  { day: 21, title: "Активный отдых", img: "https://images.pexels.com/photos/7029877/pexels-photo-7029877.jpeg?auto=compress&cs=tinysrgb&w=600", exercises: ["Растяжка — 15 мин", "Ходьба — 30 мин", "Дыхание — 5 мин"] },
  { day: 22, title: "Ягодицы & Ноги", img: "https://images.pexels.com/photos/7029883/pexels-photo-7029883.jpeg?auto=compress&cs=tinysrgb&w=600", exercises: ["Приседания с прыжком — 3×12", "Выпады — 3×10", "Мостик — 3×20", "Скакалка — 2 мин", "Планка — 55 сек"] },
  { day: 23, title: "Руки + Спина", img: "https://images.pexels.com/photos/8454343/pexels-photo-8454343.jpeg?auto=compress&cs=tinysrgb&w=600", exercises: ["Жим лёжа — 3×12", "Тяга — 3×12", "Отжимания — 3×макс", "Скакалка — 1.5 мин", "Супермен — 3×25 сек"] },
  { day: 24, title: "Кардио-фокус", img: "https://images.pexels.com/photos/7080870/pexels-photo-7080870.jpeg?auto=compress&cs=tinysrgb&w=600", exercises: ["Бёрпи — 4×12", "Скакалка — 4 мин", "Горизонтальные махи — 3×20", "Планка — 60 сек", "Растяжка"] },
  { day: 25, title: "Full Body Endurance", img: "https://images.pexels.com/photos/7029873/pexels-photo-7029873.jpeg?auto=compress&cs=tinysrgb&w=600", exercises: ["Становая — 3×12", "Жим — 3×12", "Выпады — 3×12", "Скакалка — 2.5 мин", "Планка — 65 сек"] },
  { day: 26, title: "Ягодицы Sculpt", img: "https://images.pexels.com/photos/7029875/pexels-photo-7029875.jpeg?auto=compress&cs=tinysrgb&w=600", exercises: ["Приседания сумо — 4×15", "Мостик с паузой — 3×20", "Махи — 3×25", "Скакалка — 2 мин", "Планка — 60 сек"] },
  { day: 27, title: "Спина & Кор", img: "https://images.pexels.com/photos/8454345/pexels-photo-8454345.jpeg?auto=compress&cs=tinysrgb&w=600", exercises: ["Тяга — 4×12", "Супермен — 3×30 сек", "Птица-собака — 3×15", "Скакалка — 2 min", "Боковая планка — 40 сек"] },
  { day: 28, title: "Восстановление+", img: "https://images.pexels.com/photos/7029877/pexels-photo-7029877.jpeg?auto=compress&cs=tinysrgb&w=600", exercises: ["Йога для спины — 25 мин", "Растяжка ягодиц — 10 мин", "Медитация — 5 мин"] },
  { day: 29, title: "Финал: Full Power", img: "https://images.pexels.com/photos/7029883/pexels-photo-7029883.jpeg?auto=compress&cs=tinysrgb&w=600", exercises: ["Приседания — 4×15", "Становая — 3×10", "Жим — 3×10", "Скакалка — 3 мин", "Планка — 70 сек"] },
  { day: 30, title: "Праздник тела!", img: "https://images.pexels.com/photos/7029877/pexels-photo-7029877.jpeg?auto=compress&cs=tinysrgb&w=600", exercises: ["Любимые упражнения — 20 мин", "Растяжка — 15 мин", "Благодарность себе — 5 мин"] }
];

// ============ КЕТО-МЕНЮ — 30 ДНЕЙ ============
const meals = [
  { day: 1, meals: [{type:"Завтрак",desc:"Омлет с сыром, шпинатом и авокадо"},{type:"Обед",desc:"Курица с песто и рукколой"},{type:"Ужин",desc:"Творог с льняным семенем"}] },
  { day: 2, meals: [{type:"Завтрак",desc:"Йогурт 10% + миндаль + кокосовое масло"},{type:"Обед",desc:"Лосось с брокколи и сливками"},{type:"Ужин",desc:"Яйца с помидорами черри"}] },
  { day: 3, meals: [{type:"Завтрак",desc:"Смузи: авокадо, кокосовое молоко, чиа"},{type:"Обед",desc:"Говядина с грибами и сливками"},{type:"Ужин",desc:"Сырники без муки"}] },
  { day: 4, meals: [{type:"Завтрак",desc:"Яичница с беконом и авокадо"},{type:"Обед",desc:"Цукини-лапша с курицей"},{type:"Ужин",desc:"Орехи + сыр + оливки"}] },
  { day: 5, meals: [{type:"Завтрак",desc:"Кокосовые блинчики с маслом"},{type:"Обед",desc:"Салат Цезарь с курицей"},{type:"Ужин",desc:"Тушёная капуста с сосисками"}] },
  { day: 6, meals: [{type:"Завтрак",desc:"Фриттата с перцем и сыром"},{type:"Обед",desc:"Рыба с цветной капустой под сыром"},{type:"Ужин",desc:"Кефир 10% + льняное масло"}] },
  { day: 7, meals: [{type:"Завтрак",desc:"Омлет с лососем и укропом"},{type:"Обед",desc:"Суп-пюре из брокколи на сливках"},{type:"Ужин",desc:"Орехи + тёмный шоколад 85%"}] },
  { day: 8, meals: [{type:"Завтрак",desc:"Яйца-пашот с авокадо"},{type:"Обед",desc:"Курица с грибами и сметаной"},{type:"Ужин",desc:"Салат из тунца с оливками"}] },
  { day: 9, meals: [{type:"Завтрак",desc:"Творожная запеканка с орехами"},{type:"Обед",desc:"Говядина со шпинатом"},{type:"Ужин",desc:"Кокосовые чипсы + сыр"}] },
  { day: 10, meals: [{type:"Завтрак",desc:"Сырные оладьи с зеленью"},{type:"Обед",desc:"Лосось с брокколи и лимоном"},{type:"Ужин",desc:"Тёмный шоколад 90% + миндаль"}] },
  { day: 11, meals: [{type:"Завтрак",desc:"Авокадо с яйцом и сыром"},{type:"Обед",desc:"Куриные котлеты с салатом"},{type:"Ужин",desc:"Сливочный суп из цветной капусты"}] },
  { day: 12, meals: [{type:"Завтрак",desc:"Омлет с брокколи"},{type:"Обед",desc:"Свинина с грибами и сливками"},{type:"Ужин",desc:"Греческий йогурт + орехи"}] },
  { day: 13, meals: [{type:"Завтрак",desc:"Смузи с кокосом и авокадо"},{type:"Обед",desc:"Рыба с овощами на пару"},{type:"Ужин",desc:"Сыр + оливки + огурцы"}] },
  { day: 14, meals: [{type:"Завтрак",desc:"Яичница с шампиньонами"},{type:"Обед",desc:"Суп из брокколи и сыра"},{type:"Ужин",desc:"Творог с корицей и маслом"}] },
  { day: 15, meals: [{type:"Завтрак",desc:"Кокосовые вафли с ягодами"},{type:"Обед",desc:"Курица с авокадо и салатом"},{type:"Ужин",desc:"Ореховая смесь"}] },
  { day: 16, meals: [{type:"Завтрак",desc:"Омлет с козьим сыром"},{type:"Обед",desc:"Говядина с брокколи"},{type:"Ужин",desc:"Кефир + лён"}] },
  { day: 17, meals: [{type:"Завтрак",desc:"Яйца с авокадо и беконом"},{type:"Обед",desc:"Лосось с цукини"},{type:"Ужин",desc:"Сырники на сковороде"}] },
  { day: 18, meals: [{type:"Завтрак",desc:"Смузи с протеином и кокосом"},{type:"Обед",desc:"Курица с грибами"},{type:"Ужин",desc:"Тёмный шоколад + грецкие орехи"}] },
  { day: 19, meals: [{type:"Завтрак",desc:"Фриттата с шпинатом"},{type:"Обед",desc:"Суп-пюре из цветной капусты"},{type:"Ужин",desc:"Яйца с сыром"}] },
  { day: 20, meals: [{type:"Завтрак",desc:"Творог с кокосовой стружкой"},{type:"Обед",desc:"Рыба с овощами"},{type:"Ужин",desc:"Оливки + сыр"}] },
  { day: 21, meals: [{type:"Завтрак",desc:"Омлет с перцем и сыром"},{type:"Обед",desc:"Говядина с салатом"},{type:"Ужин",desc:"Кефир 10%"}] },
  { day: 22, meals: [{type:"Завтрак",desc:"Яичница с авокадо"},{type:"Обед",desc:"Курица с песто"},{type:"Ужин",desc:"Орехи + семена"}] },
  { day: 23, meals: [{type:"Завтрак",desc:"Смузи с авокадо и шпинатом"},{type:"Обед",desc:"Свинина с грибами"},{type:"Ужин",desc:"Сыр + огурцы"}] },
  { day: 24, meals: [{type:"Завтрак",desc:"Кокосовые блинчики"},{type:"Обед",desc:"Лосось с брокколи"},{type:"Ужин",desc:"Творог с льняным маслом"}] },
  { day: 25, meals: [{type:"Завтрак",desc:"Омлет с лососем"},{type:"Обед",desc:"Курица с цветной капустой"},{type:"Ужин",desc:"Тёмный шоколад 85%"}] },
  { day: 26, meals: [{type:"Завтрак",desc:"Яйца с беконом"},{type:"Обед",desc:"Говядина с овощами"},{type:"Ужин",desc:"Ореховая смесь"}] },
  { day: 27, meals: [{type:"Завтрак",desc:"Смузи с кокосом и чиа"},{type:"Обед",desc:"Рыба с салатом"},{type:"Ужин",desc:"Сырники без сахара"}] },
  { day: 28, meals: [{type:"Завтрак",desc:"Фриттата с грибами"},{type:"Обед",desc:"Суп из брокколи"},{type:"Ужин",desc:"Кефир + орехи"}] },
  { day: 29, meals: [{type:"Завтрак",desc:"Авокадо с яйцом"},{type:"Обед",desc:"Курица с авокадо"},{type:"Ужин",desc:"Тёмный шоколад + миндаль"}] },
  { day: 30, meals: [{type:"Завтрак",desc:"Любимый кето-завтрак!"},{type:"Обед",desc:"Любимое кето-блюдо!"},{type:"Ужин",desc:"Празднуем результат!"}] }
];

// ============ ЛОГИКА ============
let currentDay = 1;

function renderDay(dayNum) {
  const w = workouts.find(item => item.day === dayNum);
  const m = meals.find(item => item.day === dayNum);

  if (!w || !m) {
    document.getElementById('workouts').innerHTML = `<div class="day-card"><h2>Ошибка: данные не найдены</h2></div>`;
    document.getElementById('meals').innerHTML = '';
    return;
  }

  document.getElementById('dayCounter').textContent = `День ${dayNum}`;
  document.getElementById('workouts').innerHTML = `
    <div class="day-card">
      <h2>${w.title}</h2>
      <img src="${w.img}" alt="День ${w.day}">
      <ul>${w.exercises.map(e => `<li>${e}</li>`).join('')}</ul>
    </div>
  `;

  document.getElementById('meals').innerHTML = `
    <div class="meal-plan">
      <h3>Кето-питание — День ${m.day}</h3>
      ${m.meals.map(meal => 
        `<div class="meal"><h4>${meal.type}</h4><p>${meal.desc}</p></div>`
      ).join('')}
    </div>
  `;

  document.getElementById('prevBtn').disabled = (dayNum <= 1);
  document.getElementById('nextBtn').disabled = (dayNum >= 30);
}

// Запуск после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
  renderDay(1);
  document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentDay > 1) {
      currentDay--;
      renderDay(currentDay);
    }
  });
  document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentDay < 30) {
      currentDay++;
      renderDay(currentDay);
    }
  });
});
