import {
    ADD_TO_BASKET
} from "../consts/constants";

const initialState = {cost: 0};

const rdBasket = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_BASKET: {
            return {
                ...state,
                cost: action.cost
            };
        }
        default: {
            return {
                ...state
            }
        }
    }
};

export default rdBasket;