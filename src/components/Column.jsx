import Cards from './Cards';
import CardLoader from './CardLoader';
import data from '../data';

const Column = ({ title, loading }) => {
  const filteredData = data.filter((item) => item.status === title);

  return (
    <>
      <div className="main__column">
        <div className="column__title">
          <p>{title}</p>
        </div>
        <div className="cards">
          {loading
            ? filteredData.map((item) => <CardLoader key={item.id} />)
            : filteredData.map((item) => <Cards key={item.id} item={item} />)
          }
        </div>
      </div>
    </>
  );
};

export default Column;

 
