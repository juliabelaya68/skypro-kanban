import { Loader } from "./Loader";

const CardLoader = () => {
  return (
    <div className="card-loader">
      <div className="loader-wrapper">
        
        <Loader width={82} height={20} className="taitleLoader" />
        
        
        <Loader width={18} height={4} className="subtitle-loader" />
        
        
        <Loader width={113} height={13} className="blankLoader" />
      </div>
      
      
      <Loader width={58} height={13} className="dateLoader" />
    </div>
  );
};

export default CardLoader;