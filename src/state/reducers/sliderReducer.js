const reducer = (state = 1, action) => {
    if (action.type === 'sliderValue') {
        if (action.payload > 0) {
            return state = action.payload
        }
        return state
    }
    else {
        return state
    }
}

export default reducer