import ConeRadio from "./components/ConeRadio";
import CubeRadio from "./components/CubeRadio";
import CylinderRadio from "./components/CylinderRadio";
import PrismRadio from "./components/PrismRadio";
import PyramidRadio from "./components/PyramidRadio";
import { ReactElement } from "react";
import Shape3D from "../../../types/Shape3D.type";
import SphereRadio from "./components/SphereRadio";

interface RadioButton {
    "label": string;
    "radioButton": ReactElement<any, any>;
    "value": Shape3D;
};

const radioButtons: RadioButton[] = [
    {
        "label": "Cylinder",
        "radioButton": <CylinderRadio/>,
        "value": "Cylinder",
    },
    {
        "label": "Prism",
        "radioButton": <PrismRadio/>,
        "value": "Prism",
    },
    {
        "label": "Cone",
        "radioButton": <ConeRadio/>,
        "value": "Cone",
    },
    {
        "label": "Sphere",
        "radioButton": <SphereRadio/>,
        "value": "Sphere",
    },
    {
        "label": "Cube",
        "radioButton": <CubeRadio/>,
        "value": "Cube",
    },
    {
        "label": "Pyramid",
        "radioButton": <PyramidRadio/>,
        "value": "Pyramid",
    },
];

export default radioButtons;
