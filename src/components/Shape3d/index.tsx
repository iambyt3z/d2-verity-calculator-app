import Cone from "../../assets/3d-shapes/Cone";
import Cube from "../../assets/3d-shapes/Cube";
import Cylinder from "../../assets/3d-shapes/Cylinder";
import Prism from "../../assets/3d-shapes/Prism";
import Pyramid from "../../assets/3d-shapes/Pyramid";
import React from "react";
import Shape3dNames from "../../types/Shape3D.type";
import Sphere from "../../assets/3d-shapes/Sphere";

interface Shape3DProps {
    "fill": string;
    "height": string;
    "shape": Shape3dNames;
    "width": string;
}

const Shape3D: React.FC<Shape3DProps> = React.memo(({
    fill,
    height,
    shape,
    width,
}) => {
    switch (shape) {
    case "Cone":
        return <Cone
            fill={fill}
            height={height}
            width={width}
        />;

    case "Cylinder":
        return <Cylinder
            fill={fill}
            height={height}
            width={width}
        />;

    case "Cube":
        return <Cube
            fill={fill}
            height={height}
            width={width}
        />;

    case "Prism":
        return <Prism
            fill={fill}
            height={height}
            width={width}
        />;

    case "Pyramid":
        return <Pyramid
            fill={fill}
            height={height}
            width={width}
        />;

    case "Sphere":
        return <Sphere
            fill={fill}
            height={height}
            width={width}
        />;

    default:
        return <></>;
    }
});

export default Shape3D;
