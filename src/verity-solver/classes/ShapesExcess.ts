import Shape2D from "../../types/Shape2D.type";

class ShapesExcess {
    private circles: number;
    private squares: number;
    private triangles: number;

    constructor(
        circles: number, 
        squares: number, 
        triangles: number
    ) {
        this.circles = circles;
        this.squares = squares;
        this.triangles = triangles;
    }

    hasShapesExcess(): {
        excessShape: Shape2D | "";
        hasExcessShapes: boolean;
        } {
        if (this.circles > 0)
            return {
                "excessShape": "Circle",
                "hasExcessShapes": true,
            };

        if (this.squares > 0)
            return {
                "excessShape": "Square",
                "hasExcessShapes": true,
            };

        if (this.triangles > 0)
            return {
                "excessShape": "Triangle",
                "hasExcessShapes": true,
            };

        return {
            "excessShape": "",
            "hasExcessShapes": false,
        };
    }

    hasShapesDeficiency(shape: Shape2D | ""): boolean {
        if (shape === "Circle" && this.circles < 0)
            return true;

        else if (shape === "Square" && this.squares < 0)
            return true;

        else if (shape === "Triangle" && this.triangles < 0)
            return true;

        return false;
    }

    isBalanced(): boolean {
        return (
            this.circles === 0 &&
            this.squares === 0 &&
            this.triangles === 0
        );
    }

    incrementShape(shape: Shape2D | ""): void {
        if (shape === "Circle")
            this.circles += 1;

        else if (shape === "Square")
            this.squares += 1;

        else if (shape === "Triangle")
            this.triangles += 1;
    }

    decrementShape(shape: Shape2D | ""): void {
        if (shape === "Circle")
            this.circles -= 1;

        else if (shape === "Square")
            this.squares -= 1;

        else if (shape === "Triangle")
            this.triangles -= 1;
    }
};

export default ShapesExcess;
