/* eslint-disable react/no-array-index-key */
import {
    Box,
    Grid,
    Stack,
    Typography
} from "@mui/material";

import React from "react";
import Shape3D from "../Shape3d";
import Shape3DName from "../../types/Shape3D.type";

interface DissectionSimulationProps {
    outsideRoomFinalShapes: [string, string, string];
    simulation: string[];
}

const keywords = ["Left", "Middle", "Right", "Circle", "Square", "Triangle"];
const keywordPattern = new RegExp(`(${keywords.join('|')})`, 'gi');

const DissectionSimulation: React.FC<DissectionSimulationProps> = React.memo(({
    outsideRoomFinalShapes,
    simulation
}) => {
    return (
        <Grid container pb={15}>
            <Grid item xs={6}>
                <Stack
                    direction="column"
                    spacing={3}
                    pb={10}
                >
                    <Box
                        display="flex"
                        justifyContent="flex-start"
                        pb={3}
                    >
                        <Typography variant="h6">
                            Dissection Steps
                        </Typography>
                    </Box>

                    {
                        simulation.map((simulationItem) => {
                            const parts = simulationItem.split(keywordPattern);

                            return (
                                <Typography
                                    fontSize="17px"
                                    sx={{ "wordSpacing": "2px" }}
                                >
                                    {
                                        parts.map((part, index) => (
                                            keywordPattern.test(part) 
                                                ? (
                                                    <span 
                                                        key={index} 
                                                        style={{ "fontWeight": '700' }}
                                                    >
                                                        {part}
                                                    </span>
                                                ) 
                                                : (
                                                    <span key={index}>
                                                        {part}
                                                    </span>
                                                )
                                        ))
                                    }
                                </Typography>
                            );
                        })
                    }
                </Stack>
            </Grid>

            <Grid item xs={6}>
                <Stack spacing={4}>
                    <Box
                        display="flex"
                        justifyContent="flex-start"
                        pb={3}
                    >
                        <Typography variant="h6">
                            Outside Room - Final Shapes
                        </Typography>
                    </Box>

                    <Stack direction="row" spacing={10}>
                        {
                            outsideRoomFinalShapes.map((outsideRoomFinalShape) => {
                                return (
                                    <Stack spacing={1}>
                                        <Box display="flex" justifyContent="center">
                                            <Shape3D
                                                fill="white"
                                                height="80px"
                                                shape={outsideRoomFinalShape as Shape3DName}
                                                width="80px"
                                            />
                                        </Box>
                                        
                                        <Box display="flex" justifyContent="center">
                                            <Typography color="white">
                                                {outsideRoomFinalShape}
                                            </Typography>
                                        </Box>
                                    </Stack>
                                );
                            })
                        }
                    </Stack>
                </Stack>
            </Grid>
        </Grid>
    );
});

export default DissectionSimulation;
