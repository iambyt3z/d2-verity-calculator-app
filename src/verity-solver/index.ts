import Shape2D from "../types/Shape2D.type";
import Shape3D from "../types/Shape3D.type";
import SimulationTypeValue from "../types/SimuationTypeValue.type";
import getCurrentStatues from "./helpers/getCurrentStatues";
import getTargetStatues from "./helpers/getTargetStatues";
import solveVerity from "./helpers/solveVerity";

export default function simulateVerity(
    insideRoomLeftStatueShape: Shape2D,
    insideRoomMidStatueShape: Shape2D, 
    insideRoomRightStatueShape: Shape2D, 
    outsideRoomLeftStatueShape: Shape3D, 
    outsideRoomMidStatueShape: Shape3D, 
    outsideRoomRightStatueShape: Shape3D,
    simulationType: SimulationTypeValue
): {
    outsideRoomFinalShape: [string, string, string];
    simulation: string[];
} {
    const currentStatues = getCurrentStatues(
        outsideRoomLeftStatueShape,
        outsideRoomMidStatueShape,
        outsideRoomRightStatueShape
    );

    const targetStatues = getTargetStatues(
        insideRoomLeftStatueShape,
        insideRoomMidStatueShape,
        insideRoomRightStatueShape,
        simulationType
    );

    return {
        "outsideRoomFinalShape": [
            targetStatues[0].getShapeName(),
            targetStatues[1].getShapeName(),
            targetStatues[2].getShapeName()
        ],
        "simulation": solveVerity(
            currentStatues,
            targetStatues
        )
    };
};
