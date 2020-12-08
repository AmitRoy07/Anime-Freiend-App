import { CHANGE_SERACH_FIELD } from "./constants";

const intialState = {
	searchField: ''
}

export const searchAnime = (state=intialState, action={}) => {
	switch(action.type) {
		case CHANGE_SERACH_FIELD:
			return Object.assign({}, state, {searchField: action.payload});
		default:
			return state;	
	}
}