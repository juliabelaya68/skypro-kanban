
import Cards from './Cards';
import CardLoader from './CardLoader';
import data from '../data';


const Column = ({title, loading}) => {
  return (
  <>
  <div className="main__column">
    <div className="column__title">
								<p>{title}</p>
							</div>
              <div className="cards">
                {data
                .filter((item) => item.status===title)
                .map ((item,i)=>
                  loading?<CardLoader key={i}/>:<Cards item={item} key={i}/>
              )}
              </div>
              </div>       
  </>         
  );
};

export default Column;
 
