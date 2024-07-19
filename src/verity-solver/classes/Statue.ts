import Shape3D from "../../types/Shape3D.type";
import ShapesExcess from "./ShapesExcess";

const shape3dMap: { [key: string]: Shape3D; } = {
    "0, 0, 2": "Pyramid",
    "0, 1, 1": "Prism",
    "0, 2, 0": "Cube",
    "1, 0, 1": "Cone",
    "1, 1, 0": "Cylinder",
    "2, 0, 0": "Sphere",
};

class Statue {
    circles: number;
    squares: number;
    triangles: number;

    constructor(
        circles: number, 
        squares: number, 
        triangles: number
    ) {
        this.circles = circles;
        this.squares = squares;
        this.triangles = triangles;
    }

    static subtractStatues(s1: Statue, s2: Statue): ShapesExcess {
        const excessCircles = s1.circles - s2.circles;
        const excessSquares = s1.squares - s2.squares;
        const excessTriangles = s1.triangles - s2.triangles;

        return new ShapesExcess(excessCircles, excessSquares, excessTriangles);
    }

    getShapeName(): Shape3D {
        const key: string = `${this.circles}, ${this.squares}, ${this.triangles}`;
        const shape3d = shape3dMap[key];

        return shape3d;
    }
};

export default Statue;
