interface TriangleProps {
    "fill": string;
    "height": string;
    "width": string;
}

const Triangle: React.FC<TriangleProps> = ({
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
                <path d="M 10 2.0527344 L 0.1015625 18 L 19.898438 18 L 10 2.0527344 z M 10 3.9492188 L 18.099609 17 L 1.9003906 17 L 10 3.9492188 z "/>
            </g>
        </svg>    
    );
};

export default Triangle;
