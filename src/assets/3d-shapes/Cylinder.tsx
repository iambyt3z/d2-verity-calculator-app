interface CylinderProps {
    "fill": string;
    "height": string;
    "width": string;
}

const Cylinder: React.FC<CylinderProps> = ({
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
            <path d="M81.71006,73.63667a18.94993,18.94993,0,0,1,1.69512,1.15567.98348.98348,0,0,0,1.39354-.19718A1.02433,1.02433,0,0,0,84.605,73.177,20.936,20.936,0,0,0,82.732,71.89926a.98517.98517,0,0,0-1.3646.34869,1.0226,1.0226,0,0,0,.34265,1.38871Zm-7.67033-3.33125q1.03288.326,1.9973.67814a.99032.99032,0,0,0,1.27233-.61114,1.01733,1.01733,0,0,0-.60051-1.29484q-1.0067-.3675-2.07969-.70617a.99182.99182,0,0,0-1.245.66708,1.01583,1.01583,0,0,0,.65552,1.26692Zm-8.23617-1.972q1.0617.1858,2.08531.39531a.9956.9956,0,0,0,1.17145-.793,1.012,1.012,0,0,0-.77925-1.19215q-1.05128-.2151-2.14029-.40575a.99668.99668,0,0,0-1.1491.8262,1.01086,1.01086,0,0,0,.81185,1.16941Zm-8.4357-1.03691q1.071.08013,2.11913.18286a1.01244,1.01244,0,0,0,.19055-2.01559q-1.07024-.1048-2.1638-.18673a1.01251,1.01251,0,0,0-.14585,2.01946Z"/>
            <path d="M40.51151,67.4799q1.04767-.10265,2.119-.183a1.01251,1.01251,0,0,0-.146-2.01944q-1.09327.08184-2.16374.18682a1.01244,1.01244,0,0,0,.19067,2.01558ZM32.11,68.72966q1.02309-.2094,2.08519-.39541a1.01088,1.01088,0,0,0,.81179-1.16944.99667.99667,0,0,0-1.1491-.82615q-1.08863.19056-2.14017.40585a1.012,1.012,0,0,0-.77919,1.1922.99558.99558,0,0,0,1.17151.79295ZM23.96232,70.985q.96357-.35188,1.99715-.67831a1.01588,1.01588,0,0,0,.65537-1.267.9918.9918,0,0,0-1.245-.667q-1.07232.33857-2.07958.70636a1.01734,1.01734,0,0,0-.60042,1.2949.99037.99037,0,0,0,1.27243.611Zm-7.36727,3.81a18.94226,18.94226,0,0,1,1.69478-1.1561,1.02257,1.02257,0,0,0,.34232-1.38877.98513.98513,0,0,0-1.36463-.3484A20.91659,20.91659,0,0,0,15.39479,73.18a1.02435,1.02435,0,0,0-.19334,1.41826.98351.98351,0,0,0,1.39363.19674Z"/>
            <path d="M51.99138,66.03266a.99137.99137,0,0,1-1.00482.99224H49.01674a.99137.99137,0,0,1-1.00483-.99224A1.00961,1.00961,0,0,1,48.99682,65h2.00965A1.0096,1.0096,0,0,1,51.99138,66.03266Z"/>
            <path d="M88.1,16.69a13.82827,13.82827,0,0,0-5.08-4.8,45.66057,45.66057,0,0,0-13.9-5.01A93.15882,93.15882,0,0,0,50,5C39.41,5,29.81,6.58,22.78,9.16a27.51224,27.51224,0,0,0-8.45,4.64,10.81378,10.81378,0,0,0-2.43,2.89A6.77349,6.77349,0,0,0,11,20V80a6.77383,6.77383,0,0,0,.9,3.31,13.82875,13.82875,0,0,0,5.08,4.8,45.66375,45.66375,0,0,0,13.9,5.01A93.15882,93.15882,0,0,0,50,95c10.59,0,20.19-1.58,27.22-4.16a27.51221,27.51221,0,0,0,8.45-4.64,10.81471,10.81471,0,0,0,2.43-2.89A6.77383,6.77383,0,0,0,89,80V20A6.77349,6.77349,0,0,0,88.1,16.69Zm-74.45.97a11.82427,11.82427,0,0,1,4.37-4.06A43.678,43.678,0,0,1,31.29,8.83,91.85312,91.85312,0,0,1,50,7c10.39,0,19.8,1.56,26.52,4.04a25.7621,25.7621,0,0,1,7.84,4.26,9.05234,9.05234,0,0,1,1.99,2.36,4.53688,4.53688,0,0,1,0,4.68,11.82379,11.82379,0,0,1-4.37,4.06,43.67639,43.67639,0,0,1-13.27,4.77A91.8529,91.8529,0,0,1,50,33c-10.39,0-19.8-1.56-26.52-4.04A25.76211,25.76211,0,0,1,15.64,24.7a9.05251,9.05251,0,0,1-1.99-2.36,4.53688,4.53688,0,0,1,0-4.68ZM87,80a4.73886,4.73886,0,0,1-.65,2.34,11.82379,11.82379,0,0,1-4.37,4.06,43.67639,43.67639,0,0,1-13.27,4.77A91.8529,91.8529,0,0,1,50,93c-10.39,0-19.8-1.56-26.52-4.04A25.76211,25.76211,0,0,1,15.64,84.7a9.05251,9.05251,0,0,1-1.99-2.36A4.73886,4.73886,0,0,1,13,80V24.86a16.18592,16.18592,0,0,0,3.98,3.25,45.66375,45.66375,0,0,0,13.9,5.01A93.15882,93.15882,0,0,0,50,35c10.59,0,20.19-1.58,27.22-4.16a27.51221,27.51221,0,0,0,8.45-4.64A12.776,12.776,0,0,0,87,24.88Z"/>
        </svg>  
    );
};

export default Cylinder;
