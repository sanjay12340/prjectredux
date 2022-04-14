import { SAVE_INFO } from "./action.type";
import { contactInitialState } from "./constact.intialstate";

export const contactReducer = (state = contactInitialState, action) => {
    switch (action.type) {
        case SAVE_INFO:
            return [...state, action.payload];


        default: return state;

    }
}