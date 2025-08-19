import RoadmapHeader from "@/components/DashComponent/RoadmapHead";
import SectionCard from "@/components/DashComponent/SectionCard";
import { Roadmap } from "@/shared/types";

async function fetchRoadmapById(id: string): Promise<Roadmap | null> {
	try {
		const res = await fetch(`http://127.0.0.1:5000/getroadmap/${id}`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			cache: 'no-store'
		});
		const json = await res.json();
		if (!res.ok) return null;
		const data = json.data || json;
		return data as Roadmap;
	} catch {
		return null;
	}
}

export default async function Page({ params }: { params: { id: string } }) {
	const roadmap = await fetchRoadmapById(params.id);

	if (!roadmap) {
		return (
			<div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
				<div className="max-w-5xl mx-auto">
					<div className="rounded-2xl border p-8 text-center" style={{ borderColor: 'var(--color-Primary)' }}>
						<p className="text-lg font-medium" style={{ color: 'var(--color-Neutral3)' }}>
							Roadmap not found or failed to load.
						</p>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
			<div className="max-w-5xl mx-auto">
				<RoadmapHeader
					title={roadmap.title}
					description={roadmap.description || ''}
					domain={roadmap.domain}
					estimated_duration={roadmap.estimated_duration || ''}
					created_at={roadmap.created_at}
				/>

				<div className="space-y-8">
					{(roadmap.sections || [])
						.sort((a, b) => a.order - b.order)
						.map((section, index) => (
							<SectionCard key={index} section={section as any} />
						))}
				</div>

				<div className="mt-12 text-center">
					<div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-sm border border-gray-200">
						<div className="w-2 h-2 bg-lime-500 rounded-full"></div>
						<span className="text-sm font-medium text-gray-600">You've reached the end of this roadmap</span>
					</div>
				</div>
			</div>
		</div>
	);
}