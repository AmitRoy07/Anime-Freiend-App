import { CHANGE_SERACH_FIELD } from "./constants";


export const s = (text) => ({
	type: CHANGE_SERACH_FIELD,
	payload: text
})
