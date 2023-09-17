import Image from "next/image";
import businessIcon from "../../../public/Business_Icon.png";
import line from "../../../public/Dash.png";
import lightIcon from "../../../public/Lightning_Icon.png";
import projectIcon from "../../../public/Project_Icon.png";
import { Card } from "./Card/Card";
import "./Collaborate.css";

export const Collaborate = () => {
	return (
		<div className="collaborate-container">
			<div className="text-container">
				<h1>
					Let&apos;s collaborate <Image src={line} alt="Line" />
				</h1>
			</div>
			<div className="row">
				<Card
					icon={lightIcon}
					heading={"Sprint"}
					body={
						"Task-orientated relationships focused on a near-term needs. Based on an hourly/day rate."
					}
					timing={"Typically 2-6 weeks"}
				/>
				<Card
					icon={projectIcon}
					heading={"Project"}
					body={
						"Objective-oriented relationships focused on more complex challenges. Based on a project fee."
					}
					timing={"Typically 3-4 months"}
				/>
				<Card
					icon={businessIcon}
					heading={"Dedicated Business Leader"}
					body={
						"Fully-invested business leader focused on the intersection of user x brand x product."
					}
					timing={"Determined by the scope of the work "}
				/>
			</div>
		</div>
	);
};
