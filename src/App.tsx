import {
    Box,
    Divider,
    Stack,
    Typography
} from "@mui/material";

import Shape2D from "./types/Shape2D.type";
import Shape2dRadioGroup from "./components/Shape2dRadioGroup";
import { useState } from "react";

function App() {
    //Inside Room States
    const [insideRoomLeftStatueValue, setInsideRoomLeftStatueValue] = useState<Shape2D>("");
    const [insideRoomMidStatueValue, setInsideRoomMidStatueValue] = useState<Shape2D>("");
    const [insideRoomRightStatueValue, setInsideRoomRightStatueValue] = useState<Shape2D>("");


    return (
        <Box
            height="100vh"
            display="flex"
            justifyContent="center"
            margin={0}
            paddingTop={6}
            boxSizing="border-box"
        >
            <Stack spacing={6}>
                <Box pb={2}>
                    <Typography 
                        variant="h4"
                        textAlign="center"
                    >
                        Verity Calculator
                    </Typography>
                </Box>

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
            </Stack>
        </Box>
    );
}

export default App;
