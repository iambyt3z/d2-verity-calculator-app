import { Radio, RadioProps } from "@mui/material";
import Triangle from "../../../assets/2d-shapes/Triangle";
import config from "../../../config";

function TriangleRadio(props: RadioProps) {
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

export default TriangleRadio;
