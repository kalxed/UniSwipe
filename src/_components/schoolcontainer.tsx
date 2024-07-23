import { SchoolDataResponse } from "@/_types";

interface SchoolContainerProps {
    schooldata: SchoolDataResponse;
}

export function SchoolContainer({ schooldata }: SchoolContainerProps) {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full bg-gray-100 p-5">
            <div className="max-w-96 min-w-80 min-h-80 max-h-96 rounded-md bg-blue-300 text-white flex items-center justify-center">
                {schooldata.schoolName === "" ? ( // If there is no school data, display a loading message
                    <div className="text-center">Loading...</div>
                ) : ( 
                <div className="text-center">
                    <div className="text-2xl">{schooldata.schoolName}</div>
                    <div>{schooldata.schoolAddress}</div>
                    <div>{schooldata.schoolCity}, {schooldata.schoolState} {schooldata.schoolZip}</div>
                    <div>{schooldata.schoolTuition}</div>
                    <div>{schooldata.schoolAcceptanceRate}</div>
                    <div>{schooldata.schoolWebsite}</div>
                    <div>{schooldata.schoolTopMajor}</div>
                </div>
                )}
            </div>
        </div>
    );
}