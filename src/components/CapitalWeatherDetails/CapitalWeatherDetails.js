import React from 'react';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import './CapitalWeatherDetails.scss';

const capitalWeatherDetails = (props) => {
    const { capitalWeatherData } = props;
    let { capitalWeatherDetails, weatherError } = capitalWeatherData;

    if (weatherError) {
        return (
            <Typography gutterBottom variant="h5" component="h2" className="marginVertical30">
                {weatherError}
            </Typography>
        );
    }

    return (
        <div className="marginVertical30">
            <Container maxWidth="md">
                <Typography component="h1" variant="h5" align="center" color="textPrimary" gutterBottom>
                    Capital Weather
                </Typography>
                <Card >
                    <CardActionArea>
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Temperature : {capitalWeatherDetails.current.temperature}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Wind Speed : {capitalWeatherDetails.current.wind_speed}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Precip : {capitalWeatherDetails.current.precip}
                            </Typography>
                            {capitalWeatherDetails.current.weather_icons.map((val, index) => {
                                return (
                                    <CardMedia
                                        key={index}
                                        className="weather-image"
                                        image={val}
                                        title="weather-icon"
                                    />
                                )
                            })}
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Container>
        </div>
    );
}

export default capitalWeatherDetails;