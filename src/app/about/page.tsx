export default function Page() {
	return (
		<div className="flex grow flex-col p-10">
			<p className="text-2xl font-bold text-center">UniSwipe</p>
			<p className="text-lg italic text-center">
				Reinforcement Learning for College Decisions
			</p>
			<br></br>
			<div className="p-4">
				<p className="text-lg font-bold">What is UniSwipe?</p>
				<p className="">
					UniSwipe is an application that allows prospective college
					students to narrow down the schools that they are interested
					in applying to. It leverages reinforcement learning, which
					you can learn more about on our{" "}
					<a className="text-blue-500" href="/model">
						<u>model page</u>
					</a>
					, to present one university at a time, along with several
					relevant features. The student can then swipe left or right,
					which continuously informs the model of the student's
					preferences, and continuously updates the choices that the
					student is shown.
				</p>
			</div>
			<div className="p-4">
				<p className="text-lg font-bold">Why UniSwipe?</p>
				<p>
					The college applications process is incredibly complex and
					time-consuming. Between essays, supplementary materials,
					standardized testing, and the time and effort that students
					invest into grades and extracurriculars throughout their
					high school experience, the process of actually selecting
					which colleges to apply to should be as smooth as possible.
					Current filtering systems run the risk of removing colleges
					that may be a great fit because of biased rankings and
					overly rigid criteria. They may oversimplify complex data
					down to generic criteria that don't capture a student's
					preferences. They also tend to overemphasize certain factors
					that overshadow other aspects of campus and academic
					culture. UniSwipe uses a student's own inputs to learn more
					about what that student is interested in. By displaying one
					university at a time, the student can focus entirely on the
					offerings of that school based on the information provided
					on its card. Each decision the student makes is aggregated
					with their other choices, creating a full, more holistic and
					subjective picture of their preferences, and allowing our
					reinforcement learning algorithm to match them with the
					colleges where they would truly fit best.
				</p>
			</div>
			<div className="p-4">
				<p className="text-lg font-bold">How does it work?</p>
				<div className="py-2">
					<p className="font-bold">Tech Stack</p>
					<p>
						UniSwipe is built in NextJS and Python. NextJS is used
						to create a dynamic frontend that the user can interact
						with, and where the user can see each input. Styling was
						done with Tailwind CSS. The frontend also includes
						swiping animations and handling of outputs. A Flask API
						is used to send POST and GET requests between the
						frontend and the model. The model API works locally,
						since online deployment was too expensive in the early
						stages, so the user must download the frontend and
						backend repositories to run. Python was used to develop
						the reinforcement learning model, which uses the
						Tensorflow library. More information about the model can
						be found{" "}
						<a href="/model" className="text-blue-500">
							<u>here.</u>
						</a>
					</p>
				</div>
				<div className="py-2">
					<p className="font-bold">Data</p>
					<p>
						The model uses the{" "}
						<a
							className="text-blue-500"
							href="https://collegescorecard.ed.gov/data/"
						>
							<u>College Scorecard</u>
						</a>{" "}
						dataset, published by the Department of Education. This
						is a free and public dataset containing aggregate data
						on colleges and universities from 1993 to 2023.{" "}
						<br></br>
						The dataset contains a total of about 6500 collegiate
						institutions in the United States, with 3744 columns.
						These columns have a mix of text data, one-hot encoded,
						and numerical features. <br></br>
						To process this data, we removed a total of 1803 columns
						during the feature selection process. We found that
						certain featurs, such as loan repayment, were less
						significant for a student's understanding of a
						university. We also removed columns with over 50% NA
						values.{" "}
					</p>
				</div>
			</div>
		</div>
	);
}
