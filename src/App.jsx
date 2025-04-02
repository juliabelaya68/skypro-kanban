import { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import './App.css'

function App() {
	const[loading,setLoading]=useState(true)
	useEffect(()=>{
		setTimeout(()=>{
			setLoading(false)
		},4000);
	},[]);
	return (
		
		 <body>
		 <div className="wrapper">
		<Header/>
		
		<Main loading={loading}/>
		</div>
		</body>
	);
};


export default App;

