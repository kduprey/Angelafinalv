import { PropsWithChildren } from "react";
import { Line } from "../Line/Line";

export const Header = ({ children }: PropsWithChildren) => {
	return (
		<div className="mb-10 flex items-center gap-3 lg:mb-20 lg:gap-5">
			<h1>{children}</h1>
			<Line />
		</div>
	);
};
