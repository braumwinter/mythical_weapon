import {
    PRODUCT_ID
} from "../consts/constants";

const initialState = [];

const rdGetProductId = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_ID: {
            return {
                ...state,
                id: action.id
            };
        }
        default: {
            return {
                ...state
            }
        }
    }

};

export default rdGetProductId;