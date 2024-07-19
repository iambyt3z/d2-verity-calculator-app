import ShapesExcess from "./ShapesExcess";

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
};

export default Statue;
