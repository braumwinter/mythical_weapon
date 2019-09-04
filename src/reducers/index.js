import {combineReducers} from 'redux';

import rdIsLogin from './login';
import rdShowWindow from './pages';
import rdBasket from './basket';
import rdGetProductId from "./productId";
import rdAddMessage from "./message"
import rdChangeColor from "./color";

export default combineReducers({
    rdIsLogin,
    rdShowWindow,
    rdChangeColor,
    rdBasket,
    rdGetProductId,
    rdAddMessage

})