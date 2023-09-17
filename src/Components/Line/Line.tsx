import Image from "next/image";
import line from "../../../public/Dash.png";

export const Line = () => {
	return (
		<>
			<Image src={line} alt="Line" className="h-14 w-8 lg:h-20 lg:w-14" />
		</>
	);
};
