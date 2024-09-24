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

export const GridBackgroundPlus: React.FC<GridBackgroundProps> = ({
    gridColor = "#78782f", // Light yellow matching the gradient
    backgroundColor = "rgba(255, 255, 255, 0.1)", // Semi-transparent white to blend with the gradient
    gridSize = 300,
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
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='${gridSize}' height='${gridSize}' viewBox='0 0 ${gridSize} ${gridSize}' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='${encodedGridColor}' stroke-width='1'%3E%3Cpath d='M${gridSize},0 L${gridSize},${gridSize} M0,${gridSize} L${gridSize},${gridSize}' /%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: `${gridSize}px ${gridSize}px`,
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

export default GridBackgroundPlus;