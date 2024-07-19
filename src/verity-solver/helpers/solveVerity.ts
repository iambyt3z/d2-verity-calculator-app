import Shape2D from "../../types/Shape2D.type";
import ShapesExcess from "../classes/ShapesExcess";
import Statue from "../classes/Statue";

export default function solveVerity (
    currentStatues: [Statue, Statue, Statue],
    targetStatues: [Statue, Statue, Statue]
): string[] {

    const statuePositions = ["Left", "Middle", "Right"];
    let solution: string[] = [];

    let shapesExcesses: [ShapesExcess, ShapesExcess, ShapesExcess] = [
        Statue.subtractStatues(currentStatues[0], targetStatues[0]),
        Statue.subtractStatues(currentStatues[1], targetStatues[1]),
        Statue.subtractStatues(currentStatues[2], targetStatues[2])
    ];

    while (
        !shapesExcesses[0].isBalanced() ||
        !shapesExcesses[1].isBalanced() ||
        !shapesExcesses[2].isBalanced()
    ) {
        let dissectionStatueOneIndex = 0;
        let dunkOneShape: Shape2D | "" = "";

        let dissectionStatueTwoIndex = 0;
        let dunkTwoShape: Shape2D | "" = "";

        for (let i=0; i<3; i++) {
            const {
                excessShape,
                hasExcessShapes
            } = shapesExcesses[i].hasShapesExcess();

            if (hasExcessShapes) {
                dissectionStatueOneIndex = i;
                dunkOneShape = excessShape;
                break;
            }
        }

        for (let i=0; i<3; i++) {
            const hasShapesDeficiency = shapesExcesses[i].hasShapesDeficiency(dunkOneShape);

            if (
                i !== dissectionStatueOneIndex && 
                hasShapesDeficiency
            ) {
                dissectionStatueTwoIndex = i;
                break;
            }
        }

        const {
            "excessShape": excessShapeTwo,
        } = shapesExcesses[dissectionStatueTwoIndex].hasShapesExcess();

        dunkTwoShape = excessShapeTwo;

        solution.push(`Dunk ${dunkOneShape} on the ${statuePositions[dissectionStatueOneIndex]} Statue`);

        shapesExcesses[dissectionStatueOneIndex].decrementShape(dunkOneShape);
        shapesExcesses[dissectionStatueTwoIndex].incrementShape(dunkOneShape);

        solution.push(`Dunk ${dunkTwoShape} on the ${statuePositions[dissectionStatueTwoIndex]} Statue`);

        shapesExcesses[dissectionStatueTwoIndex].decrementShape(dunkTwoShape);
        shapesExcesses[dissectionStatueOneIndex].incrementShape(dunkTwoShape);
    }

    return solution;
}
