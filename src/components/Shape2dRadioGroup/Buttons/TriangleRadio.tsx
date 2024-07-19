import { Radio, RadioProps } from "@mui/material";
import Triangle from "../../../assets/2d-shapes/Triangle";
import config from "../../../config";

function TriangleRadio(props: RadioProps) {
    const { disabled } = props;

    return (
        <Radio
            checkedIcon={
                <Triangle
                    fill={config.shapeRadioCheckedColor}
                    height={config.shapeRadioHeight}
                    width={config.shapeRadioWidth}
                />
            }

            icon={
                <Triangle
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

export default TriangleRadio;
