import { TOGGLE_DARK_MODE } from './Actions';

interface AppState {
    darkMode: boolean;
}

const initialState: AppState = {
    darkMode: false
};

const rootReducer = (state: AppState = initialState, action: any): AppState => {
    switch (action.type) {
        case TOGGLE_DARK_MODE:
            return {
                ...state,
                darkMode: !state.darkMode
            };
        default:
            return state;
    }
};

export default rootReducer;