import {request} from './request.js'

export const getDetail = () => {
	return request({
		url:'/detail/detaillist'
	})
}