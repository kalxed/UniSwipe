import '@/app/site.css'

export default function Page() {
    return (
        <div className="flex grow flex-col p-10">
            <p className="heading">Uniswipe</p>
            <p className="subtitle">Reinforcement Learning for College Decisions</p>
            <br></br>
            <p className="subheading">What is Uniswipe?</p>
            <p>Uniswipe is an application that allows prospective college students to narrow down the schools that they are interested in applying to. 
            <br></br>
            It leverages reinforcement learning, which you can learn more about on our <a href="../model"><u>model page</u></a>, to present one university at a time, along with several relevant features. The student can then swipe left or right, which continuously informs the model of the student's preferences, and continuously updates the choices that the student is shown.  </p>
            <p className="subheading">Why Uniswipe?</p>
            <p>The college applications process is incredibly complex and time-consuming. Between essays, supplementary materials, standardized testing, and the time and effort that students invest into grades and extracurriculars throughout their high school experience, the process of actually selecting which colleges to apply to should be as smooth as possible. <br></br>
            Current filtering systems run the risk of removing colleges that may be a great fit because of biased rankings and overly rigid criteria. They may oversimplify complex data down to generic criteria that don't capture a student's preferences. They also tend to overemphasize certain factors that overshadow other aspects of campus and academic culture.  <br></br>
            Uniswipe uses a student's own inputs to learn more about what that student is interested in. By displaying one university at a time, the student can focus entirely on the offerings of that school based on the information provided on its card. Each decision the student makes is aggregated with their other choices, creating a full, more holistic and subjective picture of their preferences, and allowing our reinforcement learning algorithm to match them with the colleges where they would truly fit best. </p>
            <p className="subheading">How does it work?</p>
            <p><b>Tech Stack</b></p>
            <p>Uniswipe is built in NextJS and Python. NextJS is used to create a dynamic frontend that the user can interact with, and where the user can see each input. Styling was done with Tailwind CSS. The frontend also includes swiping animations and handling of outputs. <br></br>
            A Flask API is used to send POST and GET requests between the frontend and the model. The model API works locally, since online deployment was too expensive in the early stages, so the user must download the frontend and backend repositories to run. <br></br>
            Python was used to develop the reinforcement learning model, which uses the Tensorflow library. More information about the model can be found <a href="../model"><u>here.</u></a></p>
            <p><b>Data</b></p>
            <p>The model uses the <a href="https://collegescorecard.ed.gov/data/"><u>College Scorecard</u></a> dataset, published by the Department of Education. This is a free and public dataset containing aggregate data on colleges and universities from 1993 to 2023.  <br></br>
            The dataset contains a total of about 6500 collegiate institutions in the United States, with 3744 columns. These columns have a mix of text data, one-hot encoded, and numerical features. <br></br>
            To process this data, we removed a total of 1803 columns during the feature selection process. We found that certain featurs, such as loan repayment, were less significant for a student's understanding of a university. We also removed columns with over 50% NA values. </p>
        </div>
    )
}
