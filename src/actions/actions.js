import axios from 'axios';

export function fetchData(){
	return function(dispatch){
		dispatch({type:'FETCH_API_START'})
		axios.get('http://www.mocky.io/v2/5c8b92a4360000cd198f81b4')
		.then(results => {
			dispatch({type:'FETCH_API_SUCCESSFUL', payload: results.data})
		})
		.catch(error => {
			dispatch({type: 'FETCH_API_ERROR', payload: error})
		})
	}
}