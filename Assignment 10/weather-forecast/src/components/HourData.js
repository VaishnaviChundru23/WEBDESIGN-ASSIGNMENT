
import React from 'react';
import HourlyData from './HourlyData';


class HourData extends React.Component {

    
    state = {
        fullData: [],
        dailyData: []
    }

    componentDidMount = () => {
        const weatherURL =
            `http://api.openweathermap.org/data/2.5/forecast?zip=02115&units=metric&APPID=4b64e60a97b9e6e196bcf12d8f2993a3`

        fetch(weatherURL)
            .then(res => res.json())
            .then(data => {
                const dailyData = data.list;
                this.setState({
                    fullData: data.list,
                    dailyData: dailyData
                }, () => console.log(this.state))
            })
    };

    formatHourCard = (day) => {
        return this.state.dailyData.map((reading, index) => <HourlyData reading={reading} key={index} day={day}/>)
    }

    render() {

        const day = window.location.href.split('/')[4]

        return (
            <div className='container'>
                <div className="row justify-content-center">
                    {this.formatHourCard(day)}
                </div>
            </div>
        )
    }

}

export default HourData;