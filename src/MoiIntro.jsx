import { useEffect } from "react";

const MoiIntro = ({ setShowIntro = () => {}, timeOutS }) => {
    useEffect(() => {
        const timeout = setTimeout(() => setShowIntro(false), timeOutS * 1000);
        return () => clearTimeout(timeout);
    }, [setShowIntro], [timeOutS]);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-background dark:bg-background-dark">
            <div className="slide-in-then-fade text-9xl">
                MOI!
            </div>
        </div>
    );
};

export default MoiIntro;