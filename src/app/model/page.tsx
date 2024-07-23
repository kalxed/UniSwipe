export default function Page() {
	return (
		<div className="flex grow flex-col p-10 bg-orange-50">
			<p className="text-2xl font-bold text-center">Model</p>
			<p className="text-lg italic text-center">
				Deep Q Network with Tensorflow
			</p>
			<div className="px-4 py-2">
                <p className="text-xl font-bold">Model Parameters and Structure</p>
				<p>
					We chose to use a Deep Q Network reinforcement learning
					model approach, which we designed using Tensorflow. <br /> We used
					the following hyperparameters:
				</p>
				<ul className="p-4 italic">
					<li className="">Gamma: 0.95</li>
					<li className="">Alpha: 0.001</li>
					<li className="">Epsilon: 1.0</li>
					<li className="">Epsilon_min: 0.01</li>
					<li className="">Epsilon_decay: 0.995</li>
				</ul>
			</div>
			<div className="py-2 px-4">
				<p className="">
					The architecture of the Deep Q Network consists of:
				</p>
				<ul className="p-4 italic">
					<li>2 Dense Layers with 24 Neurons with ReLU activation</li>
					<li>
						Final Dense Output layer with predictions with Linear
						Activation
					</li>
					<li>Adam Optimizer for Large Dataset</li>
				</ul>
				<p>
					We chose to use this type of model because of the size of
					our dataset. We wanted a model that would be able to handle
					a large amount of data, and still effectively learn. The
					hyperparameters were tuned after testing with different
					values and we attempted to evaluate the model using the
					method described below.{" "}
				</p>
			</div>
			<div className="px-4 py-2">
				<p className="font-bold text-xl">Model Evaluation</p>
				<p>
					To evaluate our model, we ran 100 simulations of 100 swipes
					each, keeping track of rewards and epsilon values.
				</p>
				<p>
					<b>Average epsilon: 0.753</b>
				</p>
				<p>
					The average epsilon is the mean value of the epsilon
					parameter over a period of episodes.{" "}
				</p>
				<p>
					<b>Average reward: -0.019</b>
				</p>
				<p>The average reward is the reward per time step.</p>
				<p>
					<b>Convergence Rate: 0.44</b>
				</p>
				<p>
					This rate assesses how quickly an algorithm learns an
					effective policy.
				</p>
				<p>
					<b>Sample Efficiency: -0.224</b>
				</p>
				<p>
					This measures how many environment interactions the agent
					needs to learn an effective policy.
				</p>
				<p className="py-2">
					From these tests we found that our model is more suited to
					short term memory and over time is able to learn though
					because of the breadth of schools available it is hard to
					narrow down in the beginning without pigeonholing the user.
					We will discuss further takeaways below.
				</p>
			</div>
			<div className="p-4">
				<p className="font-bold text-xl">Questions and Takeaways</p>
				<p className="p-2">
					We sought to understand the training and deployment of
					reinforcement learning models better. In a research attempt,
					we wanted to build a model that was able to learn the
					patterns and interests of a given student in order to offer
					a better method of college suggestions. We also wanted to
					see if given random actions, how reinforcement learning
					models were able to adapt their algorithm to still cater to
					an unpredictable input series. Questions asked included, how
					to develop a reinforcement learning model that was able to
					adapt to a large dataset containing almost too many
					attributes per instance? We also sought to establish a
					consistent parameter methodology in order to address
					large-scale datasets in order to change over time due to a
					user decision sequence. Finally we aimed to establish a
					clear directive to test an algorithm of this nature without
					the standard methods that can be seen with supervised
					learning algorithms.
				</p>
				<p className="p-2">
					We found that the development of the model took too many
					stages of research into the logic of reinforcement models of
					a similar nature. Research was done into similar
					applications of this style in order to establish directives
					as well as false directions we did not want to take. The
					biggest consideration with the adaptation to the size of the
					data was in the learning rate of the agent as well as the
					level of decisions that it considered long term vs. short
					term. We discovered that the best approach was to have a
					“slow but sure” learning rate that considered short-term
					decisions over long-term ones. The goal is that the user
					learns as they search through prospective schools and can
					adapt their decisions based on newer information. This was
					designed with students with limited access to information in
					consideration. As a result, we did not want the students to
					be overly penalized for learning new interests in schools
					over time. The testing directive covered a simulation
					atmosphere with randomness taken into consideration. Keeping
					in mind the sheer number of schools in the country, there
					was a decision made that no assumptions for a student should
					be considered in the testing phase. We wanted to ensure
					scalability as well as knowing the model was actively changing
					suggestions due to the inputs coming in from the user.
				</p>
			</div>
		</div>
	);
}
