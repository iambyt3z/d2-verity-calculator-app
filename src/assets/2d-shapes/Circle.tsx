interface CircleProps {
    "fill": string;
    "height": string;
    "width": string;
}

const Circle: React.FC<CircleProps> = ({
    fill,
    height,
    width
}) => {
    return (
        <svg
            fill={fill}
            width={width}
            height={height}
            fillOpacity={1}
            stroke="none"
            strokeWidth={0}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="layer1">
                <path d="M 10 2 A 8 8 0 0 0 2 10 A 8 8 0 0 0 10 18 A 8 8 0 0 0 18 10 A 8 8 0 0 0 10 2 z M 10 3 A 7 7 0 0 1 17 10 A 7 7 0 0 1 10 17 A 7 7 0 0 1 3 10 A 7 7 0 0 1 10 3 z "/>
            </g>
        </svg>    
    );
};

export default Circle;
