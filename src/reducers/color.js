import {
    BLACK_COLOR,
    WHITE_COLOR
} from "../consts/constants";

const initialState = {color: "blackColor"};

const rdChangeColor = (state = initialState, action) => {
    switch (action.type) {
        case BLACK_COLOR: {
            return {
                ...state,
                color: BLACK_COLOR

            };
        }
        case WHITE_COLOR: {
            return {
                ...state,
                color: WHITE_COLOR

            };
        }
        default: {
            return {
                ...state
            }
        }
    }
};

export default rdChangeColor;