import React from 'react';
import Column from './Column';

// Массив статусов
const statuses = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

const Main = ({ loading }) => {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          {loading ? (
            <div className="loading">
              <p className="downloadCard">Данные загружаются</p>
              <div className="spinner"></div>
            </div>
          ) : (
            <div className="main__content">
              {statuses.map((title) => (
                <Column loading={loading} title={title} key={title} />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Main;
