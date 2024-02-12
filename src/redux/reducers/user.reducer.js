export const UPDATE_PROFILE = 'UPDATE_PROFILE';

const initialState = {
    profile:{
        nickname: '',
        age: 0,
    }
};

export function userReducer(state, action) {
    let newState = {...state};

    if(action.type === 'UPDATE_PROFILE') {
        newState.profile = action.payload;
    }

    return newState;
}