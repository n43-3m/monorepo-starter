import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="h-screen bg-gray-800 w-screen flex justify-center items-center">
			<span className="text-5xl font-bold text-white/90">its working!</span>
		</div>
	);
}
