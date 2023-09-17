import businessIcon from "../../../public/Business_Icon.png";
import lightIcon from "../../../public/Lightning_Icon.png";
import projectIcon from "../../../public/Project_Icon.png";
import { Header } from "../Header/Header";
import { Card } from "./Card/Card";
import "./Collaborate.css";

export const Collaborate = () => {
	return (
		<div className="mx-auto flex h-auto w-full flex-col items-start justify-center gap-2 p-4 py-[30px] ">
			<Header>Let&apos;s collaborate</Header>
			<div className="flex w-full flex-col items-center justify-between gap-5 lg:flex-row">
				<Card
					icon={lightIcon}
					altText="Lightning Icon"
					heading={"Sprint"}
					body={
						"Task-orientated relationships focused on a near-term needs. Based on an hourly/day rate."
					}
					timing={"Typically 2-6 weeks"}
				/>
				<Card
					icon={projectIcon}
					altText="Project Icon"
					heading={"Project"}
					body={
						"Objective-oriented relationships focused on more complex challenges. Based on a project fee."
					}
					timing={"Typically 3-4 months"}
				/>
				<Card
					icon={businessIcon}
					altText="Business Icon"
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
