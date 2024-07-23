import { SchoolDataResponse } from "@/_types";

export function getNextSchool(result: boolean) {
	return fetch(`http://127.0.0.1:8000/compute`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			swipe_direction: result,
		}),
	})
		.then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error("Failed to fetch school data");
			}
		})
		.then((data) => {
			console.log(data);
		})
		.catch((error) => {
			console.error;
		});
}

export function testGetSchool(result: boolean): SchoolDataResponse {
	if (result) {
        return {
		    schoolName: "Test School",
		    schoolAddress: "123 Test St",
		    schoolCity: "Test City",
		    schoolState: "TS",
		    schoolZip: "12345",
		    schoolWebsite: "www.test.com",
		    schoolTuition: "$100",
		    schoolAcceptanceRate: "100%",
		    schoolTopMajor: "Test Major",
	    };
    } else {
        return {
            schoolName: "Test School 2",
            schoolAddress: "456 Test St",
            schoolCity: "Test City 2",
            schoolState: "TS",
            schoolZip: "54321",
            schoolWebsite: "www.test2.com",
            schoolTuition: "$200",
            schoolAcceptanceRate: "50%",
            schoolTopMajor: "Test Major 2",
        }
    }
}
