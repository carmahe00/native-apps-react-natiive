import { AutState, authInitialState } from './AuthContext';

type AuthAction =
    | { type: 'signIn' }
    | { type: 'changeIcon', payload: string }
    | { type: 'logout' }
    | { type: 'changeUsername', payload: string }
export const authReducer = (state: AutState, action: AuthAction): AutState => {
    switch (action.type) {
        case 'signIn':
            return {
                ...state,
                isLoggedIn: true,
                username: 'no-username-yet',
            };
        case 'changeIcon':
            return {
                ...state,
                favoriteIcon: action.payload,
            };
        case 'changeUsername':
            return {
                ...state,
                username: action.payload,
            };
        case 'logout':
            return authInitialState;
        default:
            return state;
    }
};
