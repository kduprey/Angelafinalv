import {
	About,
	Angela,
	Breath,
	Collaborate,
	Connect,
	Navbar,
} from "@/Components";

export default function Page() {
	return (
		<div className="App">
			<Navbar />
			<Angela />
			<Breath />
			<About />
			<Collaborate />
			<Connect />
		</div>
	);
}
