import {
    ToggleButton,
    ToggleButtonGroup,
    Typography
} from "@mui/material";

import React from "react";
import SimulationTypeValue from "../../types/SimuationTypeValue.type";
import toggleButtons from "./Button";

interface SimulationTypeProps {
    value: SimulationTypeValue;
    setValue: (newValue: SimulationTypeValue) => void;
}

const SimulationTypeToggle: React.FC<SimulationTypeProps> = React.memo(({
    setValue,
    value,
}) => {
    const handleChange = (
        _event: React.MouseEvent<HTMLElement>,
        newValue: SimulationTypeValue,
    ) => {
        setValue(newValue);
    };

    return (
        <ToggleButtonGroup
            value={value}
            onChange={handleChange}
            exclusive
        >
            {
                toggleButtons.map((toggleButton) => {
                    return (
                        <ToggleButton
                            size="small"
                            value={toggleButton.value}
                            sx={{
                                "&.Mui-selected": {
                                    "backgroundColor": '#7f7f7f', // Background color when selected
                                    "color": 'white', // Text color when selected
                                },

                                "&.Mui-selected:hover": {
                                    "backgroundColor": '#7f7f7f', // Background color on hover
                                },

                                "&:hover": {
                                    "backgroundColor": '#e5e5e5', // Background color on hover
                                },


                                "backgroundColor": "white"
                            }}
                        >
                            <Typography 
                                color="black" 
                                fontSize="0.875rem"
                                fontWeight={500}
                                px={2}
                            >
                                {toggleButton.label}
                            </Typography>
                        </ToggleButton>
                    );
                })
            }
        </ToggleButtonGroup>
    );
});

export default SimulationTypeToggle;
