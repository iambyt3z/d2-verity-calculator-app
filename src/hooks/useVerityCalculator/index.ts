import axios, { AxiosRequestConfig } from "axios";

import Shape2D from "../../types/Shape2D.type";
import Shape3D from "../../types/Shape3D.type";
import { useState } from "react";

interface VerityCalculatorRequest {
    InsideRoomLeftStatueSymbol: Shape2D;
    InsideRoomMidStatueSymbol: Shape2D;
    InsideRoomRightStatueSymbol: Shape2D;
    IsChallengePhaseTwo: boolean;
    OutsideRoomLeftStatueSymbol: Shape3D;
    OutsideRoomMidStatueSymbol: Shape3D;
    OutsideRoomRightStatueSymbol: Shape3D;
}

interface VerityCalculatorResponse {
    OutsideDissectionSteps: string[];
    OutsideTargetStatueShapeNames: [string, string, string];
    InsideDissectionSteps: string[][];
}

function useVerityCalculator() {
    const [isLoading, setIsLoading] = useState(false);
    
    const verityCalculator = async (
        insideRoomLeftStatueSymbol: Shape2D,
        insideRoomMidStatueSymbol: Shape2D,
        insideRoomRightStatueSymbol: Shape2D,
        outsideRoomLeftStatueSymbol: Shape3D,
        outsideRoomMidStatueSymbol: Shape3D,
        outsideRoomRightStatueSymbol: Shape3D,
        isChallengePhaseTwo: boolean
    ): Promise<VerityCalculatorResponse> => {
        
        let result: VerityCalculatorResponse = {
            "InsideDissectionSteps": [],
            "OutsideDissectionSteps": [],
            "OutsideTargetStatueShapeNames": ["", "", ""],
        };

        setIsLoading(true);

        const data: VerityCalculatorRequest = {
            "InsideRoomLeftStatueSymbol": insideRoomLeftStatueSymbol,
            "InsideRoomMidStatueSymbol": insideRoomMidStatueSymbol,
            "InsideRoomRightStatueSymbol": insideRoomRightStatueSymbol,
            "IsChallengePhaseTwo": isChallengePhaseTwo,
            "OutsideRoomLeftStatueSymbol": outsideRoomLeftStatueSymbol,
            "OutsideRoomMidStatueSymbol": outsideRoomMidStatueSymbol,
            "OutsideRoomRightStatueSymbol": outsideRoomRightStatueSymbol,
        };

        const axiosConfig: AxiosRequestConfig = {
            "baseURL": import.meta.env.VITE_VERITY_CALCULATOR_API,
            "data": data,
            "headers": {
                "Authorization": import.meta.env.VITE_AUTH_TOKEN,
                "Content-Type": "application/json",
            },
            "maxBodyLength": Infinity,
            "method": "post",
            "url": "solve-verity"
        };

        await axios.request(axiosConfig)
            .then((response) => {
                const  { data } = response;
                result = data;
            })
            .catch((error) => {
                console.error(error);
                setIsLoading(false);

                throw error;
            });

        setIsLoading(false);

        return result;
    };

    return {
        isLoading,
        verityCalculator,
    };
}

export default useVerityCalculator;
