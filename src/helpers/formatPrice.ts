export function formatPrice(number: number) {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		notation: "compact"
	}).format(number)
}
