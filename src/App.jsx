import { useMemo, useState } from 'react';
import './App.css';

const products = [
  {
    id: 1,
    group: 'carbs',
    groupName: 'Вуглеводи',
    badge: 'В',
    name: 'Бобові',
    portion: 20,
    unit: 'г',
    kcal: 62,
    protein: 4,
    color: '#3b82f6',
  },
  {
    id: 2,
    group: 'carbs',
    groupName: 'Вуглеводи',
    badge: 'В',
    name: 'Будь-яка крупа',
    portion: 18,
    unit: 'г',
    kcal: 59,
    protein: 1.8,
    color: '#3b82f6',
  },
  {
    id: 3,
    group: 'carbs',
    groupName: 'Вуглеводи',
    badge: 'В',
    name: 'Картопля',
    portion: 81,
    unit: 'г',
    kcal: 62,
    protein: 1.6,
    color: '#3b82f6',
  },
  {
    id: 4,
    group: 'carbs',
    groupName: 'Вуглеводи',
    badge: 'В',
    name: 'Кукурудза свіжа',
    portion: 72,
    unit: 'г',
    kcal: 62,
    protein: 2.4,
    color: '#3b82f6',
  },
  {
    id: 5,
    group: 'carbs',
    groupName: 'Вуглеводи',
    badge: 'В',
    name: 'Лаваш',
    portion: 25,
    unit: 'г',
    kcal: 60,
    protein: 2,
    color: '#3b82f6',
  },
  {
    id: 6,
    group: 'carbs',
    groupName: 'Вуглеводи',
    badge: 'В',
    name: 'Макарони т.с.',
    portion: 17,
    unit: 'г',
    kcal: 58,
    protein: 2,
    color: '#3b82f6',
  },
  {
    id: 7,
    group: 'carbs',
    groupName: 'Вуглеводи',
    badge: 'В',
    name: 'Рис нешліфований',
    portion: 18,
    unit: 'г',
    kcal: 59,
    protein: 1.3,
    color: '#3b82f6',
  },
  {
    id: 8,
    group: 'carbs',
    groupName: 'Вуглеводи',
    badge: 'В',
    name: 'Хлібці',
    portion: 18,
    unit: 'г',
    kcal: 58,
    protein: 1.8,
    color: '#3b82f6',
  },
  {
    id: 9,
    group: 'carbs',
    groupName: 'Вуглеводи',
    badge: 'В',
    name: 'Цільнозернове борошно',
    portion: 18,
    unit: 'г',
    kcal: 58,
    protein: 2,
    color: '#3b82f6',
  },
  {
    id: 10,
    group: 'carbs',
    groupName: 'Вуглеводи',
    badge: 'В',
    name: 'Цільнозерновий хліб',
    portion: 100,
    unit: 'г',
    kcal: 250,
    protein: 9,
    color: '#3b82f6',
  },

  {
    id: 11,
    group: 'protein',
    groupName: 'Білки',
    badge: 'Б',
    name: 'Куряче або індиче філе',
    portion: 243,
    unit: 'г',
    kcal: 267,
    protein: 53.5,
    color: '#ef4444',
  },
  {
    id: 12,
    group: 'protein',
    groupName: 'Білки',
    badge: 'Б',
    name: 'Морепродукти',
    portion: 268,
    unit: 'г',
    kcal: 268,
    protein: 53.6,
    color: '#ef4444',
  },
  {
    id: 13,
    group: 'protein',
    groupName: 'Білки',
    badge: 'Б',
    name: 'Печінка',
    portion: 205,
    unit: 'г',
    kcal: 267,
    protein: 36.9,
    color: '#ef4444',
  },
  {
    id: 14,
    group: 'protein',
    groupName: 'Білки',
    badge: 'Б',
    name: 'Риба від 5% жиру',
    portion: 250,
    unit: 'г',
    kcal: 425,
    protein: 45,
    color: '#ef4444',
  },
  {
    id: 15,
    group: 'protein',
    groupName: 'Білки',
    badge: 'Б',
    name: 'Риба до 5% жиру',
    portion: 243,
    unit: 'г',
    kcal: 267,
    protein: 48.6,
    color: '#ef4444',
  },
  {
    id: 16,
    group: 'protein',
    groupName: 'Білки',
    badge: 'Б',
    name: 'Телятина',
    portion: 156,
    unit: 'г',
    kcal: 265,
    protein: 31.2,
    color: '#ef4444',
  },
  {
    id: 17,
    group: 'protein',
    groupName: 'Білки',
    badge: 'Б',
    name: 'Яйця цілі',
    portion: 3,
    unit: 'шт',
    kcal: 236,
    protein: 18.8,
    color: '#ef4444',
  },

  {
    id: 18,
    group: 'veg',
    groupName: 'Овочі',
    badge: 'О',
    name: 'Гриби',
    portion: 600,
    unit: 'г',
    kcal: 120,
    protein: 21,
    color: '#22c55e',
  },
  {
    id: 19,
    group: 'veg',
    groupName: 'Овочі',
    badge: 'О',
    name: 'Овочі, квашені овочі та зелень',
    portion: 600,
    unit: 'г',
    kcal: 120,
    protein: 9,
    color: '#22c55e',
  },

  {
    id: 20,
    group: 'fat',
    groupName: 'Жири',
    badge: 'Ж',
    name: 'Авокадо',
    portion: 100,
    unit: 'г',
    kcal: 160,
    protein: 2,
    color: '#eab308',
  },
  {
    id: 21,
    group: 'dairy',
    groupName: 'Молочне',
    badge: 'М',
    name: 'Сири мʼякі, тверді, плавлені',
    portion: 60,
    unit: 'г',
    kcal: 210,
    protein: 12,
    color: '#a855f7',
  },

  {
    id: 22,
    group: 'fruit',
    groupName: 'Фрукти',
    badge: 'Ф',
    name: 'Банани, виноград, хурма',
    portion: 230,
    unit: 'г',
    kcal: 218,
    protein: 2.3,
    color: '#ec4899',
  },
  {
    id: 23,
    group: 'fruit',
    groupName: 'Фрукти',
    badge: 'Ф',
    name: 'Фрукти та ягоди',
    portion: 440,
    unit: 'г',
    kcal: 220,
    protein: 4.4,
    color: '#ec4899',
  },

  {
    id: 24,
    group: 'nuts',
    groupName: 'Горіхи та насіння',
    badge: 'Г',
    name: 'Будь-які горіхи',
    portion: 10,
    unit: 'г',
    kcal: 60,
    protein: 2,
    color: '#737373',
  },
  {
    id: 25,
    group: 'nuts',
    groupName: 'Горіхи та насіння',
    badge: 'Г',
    name: 'Насіння',
    portion: 10,
    unit: 'г',
    kcal: 60,
    protein: 2,
    color: '#737373',
  },

  {
    id: 26,
    group: 'free',
    groupName: 'Вільний вибір',
    badge: 'С',
    name: 'Банани, виноград, хурма',
    portion: 475,
    unit: 'г',
    kcal: 451,
    protein: 4.8,
    color: '#f97316',
  },
  {
    id: 27,
    group: 'free',
    groupName: 'Вільний вибір',
    badge: 'С',
    name: 'Будь-що: солодощі, снеки, ковбаса',
    portion: 90,
    unit: 'г',
    kcal: 450,
    protein: 4.5,
    color: '#f97316',
  },
  {
    id: 28,
    group: 'free',
    groupName: 'Вільний вибір',
    badge: 'С',
    name: 'Міцні алкогольні напої',
    portion: 50,
    unit: 'г',
    kcal: 110,
    protein: 0,
    color: '#f97316',
  },
  {
    id: 29,
    group: 'free',
    groupName: 'Вільний вибір',
    badge: 'С',
    name: 'Пиво',
    portion: 240,
    unit: 'г',
    kcal: 103,
    protein: 0,
    color: '#f97316',
  },
  {
    id: 30,
    group: 'free',
    groupName: 'Вільний вибір',
    badge: 'С',
    name: 'Сухе вино',
    portion: 150,
    unit: 'г',
    kcal: 104,
    protein: 0,
    color: '#f97316',
  },
  {
    id: 31,
    group: 'free',
    groupName: 'Вільний вибір',
    badge: 'С',
    name: 'Фрукти та ягоди',
    portion: 900,
    unit: 'г',
    kcal: 450,
    protein: 9,
    color: '#f97316',
  },
];

const GROUP_MULTIPLIERS = {
  carbs: 4,
  protein: 1.6,
  veg: 1,
  fat: 1,
  dairy: 1,
  fruit: 1,
  nuts: 1,
  free: 1,
};

const baseMeals = ['Сніданок', 'Обід', 'Вечеря'];

const todayISO = () => new Date().toISOString().slice(0, 10);

function addDays(date, days) {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

function toNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : 0;
}

function clamp(value, min = 0, max = 100) {
  return Math.max(min, Math.min(max, value));
}

export default function App() {
  const [activeTab, setActiveTab] = useState('ration');
  const [selectedDate, setSelectedDate] = useState(todayISO());
  const [diary, setDiary] = useState({});
  const [openedMeal, setOpenedMeal] = useState(null);
  const [adding, setAdding] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [amount, setAmount] = useState(0);
  const [extraMeals, setExtraMeals] = useState([]);
  const [touchStart, setTouchStart] = useState(0);
  const [swipedMeal, setSwipedMeal] = useState(null);

  const [health, setHealth] = useState({
    steps: '',
    activeCalories: '',
    restingCalories: '',
  });

  const [profile, setProfile] = useState({
    gender: 'female',
    age: 30,
    height: 169,
    startWeight: 68.5,
    weight: 68.5,
    goalWeight: 56,
  });

  const age = toNumber(profile.age);
  const height = toNumber(profile.height);
  const startWeight = toNumber(profile.startWeight);
  const currentWeight = toNumber(profile.weight);
  const goalWeight = toNumber(profile.goalWeight);

  const calculatedStepsGoal = useMemo(() => {
    if (!currentWeight || !height || !age) return 7000;

    let goal = 7000;

    if (currentWeight - goalWeight > 10) goal += 1000;
    if (currentWeight - goalWeight > 20) goal += 500;
    if (age > 45) goal -= 500;
    if (age > 60) goal -= 1000;

    return clamp(Math.round(goal / 500) * 500, 5000, 10000);
  }, [age, height, currentWeight, goalWeight]);

  const stepsGoal = calculatedStepsGoal;

  const bmr =
    age && height && currentWeight
      ? profile.gender === 'female'
        ? 10 * currentWeight + 6.25 * height - 5 * age - 161
        : 10 * currentWeight + 6.25 * height - 5 * age + 5
      : 0;

  const activityMultiplier =
    stepsGoal < 5000
      ? 1.2
      : stepsGoal < 7000
      ? 1.3
      : stepsGoal < 10000
      ? 1.35
      : 1.45;

  const maintenanceCalories = bmr ? Math.round(bmr * activityMultiplier) : 0;

  const weightToLose = Math.max(0, currentWeight - goalWeight);

  const deficit = weightToLose > 10 ? 350 : weightToLose > 5 ? 300 : 250;

  const dailyGoal = maintenanceCalories
    ? Math.round(Math.max(1200, maintenanceCalories - deficit))
    : 1944;

  const totalWeightToLose = startWeight - goalWeight;
  const lostWeight = startWeight - currentWeight;

  const weightProgress =
    totalWeightToLose > 0
      ? clamp(Math.round((lostWeight / totalWeightToLose) * 100))
      : 0;

  const stepsToday = toNumber(health.steps);
  const stepsPercent = stepsGoal
    ? clamp(Math.round((stepsToday / stepsGoal) * 100))
    : 0;

  const planScale = dailyGoal / 1944;

  const plannedProducts = products.map((product) => {
    const groupMultiplier = GROUP_MULTIPLIERS[product.group] || 1;
    const totalMultiplier = groupMultiplier * planScale;

    return {
      ...product,
      portion: Math.max(1, Math.round(product.portion * totalMultiplier)),
      kcal: Math.max(1, Math.round(product.kcal * totalMultiplier)),
      protein: Number((product.protein * totalMultiplier).toFixed(1)),
    };
  });

  const entries = diary[selectedDate] || [];
  const mealNames = [...baseMeals, ...extraMeals];

  const totals = useMemo(() => {
    const kcal = entries.reduce((s, e) => s + e.kcal, 0);
    const protein = entries.reduce((s, e) => s + e.protein, 0);
    const meals = new Set(entries.map((e) => e.meal)).size;
    return { kcal, protein, meals };
  }, [entries]);

  const kcalPercent = dailyGoal
    ? clamp(Math.round((totals.kcal / dailyGoal) * 100))
    : 0;

  const proteinGoal = currentWeight ? Math.round(currentWeight * 1.4) : 90;
  const proteinPercent = proteinGoal
    ? clamp(Math.round((totals.protein / proteinGoal) * 100))
    : 0;

  const getGroupUsed = (group) =>
    Math.min(
      1,
      entries
        .filter((e) => e.group === group)
        .reduce((s, e) => s + e.amount / e.portion, 0)
    );

  const openAddProduct = (mealName) => {
    setOpenedMeal(mealName);
    setAdding(true);
    setSelectedProduct(null);
    setAmount(0);
  };

  const saveProduct = () => {
    if (!selectedProduct || amount <= 0 || !openedMeal) return;

    const entry = {
      id: Date.now(),
      meal: openedMeal,
      name: selectedProduct.name,
      group: selectedProduct.group,
      groupName: selectedProduct.groupName,
      portion: selectedProduct.portion,
      amount,
      unit: selectedProduct.unit,
      kcal: Math.round(
        (selectedProduct.kcal * amount) / selectedProduct.portion
      ),
      protein: Number(
        ((selectedProduct.protein * amount) / selectedProduct.portion).toFixed(
          1
        )
      ),
    };

    setDiary({ ...diary, [selectedDate]: [...entries, entry] });
    setAdding(false);
    setSelectedProduct(null);
    setAmount(0);
  };

  const deleteEntry = (id) => {
    setDiary({ ...diary, [selectedDate]: entries.filter((e) => e.id !== id) });
  };

  const week = [-3, -2, -1, 0, 1, 2, 3].map((n) => addDays(selectedDate, n));

  return (
    <div className="phone">
      <header>
        <div>
          <div className="header-title">
            {openedMeal && (
              <button
                className="header-back"
                onClick={() => setOpenedMeal(null)}
              >
                ‹
              </button>
            )}

            <h1>
              {activeTab === 'ration' && 'Раціон'}
              {activeTab === 'home' && 'Головна'}
              {activeTab === 'progress' && 'Прогрес'}
            </h1>
          </div>

          <p>{new Date(selectedDate).toLocaleDateString('uk-UA')}</p>
        </div>
        <div className="avatar">У</div>
      </header>

      <div className="calendar">
        <button onClick={() => setSelectedDate(addDays(selectedDate, -1))}>
          ‹
        </button>
        {week.map((d) => (
          <button
            key={d}
            onClick={() => setSelectedDate(d)}
            className={d === selectedDate ? 'day active-day' : 'day'}
          >
            <span>
              {new Date(d).toLocaleDateString('uk-UA', { weekday: 'short' })}
            </span>
            <b>{new Date(d).getDate()}</b>
          </button>
        ))}
        <button onClick={() => setSelectedDate(addDays(selectedDate, 1))}>
          ›
        </button>
      </div>

      {activeTab === 'ration' && (
        <main>
          {!openedMeal && (
            <>
              <section className="summary">
                <h2>{totals.protein.toFixed(1)} г білка</h2>
                <p>
                  {Math.round(totals.kcal)} / {dailyGoal} ккал
                </p>
                <div className="bar">
                  <div style={{ width: `${kcalPercent}%` }} />
                </div>
              </section>

              {mealNames.map((m) => {
                const mealEntries = entries.filter((e) => e.meal === m);
                const mealKcal = mealEntries.reduce((s, e) => s + e.kcal, 0);
                const mealProtein = mealEntries.reduce(
                  (s, e) => s + e.protein,
                  0
                );

                return (
                  <div
                    className={`swipe-wrapper ${
                      swipedMeal === m ? 'swiped' : ''
                    }`}
                    key={m}
                  >
                    {extraMeals.includes(m) && (
                      <button
                        className="delete-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          setExtraMeals(
                            extraMeals.filter((meal) => meal !== m)
                          );
                          setSwipedMeal(null);
                        }}
                      >
                        🗑
                        <span>Видалити</span>
                      </button>
                    )}

                    <button
                      className="meal-tile"
                      onClick={() => {
                        if (swipedMeal && swipedMeal !== m) {
                          setSwipedMeal(null);
                          return;
                        }

                        setOpenedMeal(m);
                      }}
                      onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
                      onTouchEnd={(e) => {
                        const end = e.changedTouches[0].clientX;

                        if (touchStart - end > 70 && extraMeals.includes(m)) {
                          setSwipedMeal(m);
                        }

                        if (end - touchStart > 70) {
                          setSwipedMeal(null);
                        }
                      }}
                    >
                      <div>
                        <h2>{m}</h2>
                        <p>
                          {mealEntries.length
                            ? `${mealEntries.length} ${
                                mealEntries.length === 1
                                  ? 'продукт'
                                  : mealEntries.length >= 2 &&
                                    mealEntries.length <= 4
                                  ? 'продукти'
                                  : 'продуктів'
                              }`
                            : 'Поки нічого не додано'}
                        </p>
                      </div>

                      <div className="meal-total">
                        <b>{mealKcal}</b>
                        <span>ккал</span>
                        <small>{mealProtein.toFixed(1)} г білка</small>
                      </div>
                    </button>
                  </div>
                );
              })}

              <button
                className="add-meal-btn"
                onClick={() => {
                  const next = extraMeals.length + 1;
                  setExtraMeals([...extraMeals, `Додатковий прийом ${next}`]);
                }}
              >
                + Додати прийом їжі
              </button>
            </>
          )}

          {openedMeal && !adding && (
            <>
              <section className="meal-detail">
                <h2>{openedMeal}</h2>

                {entries.filter((e) => e.meal === openedMeal).length === 0 && (
                  <p className="empty">Поки нічого не додано</p>
                )}

                {entries
                  .filter((e) => e.meal === openedMeal)
                  .map((e) => (
                    <div className="entry" key={e.id}>
                      <div>
                        <b>{e.name}</b>
                        <p>
                          {e.amount}
                          {e.unit} • {e.kcal} ккал • {e.protein} г білка
                        </p>
                      </div>
                      <button onClick={() => deleteEntry(e.id)}>×</button>
                    </div>
                  ))}

                <button
                  className="add-food"
                  onClick={() => openAddProduct(openedMeal)}
                >
                  + Додати продукт
                </button>
              </section>
            </>
          )}

          {openedMeal && adding && (
            <>
              <button className="back" onClick={() => setAdding(false)}>
                ‹ Назад до {openedMeal}
              </button>

              <h2 className="section-title">Додати в: {openedMeal}</h2>

              {!selectedProduct &&
                plannedProducts.map((p) => {
                  const available = Math.max(
                    0,
                    Math.round(p.portion * (1 - getGroupUsed(p.group)))
                  );

                  return (
                    <button
                      className="food-card"
                      key={p.id}
                      onClick={() => {
                        setSelectedProduct(p);
                        setAmount(0);
                      }}
                    >
                      <div className="left">
                        <span className="badge" style={{ background: p.color }}>
                          {p.badge}
                        </span>
                        <div>
                          <h2>{p.name}</h2>
                          <p>
                            {p.groupName} • {p.kcal} ккал • {p.protein} г білка
                          </p>
                        </div>
                      </div>
                      <div className="amount">
                        {available} {p.unit}
                      </div>
                    </button>
                  );
                })}

              {selectedProduct && (
                <section className="modal-card">
                  <button
                    className="back"
                    onClick={() => setSelectedProduct(null)}
                  >
                    ‹ До списку продуктів
                  </button>

                  <h2>{selectedProduct.name}</h2>
                  <p className="muted">
                    Повна порція: {selectedProduct.portion}{' '}
                    {selectedProduct.unit}
                  </p>

                  <label>
                    Кількість: <b>{amount}</b> {selectedProduct.unit}
                  </label>

                  <input
                    type="range"
                    min="0"
                    max={selectedProduct.portion}
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                  />

                  <div className="stats">
                    <div>
                      <b>
                        {Math.round(
                          (selectedProduct.kcal * amount) /
                            selectedProduct.portion
                        )}
                      </b>
                      <span>ккал</span>
                    </div>
                    <div>
                      <b>
                        {(
                          (selectedProduct.protein * amount) /
                          selectedProduct.portion
                        ).toFixed(1)}
                        г
                      </b>
                      <span>білки</span>
                    </div>
                  </div>

                  <div className="percent-buttons">
                    {[25, 50, 75, 100].map((n) => (
                      <button
                        key={n}
                        onClick={() =>
                          setAmount(
                            Math.round((selectedProduct.portion * n) / 100)
                          )
                        }
                      >
                        {n}%
                      </button>
                    ))}
                  </div>

                  <button className="save" onClick={saveProduct}>
                    Додати
                  </button>
                </section>
              )}
            </>
          )}
        </main>
      )}

      {activeTab === 'home' && (
        <main>
          <HomeCard
            value={`${Math.round(totals.kcal)} / ${dailyGoal}`}
            text="калорії сьогодні"
            percent={kcalPercent}
          />
          <HomeCard
            value={`${totals.protein.toFixed(1)} / ${proteinGoal} г`}
            text="білка сьогодні"
            percent={proteinPercent}
          />
          <HomeCard
            value={`${stepsToday} / ${stepsGoal}`}
            text="кроків сьогодні"
            percent={stepsPercent}
          />
          <div className="simple-card">
            <h2>{totals.meals}</h2>
            <p>прийомів їжі додано</p>
          </div>

          <section className="health-box">
            <h2>Дані активності</h2>

            <label>
              Кроки
              <input
                type="number"
                value={health.steps}
                onChange={(e) =>
                  setHealth({ ...health, steps: e.target.value })
                }
                placeholder={`Наприклад ${stepsGoal}`}
              />
            </label>

            <label>
              Активні калорії
              <input
                type="number"
                value={health.activeCalories}
                onChange={(e) =>
                  setHealth({ ...health, activeCalories: e.target.value })
                }
                placeholder="Наприклад 420"
              />
            </label>

            <label>
              Калорії спокою
              <input
                type="number"
                value={health.restingCalories}
                onChange={(e) =>
                  setHealth({ ...health, restingCalories: e.target.value })
                }
                placeholder="Наприклад 1450"
              />
            </label>

            <div className="balance-card">
              <div>
                <span>Всього спалено</span>

                <b>
                  {Number(health.restingCalories || 0) +
                    Number(health.activeCalories || 0)}{' '}
                  ккал
                </b>
              </div>

              <div className="balance-right">
                <span>Баланс дня</span>

                <b>
                  {Math.round(
                    totals.kcal -
                      (Number(health.restingCalories || 0) +
                        Number(health.activeCalories || 0))
                  )}{' '}
                  ккал
                </b>
              </div>
            </div>
          </section>
        </main>
      )}

      {activeTab === 'progress' && (
        <main>
          <section className="health-box">
            <h2>Мої дані</h2>

            <label>
              Стать
              <select
                value={profile.gender}
                onChange={(e) =>
                  setProfile({ ...profile, gender: e.target.value })
                }
              >
                <option value="female">Жінка</option>
                <option value="male">Чоловік</option>
              </select>
            </label>

            <label>
              Вік
              <input
                type="number"
                value={profile.age}
                onChange={(e) =>
                  setProfile({ ...profile, age: e.target.value })
                }
              />
            </label>

            <label>
              Зріст, см
              <input
                type="number"
                value={profile.height}
                onChange={(e) =>
                  setProfile({ ...profile, height: e.target.value })
                }
              />
            </label>

            <label>
              Початкова вага, кг
              <input
                type="number"
                value={profile.startWeight}
                onChange={(e) =>
                  setProfile({ ...profile, startWeight: e.target.value })
                }
              />
            </label>

            <label>
              Поточна вага, кг
              <input
                type="number"
                value={profile.weight}
                onChange={(e) =>
                  setProfile({ ...profile, weight: e.target.value })
                }
              />
            </label>

            <label>
              Бажана вага, кг
              <input
                type="number"
                value={profile.goalWeight}
                onChange={(e) =>
                  setProfile({ ...profile, goalWeight: e.target.value })
                }
              />
            </label>
          </section>

          <HomeCard
            value={`${dailyGoal} ккал`}
            text="рекомендовано на день"
            percent={100}
          />

          <HomeCard
            value={`${maintenanceCalories} ккал`}
            text="приблизне підтримання"
            percent={0}
          />

          <HomeCard
            value={`${Math.round(bmr)} ккал`}
            text="базовий обмін"
            percent={0}
          />

          <HomeCard
            value={`${weightToLose.toFixed(1)} кг`}
            text="залишилось до цілі"
            percent={weightProgress}
          />

          <HomeCard
            value={`${stepsGoal} кроків`}
            text="ціль активності на день"
            percent={stepsPercent}
          />
        </main>
      )}

      <div className="bottom-nav">
        <Nav
          active={activeTab === 'home'}
          onClick={() => {
            setActiveTab('home');
            setOpenedMeal(null);
          }}
          icon="▦"
          text="Головна"
        />
        <Nav
          active={activeTab === 'ration'}
          onClick={() => setActiveTab('ration')}
          icon="🍴"
          text="Раціон"
        />
        <Nav
          active={activeTab === 'progress'}
          onClick={() => {
            setActiveTab('progress');
            setOpenedMeal(null);
          }}
          icon="📈"
          text="Прогрес"
        />
      </div>
    </div>
  );
}

function HomeCard({ value, text, percent }) {
  const safePercent = clamp(Number(percent) || 0);

  return (
    <div className="home-card">
      <div>
        <h2>{value}</h2>
        <p>{text}</p>
      </div>
      <div
        className="circle"
        style={{
          background: `conic-gradient(#111 ${
            safePercent * 3.6
          }deg, #e5e5e5 0deg)`,
        }}
      >
        <div className="circle-inner">{safePercent}%</div>
      </div>
    </div>
  );
}

function Nav({ active, onClick, icon, text }) {
  return (
    <div className={`nav-item ${active ? 'nav-active' : ''}`} onClick={onClick}>
      <div>{icon}</div>
      <span>{text}</span>
    </div>
  );
}
