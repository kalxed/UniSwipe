export default function Tutorial() {
	return (
		<div className="flex flex-col grow p-10 bg-orange-50">
			<h1 className="text-2xl font-bold text-center">Tutorial</h1>
			<p className="text-lg italic text-center">How to use UniSwipe</p>
			<div className="flex flex-col p-4">
				<p className="text-xl font-bold">Frontend</p>
				<p className="px-4">
					To set up the frontend for the UniSwipe website, navigate to
					the{" "}
					<a
						className="text-blue-500"
						href="https://github.com/kalxed/uniswipe"
					>
						github page for UniSwipe
					</a>{" "}
					and clone it. Within the repository it should contain a
					README.md with instructions on how to set up the frontend of
					the website.
				</p>
			</div>
			<div className="flex flex-col p-4">
				<p className="text-xl font-bold">Backend</p>
				<p className="px-4">
					To setup the backend for the UniSwipe website, which
					contains the model, navigate to the{" "}
					<a
						className="text-blue-500"
						href="https://github.com/kalxed/uniswipebackend"
					>
						github page for UniSwipe backend
					</a>{" "}
					and clone it. Within the repository it should contain a
					README.md with instructions on how to set up the backend and
					connect it to the frontend. The dataset is within the
					repository but the full dataset without the manual deletions
					that were done is available{" "}
					<a
						href="https://collegescorecard.ed.gov/data/"
						className="text-blue-500"
					>
						here
					</a>
					.
				</p>
			</div>
		</div>
	);
}
