import CircleRadio from "./CircleRadio";
import { ReactElement } from "react";
import SquareRadio from "./SquareRadio";
import TriangleRadio from "./TriangleRadio";

interface RadioButton {
    "label": string;
    "radioButton": ReactElement<any, any>;
    "value": string;
};

const radioButtons: RadioButton[] = [
    {
        "label": "Circle",
        "radioButton": <CircleRadio/>,
        "value": "circle"
    },
    {
        "label": "Square",
        "radioButton": <SquareRadio/>,
        "value": "square"
    },
    {
        "label": "Triangle",
        "radioButton": <TriangleRadio/>,
        "value": "triangle"
    },
];

export default radioButtons;
