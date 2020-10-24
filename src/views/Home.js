import React, { Component } from 'react'
import Banner from './../components/Banner'
import './../assets/css/home.css'
import Card from "./../components/Card";
import BookedCard from "./../components/BookedCard"
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { createClient } from "contentful";


var client = createClient({
    space: "pq6avf9tau1w",
    accessToken: "tYA1uPufz3L_mvNfaRAju3k33iH6VdsdcdMVI4i2mPY"
});


class home extends Component {

    constructor() {
        super();
        this.state = {
          experiences: [],
          houses: [],
          showenExperiences: [],
          showenHouses: [],
        };
        window.addEventListener("resize", this.update);
        
    }
    componentDidMount() {
        client.getEntries({content_type: 'booked'}).then(({ items }) => {
            this.setState({ experiences: items});
            this.update();
        });
        client.getEntries({content_type: 'house'}).then(({ items }) => {
            this.setState({ houses: items });
            this.update();
        });
    }
    
    update = () => {
        if (window.innerWidth < 576) {
            this.setState({
                showenExperiences: this.state.experiences.slice(0,1),
                showenHouses: this.state.houses.slice(0,1)
            });
        } else if (window.innerWidth < 768) {
            this.setState({
                showenExperiences: this.state.experiences.slice(0,2),
                showenHouses: this.state.houses.slice(0,2)
            });
        } else if (window.innerWidth < 1200) {
            this.setState({
                showenExperiences: this.state.experiences.slice(0,3),
                showenHouses: this.state.houses.slice(0,3)
            });
        } else {
            this.setState({
                showenExperiences: this.state.experiences.slice(0,5),
                showenHouses: this.state.houses.slice(0,5)
            });
        }
    };

    render() {
        return (
            <div className='home'>
                <Banner />
                <div className="section_info">
                    <h2>Just Booked</h2>
                    <p className='seeMore'>See more <NavigateNextIcon /></p>
                </div>
                <div className="home_section">
                    {
                        this.state.showenExperiences.map(experience => {
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
                        this.state.showenHouses.map(house => {
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
                        this.state.showenExperiences.map(experience => {
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
                        this.state.showenHouses.map(house => {
                            return <Card key={house.sys.id} src={house.fields.img} title={house.fields.title} description={house.fields.description}/>
                        })
                    }
                </div>
            </div>
        )
    }
    
}

export default home
