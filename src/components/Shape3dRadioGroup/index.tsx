import {
    FormControl,
    FormControlLabel,
    FormLabel,
    RadioGroup,
} from "@mui/material";

import React from "react";
import Shape3D from "../../types/Shape3D.type";
import config from "../../config";
import radioButtons from "./Buttons";

interface Shape3dRadioGroupProps {
    "formLabel": string;
    "setValue": (newValue: Shape3D) => void;
    "value": Shape3D;
}

const Shape3dRadioGroup: React.FC<Shape3dRadioGroupProps> = React.memo(({
    formLabel,
    setValue,
    value
}) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue: Shape3D = (event.target as HTMLInputElement).value as Shape3D;
        setValue(newValue);
    };

    return (
        <FormControl
            sx={{
                "alignItems": "center",
                "display": "flex",
                "justifyContent": "center",
                "width": "300px"
            }}
        >
            <FormLabel sx={{
                "&.Mui-focused": {
                    "color": "white",
                },
                
                "color": "white", 
                "marginBottom": "15px"
            }}>
                {formLabel}
            </FormLabel>

            <RadioGroup
                row
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
                sx={{
                    "display": "grid",
                    "gap": 2,
                    "gridTemplateColumns": "repeat(3, 1fr)",
                    "marginLeft": "16px",
                    "width": "100%",
                }}
            >
                {
                    radioButtons.map((radioButton) => {
                        return (
                            <FormControlLabel
                                value={radioButton.value}
                                control={radioButton.radioButton}
                                label={radioButton.label}
                                sx={{
                                    "& .MuiFormControlLabel-label": {
                                        "color": 
                                            (value === radioButton.value) 
                                                ? config.shapeRadioCheckedColor
                                                : config.shapeRadioColor,
                                    },

                                    "alignItems": 'center',
                                    "display": 'flex',
                                    "flexDirection": 'column',
                                }}
                            />
                        );
                    })
                }
            </RadioGroup>
        </FormControl>
    );
});

export default Shape3dRadioGroup;
