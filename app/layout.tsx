export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html>
			<body>
				<div className="top-nav">
					<p>> Flower</p>
				</div>
				{children}
			</body>
		</html>
	)
}