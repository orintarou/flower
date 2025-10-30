export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html>
			<head>
				<title>Flower | By Kuma</title>
			</head>
			<body>
				<div className="top-nav">
				</div>
				{children}
			</body>
		</html>
	)
}