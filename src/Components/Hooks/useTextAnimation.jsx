import { useEffect } from "react";
import SplitType from "split-type";
import gsap from "gsap";

export const useTextAnimation = (selector, options = {}, threshold = 0.5) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    // Create an array to store the SplitType instances
    const splitInstances = [];

    // Function to animate text
    const animateText = (splitText) => {
      gsap.from(splitText.chars, {
        y: 20,
        opacity: 0,
        stagger: 0.05,
        delay: 0.2,
        ...options,
      });
    };

    // Create an IntersectionObserver to detect when elements enter the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const splitText = new SplitType(entry.target, { types: "chars" });
            splitInstances.push(splitText);

            // Trigger the animation and stop observing the element
            animateText(splitText);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    // Observe each element
    elements.forEach((element) => observer.observe(element));

    // Cleanup SplitType instances and IntersectionObserver on unmount
    return () => {
      splitInstances.forEach((instance) => instance.revert());
      observer.disconnect();
    };
  }, [selector, options, threshold]);
};
