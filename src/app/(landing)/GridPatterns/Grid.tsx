/* eslint-disable */
interface PlusPatternBackgroundProps {
    plusSize?: number;
    plusColor?: string;
    backgroundColor?: string;
    className?: string;
    style?: React.CSSProperties;
    fade?: boolean;
    [key: string]: any;
}

export const GridBackground: React.FC<PlusPatternBackgroundProps> = ({
    plusColor = "#f7df47", // Light yellow matching the gradient
    backgroundColor = "rgba(255, 255, 255, 0.1)", // Semi-transparent white to blend with the gradient
    plusSize = 15,
    className,
    fade = true,
    style,
    ...props
}) => {
    const encodedPlusColor = encodeURIComponent(plusColor);

    const maskStyle: React.CSSProperties = fade
        ? {
              maskImage: "radial-gradient(circle, yellow 20%, transparent 90%)",
              WebkitMaskImage: "radial-gradient(circle, yellow 20%, transparent 90%)",
          }
        : {};

    const backgroundStyle: React.CSSProperties = {
        backgroundColor,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='${plusSize}' height='${plusSize}' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='${encodedPlusColor}' fill-opacity='0.2'%3E%3Crect x='25' y='25' width='10' height='10' /%3E%3C/g%3E%3C/svg%3E")`, // Small box at the center
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

export default GridBackground;