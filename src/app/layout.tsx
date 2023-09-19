import "./globals.css";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="m-0 bg-[#ede9e6]  pb-[14rem] font-body">
				{children}
			</body>
		</html>
	);
}
