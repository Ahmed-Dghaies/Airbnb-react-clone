import React from 'react'
import Banner from './../components/Banner'
import './../assets/css/home.css'
import Card from "./../components/Card";
import BookedCard from "./../components/BookedCard"
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


function home({experiences, houses}) {
    return (
        <div className='home'>
            <Banner />
            <div className="section_info">
                <h2>Just Booked</h2>
                <p className='seeMore'>See more <NavigateNextIcon /></p>
            </div>
            <div className="home_section">
                {
                    experiences.map(experience => {
                        return <BookedCard key={experience.sys.id} src={experience.fields.img} price={experience.fields.price} description={experience.fields.description} star={experience.fields.review}/>
                    })
                }
            </div>
            <div className="section_info">
                <h2>Featured destinations</h2>
                <p className='seeMore'>See more <NavigateNextIcon /></p>
            </div>
            <div className="home_section">  
                {
                    houses.map(house => {
                        return <Card key={house.sys.id} src={house.fields.img} price={house.fields.title}/>
                    })
                }
            </div>
            <div className="section_info">
                <h2>Experiences</h2>
                <p className='seeMore'>See more <NavigateNextIcon /></p>
            </div>
            <div className="home_section">
                {
                    experiences.map(experience => {
                        return <BookedCard key={experience.sys.id} src={experience.fields.img} price={experience.fields.price} description={experience.fields.description} star={experience.fields.review}/>
                    })
                }
            </div>
            <div className="section_info">
                <h2>Places in London</h2>
                <p className='seeMore'>See more <NavigateNextIcon /></p>
            </div>
            
            <div className="home_section">
                {
                    houses.map(house => {
                        return <Card key={house.sys.id} src={house.fields.img} title={house.fields.title} description={house.fields.description}/>
                    })
                }
            </div>
        </div>
    )
}

export default home
