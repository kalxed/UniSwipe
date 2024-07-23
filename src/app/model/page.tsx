export default function Page() {
    return (
        <div className="flex grow flex-col p-10">
            <p>Model</p>
            <p>We chose to use a Deep Q Network reinforcement learning model, which we deployed using Tensorflow. We used the following hyperparameters: 
                <ul>
                    <li>Gamma: 0.95</li>
                    <li>Alpha: 0.001</li>
                    <li>Epsilon: 1.0</li>
                    <li>Epsilon_min: 0.01</li>
                    <li>Epsilon_decay: 0.995</li>
                </ul> 
            </p>
            <p>The architecture of the Deep Q Network consists of: 
                <ul>
                    <li>2 dense layers with 24 neurons: ReLU activation</li>
                    <li>Final dense output layer with predictions, linear activation</li>
                    <li>Using Adam optimizer for large dataset</li>
                </ul>
                </p>
            <p>The environment provides the data on the universities, which is fed into the DQN model for predictions.</p>
            <p>We chose to use this type of model because of the size of our dataset. We wanted a model that would be able to handle a large amount of data, and still effectively learn. The hyperparameters were tuned after testing with different values. </p>

            <p>Model Evaluation</p>
            <p>To evaluate our model, we ran 100 simulations of 100 swipes each, keeping track of rewards and epsilon values.</p>
            <p><b>Average epsilon: 0.753</b></p>
            <p>The average epsilon is the mean value of the epsilon parameter over a period of episodes. </p>
            <p><b>Average reward: -0.019</b></p>
            <p>The average reward is the reward per time step.</p>
            <p><b>Convergence Rate: 0.44</b></p>
            <p>This rate assesses how quickly an algorithm learns an effective policy.</p>
            <p><b>Sample Efficiency: -0.224</b></p>
            <p>This measures how many environment interactions the agent needs to learn an effective policy.</p>


        </div>
    )
}