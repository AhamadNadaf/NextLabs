export const handleSliderValue = (val) => {
    return (dispatch) => {
        dispatch({
            type: "sliderValue",
            payload: val
        })
    }
}