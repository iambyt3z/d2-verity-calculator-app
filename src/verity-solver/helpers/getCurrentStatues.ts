import Shape3D from "../../types/Shape3D.type";
import Statue from "../classes/Statue";

export default function getCurrentStatues(
    outsideRoomLeftStatueShape: Shape3D,
    outsideRoomMidStatueShape: Shape3D, 
    outsideRoomRightStatueShape: Shape3D
): [Statue, Statue, Statue] {

    const outsideCurrentStatues: { [key in Shape3D]: Statue } = {
        "Cone": new Statue(1, 0, 1),
        "Cube": new Statue(0, 2, 0),
        "Cylinder": new Statue(1, 1, 0),
        "Prism": new Statue(0, 1, 1),
        "Pyramid": new Statue(0, 0, 2),
        "Sphere": new Statue(2, 0, 0),
    };

    return [
        outsideCurrentStatues[outsideRoomLeftStatueShape],
        outsideCurrentStatues[outsideRoomMidStatueShape],
        outsideCurrentStatues[outsideRoomRightStatueShape]
    ];
};
