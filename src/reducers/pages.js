/*import React from "react";*/
import {
    HOME_PAGE,
    AUTHORIZATION_PAGE,
    REGISTRATION_PAGE,
    USER_ACCOUNT_PAGE,
    PRODUCT_PAGE,
    ABOUT_COMPANY_PAGE,
    FAQ_PAGE,
    COMPANY_BLOG_PAGE,
    ALL_CATEGORY_PAGE,
    WEAPON_PAGE,
    ARMOR_PAGE,
    SPELL_PAGE,
    BASKET_PAGE
} from "../consts/constants";

const initialState = [];

const rdShowWindow = (state = initialState, action) => {
    switch (action.type) {
        case HOME_PAGE: {
            return {
                ...state,
                changeWindows: HOME_PAGE
            };
        }
        case AUTHORIZATION_PAGE: {
            return {
                ...state,
                changeWindows: AUTHORIZATION_PAGE
            };
        }
        case REGISTRATION_PAGE: {
            return {
                ...state,
                changeWindows: REGISTRATION_PAGE
            };
        }
        case USER_ACCOUNT_PAGE: {
            return {
                ...state,
                changeWindows: USER_ACCOUNT_PAGE
            };
        }
        case PRODUCT_PAGE: {
            return {
                ...state,
                changeWindows: PRODUCT_PAGE,
                idProduct: action.idProduct
            };
        }
        case ABOUT_COMPANY_PAGE: {
            return {
                ...state,
                changeWindows: ABOUT_COMPANY_PAGE
            };
        }
        case FAQ_PAGE: {
            return {
                ...state,
                changeWindows: FAQ_PAGE
            };
        }
        case COMPANY_BLOG_PAGE: {
            return {
                ...state,
                changeWindows: COMPANY_BLOG_PAGE
            };
        }
        case ALL_CATEGORY_PAGE: {
            return {
                ...state,
                changeWindows: ALL_CATEGORY_PAGE
            };
        }
        case WEAPON_PAGE: {
            return {
                ...state,
                changeWindows: WEAPON_PAGE
            };
        }
        case ARMOR_PAGE: {
            return {
                ...state,
                changeWindows: ARMOR_PAGE
            };
        }
        case SPELL_PAGE: {
            return {
                ...state,
                changeWindows: SPELL_PAGE
            };
        }
        case BASKET_PAGE: {
            return {
                ...state,
                changeWindows: BASKET_PAGE
            };
        }
        default: {
            return {
                ...state,
                changeWindows: HOME_PAGE
            }
        }
    }
};

export default rdShowWindow;