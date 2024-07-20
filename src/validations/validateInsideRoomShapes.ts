import Shape2D from "../types/Shape2D.type";

export default function validateInsideRoomShapes (
    insideRoomLeftStatueValue: Shape2D,
    insideRoomMidStatueValue: Shape2D,
    insideRoomRighttStatueValue: Shape2D
): boolean {

    return ! (
        insideRoomLeftStatueValue === insideRoomMidStatueValue ||
        insideRoomMidStatueValue === insideRoomRighttStatueValue ||
        insideRoomLeftStatueValue === insideRoomRighttStatueValue
    );
};
