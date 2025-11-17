export default function Button(props) {
    return (
        <div className=" justify-center flex gap-4 my-4 font-bold">
            <button className="border-2 border-black border-b-2 rounded-4xl px-4 py-2 hover:bg-blue-500 gap-6 transition">{props.add}</button>
            <button className="border-2 border-black border-b-2 rounded-4xl px-4 py-2 hover:bg-amber-200 gap-4 transition">{props.detail}</button>
        </div>
    );
}