import { Header } from "@/Components/Header/Header";
import "./Connect.css";

export const Connect = () => {
	return (
		<div className="p-4">
			<Header>Get in Touch</Header>
			<div className="flex flex-col gap-5">
				<p>
					Based in Silicon Valley, working remotely with global
					clients.
				</p>
				<a href="tel:+15152082306">+1.515.208.2306</a>
			</div>
		</div>
	);
};
