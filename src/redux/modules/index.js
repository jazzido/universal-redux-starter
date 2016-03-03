import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import { reducer as reduxAsyncConnect } from 'redux-async-connect';

export default combineReducers({
    reduxAsyncConnect,
    routing: routeReducer,
    button: function(state={ clicks: 0 }, action={}) {
        switch(action.type) {
            case 'BUTTON_CLICK':
            return {
                ...state,
                clicks: state.clicks + 1
            };
            default:
                return state;
        }
    }
});
