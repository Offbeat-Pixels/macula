import { useState, useEffect } from "react";
import gsap from "gsap";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorSize, setCursorSize] = useState("20px"); // Initial cursor size
  const [cursorStyle, setCursorStyle] = useState({
    backgroundColor: "whitesmoke",
    border: "none",
  });

  useEffect(() => {
    // Update the cursor position
    const updateCursor = (e) => {
      gsap.to("#cursor", {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5, // Adjust for smoother movement
        ease: "power2.out",
      });
    };

    // Handlers for hover effects
    const handleHover = () => {
      setCursorSize("80px"); // Enlarge cursor
      setCursorStyle({
        backgroundColor: "transparent",
        border: "2px solid whitesmoke", // Add border
      });

      // Animate background zoom
      gsap.to(e.target, {
        scale: 1.2,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const handleUnhover = () => {
      setCursorSize("20px"); // Reset cursor size
      setCursorStyle({
        backgroundColor: "gray",
        border: "none", // Remove border
      });
      // Reset background zoom
      gsap.to(e.target, {
        scale: 1, // Reset to original scale
        duration: 0.5,
        ease: "power2.out",
      });
    };

    // Add hover listeners to target elements
    const hoverableElements = document.querySelectorAll(
      " button, p, span"
    );

    hoverableElements.forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleUnhover);
    });
    gsap.to("#cursor", {
      duration: 1,
    });

    // Add mousemove listener
    window.addEventListener("mousemove", updateCursor);

    // Cleanup listeners on component unmount
    return () => {
      window.removeEventListener("mousemove", updateCursor);
      hoverableElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHover);
        el.removeEventListener("mouseleave", handleUnhover);
      });
    };
  }, []); // Dependency array is empty since this effect runs once

  useEffect(() => {
    // Animate size and style changes
    gsap.to("#cursor", {
      width: cursorSize,
      height: cursorSize,
      backgroundColor: cursorStyle.backgroundColor,
      border: cursorStyle.border,
      duration: 0.2,
      ease: "power2.out",
    });
  }, [cursorSize, cursorStyle]); // Re-run animation when these states change

  return (
    <div
      id="cursor"
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        transform: "translate(-50%, -50%)",
        width: cursorSize,
        height: cursorSize,
        borderRadius: "50%",
        backgroundColor: cursorStyle.backgroundColor,
        border: cursorStyle.border,
        pointerEvents: "none",
        zIndex: 1000,
        transition:
          "width 0.2s ease, height 0.2s ease, background-color 0.2s ease, border 0.2s ease", // Smooth transition for all changes
      }}
    ></div>
  );
};

export default Cursor;
