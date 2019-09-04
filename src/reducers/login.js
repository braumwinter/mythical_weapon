import {
    IS_LOGIN_TRUE,
    IS_LOGIN_FALSE,
    ENTRANCE
} from "../consts/constants";

const initialState = {userName: ENTRANCE};

const rdIsLogin = (state = initialState, action) => {
    switch (action.type) {
        case IS_LOGIN_TRUE: {
            return {
                ...state,
                userName: action.userName
            };
        }
        case IS_LOGIN_FALSE: {
            return {
                state
            };
        }
        default: {
            return {
                ...state
            }
        }
    }
};

export default rdIsLogin;