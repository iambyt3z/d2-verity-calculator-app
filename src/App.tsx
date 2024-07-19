import {
    Box,
    Button,
    Divider,
    Stack,
    Typography
} from "@mui/material";

import Shape2D from "./types/Shape2D.type";
import Shape2dRadioGroup from "./components/Shape2dRadioGroup";
import Shape3D from "./types/Shape3D.type";
import Shape3dRadioGroup from "./components/Shape3dRadioGroup";
import SimulationTypeToggle from "./components/SimulationTypeToggle";
import SimulationTypeValue from "./types/SimuationTypeValue.type";
import simulateVerity from "./verity-solver";
import { useState } from "react";

function App() {
    // Inside Room States
    const [insideRoomLeftStatueValue, setInsideRoomLeftStatueValue] = useState<Shape2D>("Circle");
    const [insideRoomMidStatueValue, setInsideRoomMidStatueValue] = useState<Shape2D>("Square");
    const [insideRoomRightStatueValue, setInsideRoomRightStatueValue] = useState<Shape2D>("Triangle");

    // Outside Room States
    const [outsideRoomLeftStatueValue, setOutsideRoomLeftStatueValue] = useState<Shape3D>("Cylinder");
    const [outsideRoomMidStatueValue, setOutsideRoomMidStatueValue] = useState<Shape3D>("Cube");
    const [outsideRoomRightStatueValue, setOutsideRoomRightStatueValue] = useState<Shape3D>("Prism");

    // Simulation Type State
    const [simulationType, setSimulationType] = useState<SimulationTypeValue>("Normal");

    // Dissection Solution
    const [dissectionSolution, setDissectionSolution] = useState<string[]>([]);

    const getVeritySimulation = () => {
        const simulation = simulateVerity(
            insideRoomLeftStatueValue,
            insideRoomMidStatueValue,
            insideRoomRightStatueValue,
            outsideRoomLeftStatueValue,
            outsideRoomMidStatueValue,
            outsideRoomRightStatueValue,
            simulationType
        );

        setDissectionSolution(simulation);
    };

    return (
        <Box
            display="flex"
            justifyContent="center"
            margin={0}
            paddingTop={6}
        >
            <Stack spacing={6}>
                <Typography 
                    variant="h6"
                    textAlign="center"
                >
                    Inside Rooms
                </Typography>

                <Stack direction="row" spacing={4}>
                    <Shape2dRadioGroup 
                        formLabel="Left Statue"
                        value={insideRoomLeftStatueValue}
                        setValue={setInsideRoomLeftStatueValue}
                    />

                    <Divider orientation="vertical" />

                    <Shape2dRadioGroup 
                        formLabel="Middle Statue"
                        value={insideRoomMidStatueValue}
                        setValue={setInsideRoomMidStatueValue}
                    />

                    <Divider orientation="vertical"/>

                    <Shape2dRadioGroup 
                        formLabel="Right Statue"
                        value={insideRoomRightStatueValue}
                        setValue={setInsideRoomRightStatueValue}
                    />
                </Stack>

                <Divider orientation="horizontal" />

                <Typography 
                    variant="h6"
                    textAlign="center"
                >
                    Outside Room
                </Typography>

                <Stack direction="row" spacing={4}>
                    <Shape3dRadioGroup
                        formLabel="Left Statue"
                        value={outsideRoomLeftStatueValue}
                        setValue={setOutsideRoomLeftStatueValue}
                    />

                    <Divider orientation="vertical" />

                    <Shape3dRadioGroup
                        formLabel="Middle Statue"
                        value={outsideRoomMidStatueValue}
                        setValue={setOutsideRoomMidStatueValue}
                    />

                    <Divider orientation="vertical"/>

                    <Shape3dRadioGroup
                        formLabel="Right Statue"
                        value={outsideRoomRightStatueValue}
                        setValue={setOutsideRoomRightStatueValue}
                    />
                </Stack>

                <Divider orientation="horizontal" />

                <Stack
                    direction="row"
                    spacing={6}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    width="100%"
                >
                    <SimulationTypeToggle
                        value={simulationType}
                        setValue={setSimulationType}
                    />

                    <Button 
                        variant="contained"
                        onClick={() => getVeritySimulation()}
                        sx={{
                            '&:hover': {
                                "backgroundColor": '#e5e5e5', // Change to your desired hover background color
                            },
                            "backgroundColor": 'white', // Change to your desired background color
                            "color": 'black', // Change to your desired text color
                        }}
                    >
                        Simulate
                    </Button>
                </Stack>
            </Stack>
        </Box>
    );
}

export default App;
