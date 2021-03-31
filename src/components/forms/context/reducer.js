export const initialState = {
    menu: null,
    size: null,
    theme: {},
}

export const actions = {
    ACTIVATE_MENU: 'ACTIVATE_MENU',
    CHANGE_SIZE: 'CHANGE_SIZE'
}

const reducer = (state, action) => {
    switch (action.type) {
        case actions.ACTIVATE_MENU: {
            const { payload: { menu } } = action;
            return { ...state, menu, };
        }
        case actions.CHANGE_SIZE: {
            const { payload: { size } } = action;
            return { ...state, size };
        }
        case actions.SELECT_THEME: {
            const { payload: { theme } } = action;
            return { ...state, theme };
        }
        default: {
            return state;
        }
    }
}

export default reducer;