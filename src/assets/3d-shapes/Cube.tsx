interface CubeProps {
    "fill": string;
    "height": string;
    "width": string;
}

const Cube: React.FC<CubeProps> = ({
    fill,
    height,
    width
}) => {
    return (
        <svg 
            fill={fill}
            width={width}
            height={height} 
            viewBox="0 0 100 100" 
            data-name="Layer 1" 
            id="Layer_1" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <title/>
            <path d="M94.92371,5.61914A1.0028,1.0028,0,0,0,94,5H30a1.0065,1.0065,0,0,0-.70715.29291l-24,24A1.01,1.01,0,0,0,5,30.00031V94a1,1,0,0,0,1,1H70l.0105-.00214a.9962.9962,0,0,0,.69659-.29077l24-24A1.01425,1.01425,0,0,0,95,70V6A1.00069,1.00069,0,0,0,94.92371,5.61914ZM29.06958,8.3446A.9951.9951,0,0,0,31,8V7H91.58575l-22,22H8.41418ZM8.30005,93A.99924.99924,0,0,0,7,91.69989V31H29v1a1,1,0,0,0,2,0V31H69V69H68a1,1,0,0,0,0,2h1V93ZM71,30.41418,92.99994,8.41425,93,69H92a.99512.99512,0,0,0-.34467,1.93042L71,91.58575Z"/>
            <path d="M30,61a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V62A1,1,0,0,0,30,61Z"/>
            <path d="M30,53a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V54A1,1,0,0,0,30,53Z"/>
            <path d="M30,17a1,1,0,0,0,1-1V14a1,1,0,0,0-2,0v2A1,1,0,0,0,30,17Z"/>
            <path d="M30,45a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V46A1,1,0,0,0,30,45Z"/>
            <path d="M31,24V22a1,1,0,0,0-2,0v2a1,1,0,0,0,2,0Z"/>
            <path d="M30,37a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V38A1,1,0,0,0,30,37Z"/>
            <path d="M54,69H52a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z"/>
            <path d="M62,69H60a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z"/>
            <path d="M78,69H76a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z"/>
            <path d="M86,69H84a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z"/>
            <path d="M46,69H44a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z"/>
            <path d="M38,69H36a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z"/>
            <path d="M30.92279,69.6178a.99931.99931,0,0,0-1.626-.32752l-.004.00263L27.8786,70.70709a1,1,0,1,0,1.41425,1.41419l1.41424-1.41419a1.00368,1.00368,0,0,0,.2157-1.08929Z"/>
            <path d="M23.636,74.94971,22.22174,76.364A1,1,0,0,0,23.636,77.77814L25.05023,76.364A1,1,0,0,0,23.636,74.94971Z"/>
            <path d="M17.97913,80.60657l-1.41425,1.41424A1,1,0,0,0,17.97913,83.435l1.41424-1.41419a1,1,0,0,0-1.41424-1.41424Z"/>
            <path d="M12.32227,86.26343,10.908,87.67767a1,1,0,0,0,1.41425,1.41419l1.41424-1.41425a1,1,0,1,0-1.41424-1.41418Z"/>
        </svg>    
    );
};

export default Cube;