import axios, { AxiosError } from 'axios';
import { AuthAction } from '../context/authReducer';
import { ErrorMsg, Errors } from '../interfaces/appInterfaces';
interface Props {
    err: unknown,
    dispatch: (value: AuthAction) => void,
}
export const cartchError = ({ err, dispatch }: Props) => {
    const errors = err as Error | AxiosError<Errors | ErrorMsg>;
    if (axios.isAxiosError(errors)) {
        if ('msg' in errors.response?.data!) {
            dispatch({ type: 'addError', payload: errors.response?.data.msg || 'Wrong information' });
        } else {
            let concatString = '';
            errors.response?.data.errors.forEach(({ msg }) => {
                concatString = `${concatString} ${msg} \n`;
            });
            dispatch({ type: 'addError', payload: concatString });
        }
    } else {
        console.log(errors.message);
    }
};
