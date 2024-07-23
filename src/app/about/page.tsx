export default function Page() {
    return (
        <div className="flex grow flex-col p-10">
            <h1>Uniswipe</h1>
            <h2>Reinforcement Learning for College Decisions</h2>
            <br></br>
            <h3>What is Uniswipe?</h3>
            <p>Uniswipe is an application that allows prospective college students to narrow down the schools that they are interested in applying to. 
            <br></br><br></br>
            It leverages reinforcement learning, which you can learn more about on our <a href="../model/page.tsx">model page</a>, to present one university at a time, along with several relevant features. The student can then swipe left or right, which continuously informs the model of the student's preferences, and continuously updates the choices that the student is shown.  </p>
            <h3>Why Uniswipe?</h3>
            <p>The college applications process is incredibly complex and time-consuming. Between essays, supplementary materials, standardized testing, and the time and effort that students invest into grades and extracurriculars throughout their high school experience, the process of actually selecting which colleges to apply to should be as smooth as possible. </p>
            <p>Unfortunately, current filtering systems don't account for </p>
        </div>
    )
}
