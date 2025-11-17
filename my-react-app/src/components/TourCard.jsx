import Button from "./Button";
import Heading from "./Heading";
export default function TourCard(props) {
    return (
        <div className="border border-gray-200 rounded-lg shadow-lg overflow-hidden flex flex-col">
            <img src={props.image} alt={props.title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-2xl font-bold text-orange-500">{props.title}</h2>
            </div>
            <div>
                <Button add="Add Tour" detail="Xem Thêm" />
            </div>
        </div >
    )
}