export default function Text ({ text, extraClasses }) {
    return (
        <p className={`text font-primary mt-8 lg:text-sm ${extraClasses}`}>
            {text}
        </p>
    )
}
