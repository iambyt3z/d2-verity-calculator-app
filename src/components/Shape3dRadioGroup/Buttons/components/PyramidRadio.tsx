import { Radio, RadioProps } from "@mui/material";
import Pyramid from "../../../../assets/3d-shapes/Pyramid";
import config from "../../../../config";

function PyramidRadio(props: RadioProps) {
    const { disabled } = props;

    return (
        <Radio
            checkedIcon={
                <Pyramid
                    fill={config.shapeRadioCheckedColor}
                    height={config.shapeRadioHeight}
                    width={config.shapeRadioWidth}
                />
            }

            icon={
                <Pyramid
                    fill={(disabled) ? config.shapeRadioDisabledColor : config.shapeRadioColor}
                    height={config.shapeRadioHeight}
                    width={config.shapeRadioWidth}
                />
            }
            
            disableRipple
            {...props}
        />
    );
};

export default PyramidRadio;
