import { useEffect, useState } from "react"

export const useScrollSpy = (ids: string[], offset = 0) => {
	const [activeId, setActiveId] = useState<string | null>("Overview")

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				const visibleSections = entries
					.filter(entry => entry.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio)

				if (visibleSections.length > 0) {
					setActiveId(visibleSections[0].target.id)
				}
			},
			{
				rootMargin: `-100px 0px -60% 0px`,
				threshold: 0.1
			}
		)
		ids.forEach(id => {
			const el = document.getElementById(id)
			if (el) observer.observe(el)
		})

		return () => observer.disconnect()
	}, [ids, offset])

	return activeId
}
