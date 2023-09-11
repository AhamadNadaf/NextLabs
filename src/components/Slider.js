import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

const Slider = () => {
    const { sliderValue } = useSelector(state => state)
    const dispatch = useDispatch()
    const { handleSliderValue } = bindActionCreators(actionCreators, dispatch)
    return (
        <div className="container text-center py-5 px-5 ">
            <h1 className="display-4"> 
                Please select the number of users:
            </h1>
            <input value={sliderValue} onChange={(e) => handleSliderValue(e.target.value)} type="range" className="form-range py-4 px-4 custom-bg-color" min="0" max="100" step="1" id="customRange3" />
            <h3 className="display-6">Number of user selected {sliderValue}</h3>

        </div>

    )
}

export default Slider