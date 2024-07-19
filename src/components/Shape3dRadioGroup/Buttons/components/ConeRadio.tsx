import { Radio, RadioProps } from "@mui/material";
import Cone from "../../../../assets/3d-shapes/Cone";
import config from "../../../../config";

function ConeRadio(props: RadioProps) {
    const { disabled } = props;

    return (
        <Radio
            checkedIcon={
                <Cone
                    fill={config.shapeRadioCheckedColor}
                    height={config.shapeRadioHeight}
                    width={config.shapeRadioWidth}
                />
            }

            icon={
                <Cone
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

export default ConeRadio;
