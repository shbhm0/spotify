export const doLogin = (payload) => {
    return dispatch => {
        dispatch({
            type: 'Login',
            payload: payload
        })
    }
}
export const action = () => {
    return dispatch => {
        dispatch({
            type: 'Login1',
        })
    }
}