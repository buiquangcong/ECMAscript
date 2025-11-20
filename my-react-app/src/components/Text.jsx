export default function Text(props) {
    return (
        <div className="max-w-4xl mx-auto px-4 text-center mb-10">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                {props.text}
            </p>
        </div>
    )
}