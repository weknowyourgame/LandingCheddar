/* eslint-disable */
interface GridBackgroundProps {
    gridSize?: number;
    gridColor?: string;
    backgroundColor?: string;
    className?: string;
    style?: React.CSSProperties;
    fade?: boolean;
    [key: string]: any;
}

export const GridBackgroundMov: React.FC<GridBackgroundProps> = ({
    gridColor = "#78782f", // Color for the grid lines
    backgroundColor = "rgba(255, 255, 255, 0.1)", // Background color
    gridSize = 500, // Size of the grid
    className,
    fade = true,
    style,
    ...props
}) => {
    const encodedGridColor = encodeURIComponent(gridColor);

    const maskStyle: React.CSSProperties = fade
        ? {
              maskImage: "radial-gradient(circle, black 20%, transparent 90%)",
              WebkitMaskImage: "radial-gradient(circle, black 20%, transparent 90%)",
          }
        : {};

    const backgroundStyle: React.CSSProperties = {
        backgroundColor,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='${gridSize}' height='${gridSize}' viewBox='0 0 ${gridSize} ${gridSize}' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='${encodedGridColor}' stroke-width='2'%3E%3Cline x1='0' y1='0' x2='${gridSize}' y2='${gridSize}' /%3E%3Cline x1='0' y1='${gridSize}' x2='${gridSize}' y2='0' /%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: `${gridSize}px ${gridSize}px`,
        backgroundPosition: `0 0`,
        animation: `moveBackground 50s linear infinite`, // Constant speed
        ...maskStyle,
        ...style,
    };

    return (
        <div
            className={`absolute inset-0 h-full w-full ${className}`}
            style={backgroundStyle}
            {...props}
        />
    );
};

// Add the CSS for animation
const styles = `
@keyframes moveBackground {
    0% { background-position: 0 0; }
    100% { background-position: 100% 100%; } /* Moves the grid diagonally */
}
`;

// Append styles to the document head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default GridBackgroundMov;
