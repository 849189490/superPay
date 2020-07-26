import {request} from './request.js'

export const getHomeMultidata = () => {
	return request({
		url:'/image/lunbo'
	})
}

export const getHomeGallery = (style,page,pageSize) => {
	return request({
		url:'gallery/getGalleryByPage',
		method:'post',
		data:{
			style,
			page,
			pageSize
		}
	})
}

export const getHomeRecommend = () => {
	return request({
		url:'recommend/getGalleryRecommend'
	})
}