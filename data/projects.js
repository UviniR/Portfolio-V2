import Image01 from "@public/assets/projects/img1.png"
import Image02 from "@public/assets/projects/img2.png"
import Image03 from "@public/assets/projects/img3.png"


const projects = [
    {
        title: "Web App for Sentiment Analysis",
        desc: "Fine-tuned a pre-trained HuggingFace model for sentiment analysis of customer reviews received by a hotel",
        technologies: ["NLP", "PyTorch", "HuggingFace", "Streamlit"],
        img: Image01,
        link: "https://github.com/UviniR/Reviews-Sentiment-Analysis"
    },
    {
        title: "Web App for Online Quizzes",
        desc: "Developed using Python, the web app allows teachers to create quizzes and students to attempt quizzes.",
        technologies: ["Django", "MySQL", "HTML", "Bootstrap"],
        img: Image02,
        link: "https://github.com/UviniR/Quiz-Time"
    },
    {
        title: "NYC Yellow Taxi Trips Analysis",
        desc: "Runnning Python commands on a Apache Hadoop cluster to pre-process and analyse Big Data.",
        technologies: ["GCP", "DataProc", "PySpark"],
        img: Image03,
        link: "https://github.com/UviniR/NYC-Yellow-Taxi-Trips"
    },

]
export default projects