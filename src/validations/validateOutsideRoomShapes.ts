import Shape3D from "../types/Shape3D.type";

const shape2dCountMap: { [key in Shape3D]: [number, number, number] } = {
    "Cone": [1, 0, 1],
    "Cube": [0, 2, 0],
    "Cylinder": [1, 1, 0],
    "Prism": [0, 1, 1],
    "Pyramid": [0, 0, 2],
    "Sphere": [2, 0, 0]
};

export default function validateOutsideRoomShapes (
    outsideRoomLeftStatueValue: Shape3D,
    outsideRoomMidStatueValue: Shape3D,
    outsideRoomRightStatueValue: Shape3D
): boolean {

    const leftStatue2dShapesCount = shape2dCountMap[outsideRoomLeftStatueValue];
    const midStatue2dShapesCount = shape2dCountMap[outsideRoomMidStatueValue];
    const rightStatue2dShapesCount = shape2dCountMap[outsideRoomRightStatueValue];

    const total2dShapesCount = [
        leftStatue2dShapesCount[0] + midStatue2dShapesCount[0] + rightStatue2dShapesCount[0],
        leftStatue2dShapesCount[1] + midStatue2dShapesCount[1] + rightStatue2dShapesCount[1],
        leftStatue2dShapesCount[2] + midStatue2dShapesCount[2] + rightStatue2dShapesCount[2]
    ];

    console.log(total2dShapesCount);

    return ! (
        total2dShapesCount[0] > 2 ||
        total2dShapesCount[1] > 2 ||
        total2dShapesCount[2] > 2
    );
};
