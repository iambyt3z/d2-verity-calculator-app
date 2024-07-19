import { Radio, RadioProps } from "@mui/material";
import Cube from "../../../../assets/3d-shapes/Cube";
import config from "../../../../config";

function CubeRadio(props: RadioProps) {
    const { disabled } = props;

    return (
        <Radio
            checkedIcon={
                <Cube
                    fill={config.shapeRadioCheckedColor}
                    height={config.shapeRadioHeight}
                    width={config.shapeRadioWidth}
                />
            }

            icon={
                <Cube
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

export default CubeRadio;
