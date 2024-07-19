import Shape2D from "../../types/Shape2D.type";
import SimulationTypeValue from "../../types/SimuationTypeValue.type";
import Statue from "../classes/Statue";

function getTargetStatuesNormal(
    insideRoomLeftStatueShape: Shape2D,
    insideRoomMidStatueShape: Shape2D, 
    insideRoomRightStatueShape: Shape2D
): [Statue, Statue, Statue] {

    const outsideTargetStatue: { [key in Shape2D]: Statue } = {
        "Circle": new Statue(0, 1, 1),
        "Square": new Statue(1, 0, 1),
        "Triangle": new Statue(1, 1, 0),
    };

    return [
        outsideTargetStatue[insideRoomLeftStatueShape],
        outsideTargetStatue[insideRoomMidStatueShape],
        outsideTargetStatue[insideRoomRightStatueShape]
    ];
};

function getTargetStatuesChallenge(
    insideRoomLeftStatueShape: Shape2D,
    insideRoomMidStatueShape: Shape2D, 
    insideRoomRightStatueShape: Shape2D
): [Statue, Statue, Statue] {
    
    const outsideTargetStatue: { [key in Shape2D]: Statue } = {
        "Circle": new Statue(2, 0, 0),
        "Square": new Statue(0, 2, 0),
        "Triangle": new Statue(0, 0, 2),
    };

    return [
        outsideTargetStatue[insideRoomMidStatueShape],
        outsideTargetStatue[insideRoomRightStatueShape],
        outsideTargetStatue[insideRoomLeftStatueShape]
    ];
};

export default function getTargetStatues(
    insideRoomLeftStatueShape: Shape2D,
    insideRoomMidStatueShape: Shape2D, 
    insideRoomRightStatueShape: Shape2D,
    simulationType: SimulationTypeValue
): [Statue, Statue, Statue] {
    if (simulationType === "Normal")
        return getTargetStatuesNormal(
            insideRoomLeftStatueShape,
            insideRoomMidStatueShape,
            insideRoomRightStatueShape
        );

    else
        return getTargetStatuesChallenge(
            insideRoomLeftStatueShape,
            insideRoomMidStatueShape,
            insideRoomRightStatueShape
        );
};
