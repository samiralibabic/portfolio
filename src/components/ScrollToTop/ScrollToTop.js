import React from 'react'
import { ScrollToTopIcon } from './ScrollToTopStyles';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopContainerVariants = {
    hide: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
};

const ScrollToTop = () => {
    const { scrollYProgress } = useScroll();
    const controls = useAnimationControls();

    useEffect(() => {
        return scrollYProgress.on('change', (latestValue) => {
            if (latestValue > 0.5) {
                controls.start('show');
            } else {
                controls.start('hide');
            }
        });
    });

    return (
        <ScrollToTopIcon href="/" scroll={false}>
            <FaArrowUp size="30" />
        </ScrollToTopIcon>
    )
}

export default ScrollToTop