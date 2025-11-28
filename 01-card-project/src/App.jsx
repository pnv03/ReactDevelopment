import Card from "./components/Card"

import Amazon from './assets/amazon.png'
import Google from './assets/google.webp'
import Airbnb from './assets/airbnb.png'
import Apple from './assets/apple.png'
import Dribble from './assets/dribble.jpg'
import Figma from './assets/figma.png'

const App = () => {
  const cardsData = [
    { img: Amazon, companyName: "Amazon", time: "2d ago", job: "Frontend Developer", type: "Full-time", level: "Mid-level", pay: "$90k", location: "Seattle" },
    { img: Google, companyName: "Google", time: "1d ago", job: "Backend Engineer", type: "Full-time", level: "Senior", pay: "$120k", location: "Mountain View" },
    { img: Dribble, companyName: "Dribble", time: "5d ago", job: "UI Designer", type: "Part-time", level: "Junior", pay: "$50k", location: "Remote" },
    { img: Airbnb, companyName: "Airbnb", time: "3d ago", job: "Product Manager", type: "Full-time", level: "Mid-level", pay: "$110k", location: "San Francisco" },
    { img: Figma, companyName: "Figma", time: "4d ago", job: "UX Designer", type: "Contract", level: "Senior", pay: "$100k", location: "Remote" },
    { img: Apple, companyName: "Apple", time: "1w ago", job: "iOS Developer", type: "Full-time", level: "Mid-level", pay: "$115k", location: "Cupertino" }
  ]

  return (
    <div className="main">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          img={card.img}
          companyName={card.companyName}
          time={card.time}
          job={card.job}
          type={card.type}
          level={card.level}
          pay={card.pay}
          location={card.location}
        />
      ))}
    </div>
  )
}

export default App
