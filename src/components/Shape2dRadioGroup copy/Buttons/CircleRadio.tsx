import { Radio, RadioProps } from "@mui/material";
import Circle from "../../../assets/2d-shapes/Circle";
import config from "../../../config";

function CircleRadio(props: RadioProps) {
    return (
        <Radio
            checkedIcon={
                <Circle
                    fill={config.shapeRadioCheckedColor}
                    height={config.shapeRadioHeight}
                    width={config.shapeRadioWidth}
                />
            }

            icon={
                <Circle
                    fill={config.shapeRadioColor}
                    height={config.shapeRadioHeight}
                    width={config.shapeRadioWidth}
                />
            }
            
            disableRipple
            {...props}
        />
    );
};

export default CircleRadio;
