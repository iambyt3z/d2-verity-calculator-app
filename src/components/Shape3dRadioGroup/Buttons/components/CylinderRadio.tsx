import { Radio, RadioProps } from "@mui/material";
import Cylinder from "../../../../assets/3d-shapes/Cylinder";
import config from "../../../../config";

function CylinderRadio(props: RadioProps) {
    const { disabled } = props;

    return (
        <Radio
            checkedIcon={
                <Cylinder
                    fill={config.shapeRadioCheckedColor}
                    height={config.shapeRadioHeight}
                    width={config.shapeRadioWidth}
                />
            }

            icon={
                <Cylinder
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

export default CylinderRadio;
