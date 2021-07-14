const initialState = {
    name: 'Shubham Mishra',
    email:'Shbhm00@gmail.com',
    password:'shbhmmshr',
    loggedIn: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Login':
            return { ...state, ...action.payload }
        case  'Login1':
            return{...state,loggedIn:!state.loggedIn}
        default:
            return state;
    }
}