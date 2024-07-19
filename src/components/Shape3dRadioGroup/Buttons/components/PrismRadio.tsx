import { Radio, RadioProps } from "@mui/material";
import Prism from "../../../../assets/3d-shapes/Prism";
import config from "../../../../config";

function PrismRadio(props: RadioProps) {
    const { disabled } = props;

    return (
        <Radio
            checkedIcon={
                <Prism
                    fill={config.shapeRadioCheckedColor}
                    height={config.shapeRadioHeight}
                    width={config.shapeRadioWidth}
                />
            }

            icon={
                <Prism
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

export default PrismRadio;
