import {
    FormControl,
    FormControlLabel,
    FormLabel,
    RadioGroup,
} from "@mui/material";

import React from "react";
import Shape2D from "../../types/Shape2D.type";
import config from "../../config";
import radioButtons from "./Buttons";

interface Shape2dRadioGroupProps {
    "formLabel": string;
    "setValue": (newValue: Shape2D) => void;
    "value": string;
}

const Shape2dRadioGroup: React.FC<Shape2dRadioGroupProps> = ({
    formLabel,
    setValue,
    value
}) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue: Shape2D = (event.target as HTMLInputElement).value as Shape2D;
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
                    "display": "flex",
                    "justifyContent": "space-around",
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
};

export default Shape2dRadioGroup;
