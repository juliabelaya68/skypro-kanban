
import Column from './Column';

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
              {[
                "Без статуса",
                "Нужно сделать",
                "В работе",
                "Тестирование",
                "Готово",
              ].map((title, i) => (
                <Column loading={loading} title={title} key={i} />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Main;
