"use client";

import { useState, useEffect, useRef } from "react";
import { SchoolContainer } from "./schoolcontainer";
import { getNextSchool, testGetSchool } from "@/_scripts/api";
import { SchoolDataResponse } from "@/_types";

const DraggableDiv = () => {
	const [isDragging, setIsDragging] = useState(false);
	const [position, setPosition] = useState(0);
	const [transitionDuration, setTransitionDuration] = useState("0s");
	const [isAnimating, setIsAnimating] = useState(false);
	const startXRef = useRef(0);
	const positionRef = useRef(0);
	const [isMobile, setIsMobile] = useState(false); // Adjust the width as needed for mobile detection
	const decision = useRef(false); // Add a ref to store the decision
    const [currSchoolData, setCurrSchoolData] = useState<SchoolDataResponse|{}>({});

	const handleMouseDown = (e: React.MouseEvent) => {
		if (!isAnimating) {
			setIsDragging(true);
			setTransitionDuration("0s");
			startXRef.current = e.clientX - positionRef.current;
		}
	};

	const handleMouseUp = () => {
		if (!isAnimating) {
			setIsDragging(false);
			const screenWidth = window.innerWidth;
			const threshold = screenWidth * 0.25;

			if (Math.abs(positionRef.current) > threshold) {
				animateOffScreen(
					positionRef.current > 0 ? screenWidth : -screenWidth
				);
			} else {
				setTransitionDuration("600ms");
				setPosition(0);
				positionRef.current = 0;
			}
		}
	};

	const handleMouseMove = (e: MouseEvent) => {
		if (isDragging && !isAnimating) {
			const newPosition = e.clientX - startXRef.current;
			setPosition(newPosition);
			positionRef.current = newPosition;
		}
	};

	const handleTouchStart = (e: React.TouchEvent) => {
		if (!isAnimating) {
			setIsDragging(true);
			setTransitionDuration("0s");
			startXRef.current = e.touches[0].clientX - positionRef.current;
		}
	};

	const handleTouchEnd = () => {
		if (!isAnimating) {
			setIsDragging(false);
			const screenWidth = window.innerWidth;
			const threshold = screenWidth * 0.5;

			if (isMobile && Math.abs(positionRef.current) > threshold) {
				animateOffScreen(
					positionRef.current > 0 ? screenWidth : -screenWidth
				);
			} else {
				setTransitionDuration("300ms");
				setPosition(0);
				positionRef.current = 0;
			}
		}
	};

	const handleTouchMove = (e: TouchEvent) => {
		if (isDragging && !isAnimating) {
			const newPosition = e.touches[0].clientX - startXRef.current;
			setPosition(newPosition);
			positionRef.current = newPosition;
			e.preventDefault(); // Prevent the default behavior to stop dragging the window
		}
	};

	const animateOffScreen = (targetPosition: number) => {
		setIsAnimating(true);
		setTransitionDuration("300ms");
		setPosition(targetPosition);
		positionRef.current = targetPosition;

		setTimeout(() => {
			resetPosition();
		}, 300);

		// Determine direction and log it
		if (targetPosition > 0) {
			console.log("Dragging to the right");
			decision.current = true; // Store the decision
		} else {
			console.log("Dragging to the left");
			decision.current = false; // Store the decision
		}
	};

	const resetPosition = () => {
		setIsAnimating(false);
		setTransitionDuration("0s");
		setPosition(0);
		positionRef.current = 0;
		callFunctionAfterAnimation();
	};

	const callFunctionAfterAnimation = async () => {
		var response = await testGetSchool(decision.current); // Call the function with the decision
        setCurrSchoolData(response)
		console.log(currSchoolData);
	};

	useEffect(() => {
		setIsMobile(window.innerWidth <= 768);
        setCurrSchoolData(testGetSchool(false));
	}, []);
	useEffect(() => {
		if (isDragging) {
			window.addEventListener("mousemove", handleMouseMove);
			window.addEventListener("mouseup", handleMouseUp);
			window.addEventListener("touchmove", handleTouchMove, {
				passive: false,
			});
			window.addEventListener("touchend", handleTouchEnd);
		} else {
			window.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("mouseup", handleMouseUp);
			window.removeEventListener("touchmove", handleTouchMove);
			window.removeEventListener("touchend", handleTouchEnd);
		}

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("mouseup", handleMouseUp);
			window.removeEventListener("touchmove", handleTouchMove);
			window.removeEventListener("touchend", handleTouchEnd);
		};
	}, [isDragging]);

  async function sendData(swipeDirection: string) {
    console.log('Function called after animation');
    console.log(swipeDirection)

    // post request
    try {
      const response = await fetch("http://localhost:5000/compute", {
        method: "POST", 
        mode: 'cors', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ swipe_direction: String(swipeDirection)})
      });

      // error handling
      if (!response.ok) {
        throw new Error("HTTP Error: ${response.status}");
      }

      // parse JSON
      const data = await response.json();

      // set result
      // TODO set result properly into the textbox
      console.log(data.result);
      
    } catch (error) {
      console.error("Error: ", error);
      // TODO set textbox as error
    }
  }
  
	return (
		<div className="flex items-center justify-center min-h-screen touch-none select-none bg-gray-100 no-touch-move">
			<div
				onMouseDown={handleMouseDown}
				onTouchStart={handleTouchStart}
				className={`flex items-center justify-center cursor-pointer`}
				style={{
					transform: `translateX(${position}px)`,
					transition: `transform ${transitionDuration}`,
				}}
			>
				<SchoolContainer schooldata={currSchoolData}/>
			</div>
		</div>
	);
};

export default DraggableDiv;
