import Store from "../store/Store";

export default function getPhotoNew(mockFoto:string) {
	try{
		if(Store.getState().user.data.photo!=='undefined' ){
			return Store.getState().user.data.photo
		}else{
			return mockFoto
		}
	}catch (e:any) {
		return mockFoto
	}


}
