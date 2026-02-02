// ============ ТРЕНИРОВКИ ============
const workouts = [
  // День 1
  { day: 1, title: "Ягодицы & Ноги", img: "https://images.pexels.com/photos/7029883/pexels-photo-7029883.jpeg?auto=compress&cs=tinysrgb&w=600", exercises: ["Приседания с гантелями — 3×15", "Выпады назад — 3×12 (на каждую ногу)", "Махи ногой назад (на четвереньках) — 3×20", "Скакалка — 2 мин", "Планка — 45 сек"] },
  // День 2
  { day: 2, title: "Спина & Руки", img: "https://images.pexels.com/photos/8454343/pexels-photo-8454343.jpeg?auto=compress&cs=tinysrgb&w=600", exercises: ["Тяга гантелей в наклоне — 3×12", "Жим гантелей от плеч — 3×10", "Отжимания — 3×максимум", "Супермен (лежа) — 3×20 сек", "Скакалка — 1.5 мин"] },
  // День 3
  { day: 3, title: "Кардио + Ягодицы", img: "https://images.pexels.com/photos/7080870/pexels-photo-7080870.jpeg?auto=compress&cs=tinysrgb&w=600", exercises: ["Бёрпи — 4×10", "Приседания пульс — 3×20", "Мостик с подъёмом — 3×15", "Скакалка — 3 мин", "Боковая планка — 30 сек/сторона"] },
  // День 4
  { day: 4, title: "Full Body", img: "https://images.pexels.com/photos/7029873/pexels-photo-7029873.jpeg?auto=compress&cs=tinysrgb&w=600", exercises: ["Становая тяга с гантелями — 3×12", "Жим лёжа (гантели) — 3×10", "Выпады вперёд — 3×10", "Скакалка — 2 мин", "Планка с подъёмом рук — 3×20 сек"] },
  // День 5
  { day: 5, title: "Ягодицы & Кор", img: "https://images.pexels.com/photos/7029875/pexels-photo-7029875.jpeg?auto=compress&cs=tinysrgb&w=600", exercises: ["Приседания сумо — 3×15", "Ягодичный мост — 3×20", "Подъёмы на носки с гантелями — 3×20", "Вакуум живота — 3×30 сек", "Скакалка — 1.5 мин"] },
  // День 6
  { day: 6, title: "Спина & Плечи", img: "https://images.pexels.com/photos/8454345/pexels-photo-8454345.jpeg?auto=compress&cs=tinysrgb&w=600", exercises: ["Разведение гантелей в стороны — 3×12", "Тяга к поясу (гантели) — 3×12", "Обратные отжимания — 3×10", "Птица-собака — 3×12/сторона", "Скакалка — 2 мин"] },
  // День 7 — отдых или лёгкая растяжка
  { day: 7, title: "Активный отдых", img: "https://images.pexels.com/photos/7029877/pexels-photo-7029877.jpeg?auto=compress&cs=tinysrgb&w=600", exercises: ["Растяжка спины — 10 мин", "Ходьба или йога — 20 мин", "Дыхательные упражнения — 5 мин"] },

  // Повторяем цикл с вариациями до 30 дней (для краткости — сокращённая версия)
  // В реальном проекте — все 30 уникальных дней
  ...Array.from({length: 23}, (_, i) => {
    const baseDay = (i % 7) + 1;
    const dayNum = i + 8;
    const base = workouts[baseDay - 1];
    return {
      day: dayNum,
      title: base.title + ` (повтор ${Math.floor(i / 7) + 2})`,
      img: base.img,
      exercises: base.exercises.map(e => e.replace(/(\d+)×/g, (_, reps) => `${Math.min(25, Math.max(8, parseInt(reps)+1))}×`))
    };
  })
];

// ============ КЕТО-МЕНЮ ============
const meals = [
  { day: 1, meals: [{type:"Завтрак",desc:"Омлет с сыром, шпинатом и авокадо (3 яйца, 30 г сыра, ½ авокадо, 1 ст.л. масла)"},{type:"Обед",desc:"Куриная грудка с соусом песто + салат из рукколы с оливковым маслом"},{type:"Ужин",desc:"Творог 9% с льняным семенем и кокосовой стружкой"}] },
  { day: 2, meals: [{type:"Завтрак",desc:"Греческий йогурт 10% + миндаль + кокосовое масло"},{type:"Обед",desc:"Лосось на сковороде с брокколи и сливочным соусом"},{type:"Ужин",desc:"Яйца в кокосовом масле с помидорами черри"}] },
  { day: 3, meals: [{type:"Завтрак",desc:"Смузи: авокадо, кокосовое молоко, протеин, семена чиа"},{type:"Обед",desc:"Говядина с грибами и сливками"},{type:"Ужин",desc:"Сырники без муки (творог, яйцо, ваниль)"}] },
  { day: 4, meals: [{type:"Завтрак",desc:"Яичница с беконом и авокадо"},{type:"Обed",desc:"Цукини-лапша с курицей и песто"},{type:"Ужин",desc:"Орехи + сыр + оливки"}] },
  { day: 5, meals: [{type:"Завтрак",desc:"Кокосовые блинчики с маслом и ягодами"},{type:"Обед",desc:"Салат Цезарь с курицей и пармезаном (без сухариков)"},{type:"Ужин",desc:"Тушёная капуста с сосисками"}] },
  { day: 6, meals: [{type:"Завтрак",desc:"Фриттата с перцем и сыром"},{type:"Обед",desc:"Рыба с цветной капустой под сыром"},{type:"Ужин",desc:"Кефир 10% + льняное масло"}] },
  { day: 7, meals: [{type:"Завтрак",desc:"Омлет с лососем и укропом"},{type:"Обед",desc:"Суп-пюре из брокколи на сливках"},{type:"Ужин",desc:"Ореховая смесь + темный шоколад 85%"}] },
  // Остальные дни — аналогично (можно расширить)
  ...Array.from({length: 23}, (_, i) => {
    const baseMeals = meals[i % 7];
    return { day: i + 8, meals: baseMeals.meals };
  })
];

// ============ ЛОГИКА ============
let currentDay = 1;

function renderDay(dayNum) {
  const w = workouts.find(w => w.day === dayNum);
  const m = meals.find(m => m.day === dayNum);

  if (!w || !m) return;

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

  // Обновляем кнопки
  document.getElementById('prevBtn').disabled = (dayNum <= 1);
  document.getElementById('nextBtn').disabled = (dayNum >= 30);
}

// Навигация
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

// Старт
renderDay(1);
