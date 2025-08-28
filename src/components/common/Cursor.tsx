import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHover, setIsHover] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => setPosition({ x: e.clientX, y: e.clientY });

        const handleMouseEnter = () => setIsHover(true);
        const handleMouseLeave = () => setIsHover(false);

        const handleMouseLeaveWindow = () => setIsVisible(false);
        const handleMouseEnterWindow = () => setIsVisible(true);

        window.addEventListener('mousemove', moveCursor);
        document.addEventListener('mouseleave', handleMouseLeaveWindow);
        document.addEventListener('mouseenter', handleMouseEnterWindow);

        document.querySelectorAll('button, a, [role="button"], .cursor-hover').forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.removeEventListener('mouseleave', handleMouseLeaveWindow);
            document.removeEventListener('mouseenter', handleMouseEnterWindow);
            document.querySelectorAll('button, a, [role="button"], .cursor-hover').forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    if (!isVisible) return null;

    return (
        <>
            <motion.div
                animate={{ x: position.x, y: position.y, scale: isHover ? 1.5 : 1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 28, scale: { duration: 0.15 } }}
                style={{
                    position: 'fixed',
                    width: isHover ? '50px' : '35px',
                    height: isHover ? '50px' : '35px',
                    borderRadius: '50%',
                    border: isHover ? '2px solid rgba(16,185,129,0.8)' : '1px solid rgba(16,185,129,0.5)',
                    background: isHover ? 'radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)' : 'transparent',
                    pointerEvents: 'none',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 9998,
                    boxShadow: isHover ? '0 0 25px rgba(16,185,129,0.4), inset 0 0 10px rgba(16,185,129,0.1)' : '0 0 15px rgba(16,185,129,0.2)',
                    transition: 'width 0.2s ease, height 0.2s ease, border 0.2s ease, background 0.2s ease, box-shadow 0.2s ease',
                }}
            />
            <motion.div
                animate={{
                    x: position.x,
                    y: position.y,
                    scale: isHover ? 1.2 : 1,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 600,
                    damping: 25
                }}
                style={{
                    position: 'fixed',
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: isHover
                        ? 'linear-gradient(45deg, #10b981, #059669, #10b981)'
                        : 'linear-gradient(45deg, #10b981, #059669)',
                    pointerEvents: 'none',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 9999,
                    boxShadow: isHover
                        ? '0 0 20px rgba(16,185,129,0.8)'
                        : '0 0 12px rgba(16,185,129,0.6)',
                    transition: 'box-shadow 0.2s ease',
                }}
            />
        </>
    );
};

export default CustomCursor;