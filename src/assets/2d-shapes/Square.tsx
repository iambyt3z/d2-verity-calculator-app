interface SquareProps {
    "fill": string;
    "height": string;
    "width": string;
}

const Square: React.FC<SquareProps> = ({
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
                <path d="M 1 1 L 1 19 L 19 19 L 19 1 L 1 1 z M 2 2 L 18 2 L 18 18 L 2 18 L 2 2 z "/>
            </g>
        </svg>    
    );
};

export default Square;
