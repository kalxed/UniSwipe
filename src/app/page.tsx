import DraggableDiv from "@/_components/draggablediv";
import InterestArrows from "@/_components/tutorial";
import Navbar from "@/_components/navbar";

export default function Home() {
	return (
		<main className="flex flex-col grow bg-gray-100 m-0">
			<DraggableDiv/>
            <InterestArrows/>
		</main>
	);
}
