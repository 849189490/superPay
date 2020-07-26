import axios from 'axios'

export function request(options){
	
	const instance = axios.create({
		baseURL: 'http://localhost:3001',
		timeout: 3000
	})
	
	instance.interceptors.response.use(options => {
		return options.data
	}, err => {
		console.log(err);
	})
	
	return instance(options)
}