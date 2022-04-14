import { SAVE_INFO } from "./action.type";

export const saveConact = (conatct) => ({
    type: SAVE_INFO,
    payload: conatct
});