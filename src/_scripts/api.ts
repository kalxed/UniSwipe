export async function getFirstSchool() {
    const url = process.env.NEXT_PUBLIC_MODEL_API + "/recommend";
    console.log(url);
    const response = await fetch(url, {
        method: "GET",
    });
    if (response.ok) {
        return response.json();
    } else {
        throw new Error("Failed to fetch school data");
    }
}

export async function getNextSchool(result: boolean) {
	const response = await fetch(process.env.NEXT_PUBLIC_MODEL_API + "/feedback", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			swipe_direction: result,
		}),
	})
    if (response.ok) {
        return response.json();
    } else {
        throw new Error("Failed to fetch school data");
    }
}
