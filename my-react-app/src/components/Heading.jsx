export default function Heading(props) {
    return (
        <h2 className="text-3xl font-extrabold text-center mb-6 text-blue-600">
            {props.title}
        </h2>
    );
}