import CircleRadio from "./components/CircleRadio";
import { ReactElement } from "react";
import Shape2D from "../../../types/Shape2D.type";
import SquareRadio from "./components/SquareRadio";
import TriangleRadio from "./components/TriangleRadio";

interface RadioButton {
    "label": string;
    "radioButton": ReactElement<any, any>;
    "value": Shape2D;
};

const radioButtons: RadioButton[] = [
    {
        "label": "Circle",
        "radioButton": <CircleRadio/>,
        "value": "Circle",
    },
    {
        "label": "Square",
        "radioButton": <SquareRadio/>,
        "value": "Square",
    },
    {
        "label": "Triangle",
        "radioButton": <TriangleRadio/>,
        "value": "Triangle",
    },
];

export default radioButtons;
