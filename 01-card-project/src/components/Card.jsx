const Card = (props) => {
    return (
        <div className='card'>
            <div className="top">
                <img src={props.img} alt="logo" height={32} />
                <p>Save</p>
            </div>
            <div className="mid">
                <div className='lev2'>
                    <p className="companyName">{props.companyName}</p>
                    <p className="time">{props.time}</p>
                </div>
                <h3 className="jobName">{props.job}</h3>
                <button className="type">{props.type}</button>
                <button className="type">{props.level}</button>
            </div>
            <div className="low">
                <div>
                    <h3 className="pay">{props.companyName}</h3>
                    <h6 className="location">{props.location}</h6>
                </div>
                <button>Apply Now</button>
            </div>
        </div>
    )
}

export default Card