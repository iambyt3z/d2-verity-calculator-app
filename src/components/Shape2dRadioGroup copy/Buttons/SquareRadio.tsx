import { Radio, RadioProps } from "@mui/material";
import Square from "../../../assets/2d-shapes/Square";
import config from "../../../config";

function SquareRadio(props: RadioProps) {
    return (
        <Radio
            checkedIcon={
                <Square
                    fill={config.shapeRadioCheckedColor}
                    height={config.shapeRadioHeight}
                    width={config.shapeRadioWidth}
                />
            }

            icon={
                <Square
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

export default SquareRadio;
