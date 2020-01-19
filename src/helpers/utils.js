import ActionType from './enums/constants/ActionType';

export const not = obj => !obj;

export const startLoading = identifier => ({
    type: ActionType.UPDATE_LOADING,
    loading: { [identifier]: true },
});

export const endLoading = identifier => ({
    type: ActionType.UPDATE_LOADING,
    loading: { [identifier]: false },
});

export default {
    endLoading,
    startLoading,
    not
};