"use client";

import { useState, useEffect, useRef } from "react";
import { SchoolContainer } from "./schoolcontainer";
import { getFirstSchool, getNextSchool} from "@/_scripts/api";
import { SchoolDataResponse } from "@/_types";

const defaultSchoolData: SchoolDataResponse = {
    schoolName: "",
    schoolAddress: "",
    schoolCity: "",
    schoolState: "",
    schoolZip: "",
    schoolTuition: "",
    schoolAcceptanceRate: "",
    schoolWebsite: "",
    schoolTopMajor: "",
    schoolUndergradPopulation: "",
};

const DraggableDiv = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState(0);
    const [transitionDuration, setTransitionDuration] = useState("0s");
    const [isAnimating, setIsAnimating] = useState(false);
    const startXRef = useRef(0);
    const positionRef = useRef(0);
    const [isMobile, setIsMobile] = useState(false);
    const decision = useRef(false);
    const [currSchoolData, setCurrSchoolData] = useState<SchoolDataResponse>(defaultSchoolData);
    const [animationEnded, setAnimationEnded] = useState(false);

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

        if (targetPosition > 0) {
            console.log("Dragging to the right");
            decision.current = true;
        } else {
            console.log("Dragging to the left");
            decision.current = false;
        }
    };

    const resetPosition = () => {
        setIsAnimating(false);
        setTransitionDuration("0s");
        setPosition(0);
        positionRef.current = 0;
        setAnimationEnded(true); // Trigger the end of animation
    };

    useEffect(() => {
        if (animationEnded) {
            const fetchSchoolData = async () => {
                console.log("Function called after animation");
                var response = await getNextSchool(decision.current);
                console.log(response);
                if (response) {
                    setCurrSchoolData(response);
                } else {
                    setCurrSchoolData(defaultSchoolData);
                }
                setAnimationEnded(false); // Reset the animation ended state
            };
            fetchSchoolData();
        }
    }, [animationEnded]);

    useEffect(() => {
        setIsMobile(window.innerWidth <= 768);
        const fetchSchoolData = async () => {
            var response = await getFirstSchool();
            if(response) {
                setCurrSchoolData(response);
            }
        }
        fetchSchoolData();
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

    return (
        <div className="flex items-center justify-center grow touch-none select-none bg-gray-100 no-touch-move">
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
