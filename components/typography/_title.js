export default function Title ({ text, size, extraClasses }) {
    return (
        <h1 className={`title font-primary ${size == "xl" ? "lg:text-7xl md:text-6xl text-5xl" : size == "md" ? "lg:text-5xl md:text-4xl text-3xl" : ""} font-extrabold ${extraClasses ? extraClasses : ""}`}>
            {text}
        </h1>
    )
}
