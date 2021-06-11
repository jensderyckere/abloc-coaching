export default function Subtitle ({ text, extraClasses }) {
    return (
        <h4 className={`subtitle font-primary lg:text-xl md:text-lg text-md font-medium ${extraClasses}`}>
            {text}
        </h4>
    )
}
