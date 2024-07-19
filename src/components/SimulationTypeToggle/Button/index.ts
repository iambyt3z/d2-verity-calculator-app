import SimulationTypeValue from "../../../types/SimuationTypeValue.type";

interface ToggleButton {
    "label": string;
    "value": SimulationTypeValue;
}

const toggleButtons: ToggleButton[] = [
    {
        "label": "Normal",
        "value": "Normal",
    },
    {
        "label": "Challege Phase 2",
        "value": "Challege Phase 2",
    },
];

export default toggleButtons;
