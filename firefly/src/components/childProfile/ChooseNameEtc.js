import React from "react";
import ColorSlider from "../ColorSlider/ColorSlider";

const ChooseNameEtc = (props) => {
    return (
        <div className="">
            <div style={{}}>
                <h2 className="inputLabel">Nickname</h2>
            </div>
            <input className="input" type="text" />

            <div>
                <h2>Accessories</h2>
            </div>

            <div>
                <h2>Light Color</h2>
                <ColorSlider value={props.colorValue} updateColor={props.updateColor} />
            </div>
        </div>
    );
};

export default ChooseNameEtc;
