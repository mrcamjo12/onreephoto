import React, { useEffect, useCallback } from 'react';
import { useGlobalContext } from '../context';
import { FaArrowCircleUp } from 'react-icons/fa';
import { Button } from './Styles';

// Define the debounce function
const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
};

const ScrollButton = () => {
    const { visibleScroll, setVisibleScroll } = useGlobalContext();

    const toggleVisibleScroll = useCallback(() => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisibleScroll(true);
        } else if (scrolled <= 300) {
            setVisibleScroll(false);
        }
    }, [setVisibleScroll]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debouncedToggleVisibleScroll = useCallback(
    debounce(() => {
        toggleVisibleScroll();
    }, 200),
    [toggleVisibleScroll]
);


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            debouncedToggleVisibleScroll();
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [debouncedToggleVisibleScroll]);

    return (
        <Button>
            <FaArrowCircleUp
                onClick={scrollToTop}
                style={{ display: visibleScroll ? 'inline' : 'none' }}
            />
        </Button>
    );
};

export default ScrollButton;
