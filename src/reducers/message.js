import {
    ADD_MESSAGE
} from "../consts/constants";

const initialState = [
    'Здравствуйте) Могу ли я Вам чем-нибудь помочь?'
];

const rdAddMessage = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                textMessage: action.textMessage
            };
        }

        default: {
            return {
                state
            }
        }
    }
};

export default rdAddMessage;