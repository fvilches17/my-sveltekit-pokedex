let count = 0;

export async function get() {
    count++;
	return {
		status: 200,
		body: { count }
	};
}
