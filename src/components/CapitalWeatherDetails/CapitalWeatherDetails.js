import React from 'react';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import './CapitalWeatherDetails.scss';

const capitalWeatherDetails = (props) => {
    return (
        <div className="marginVertical30">
            <Container maxWidth="md">
                <Typography component="h1" variant="h5" align="center" color="textPrimary" gutterBottom>
                    Capital Weather
                </Typography>
                <Card >
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Capital : XYZ
                                    </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Temperature : XYZ
                                    </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Wind Speed : XYZ
                                    </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Precip : XYZ
                                    </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                <CardMedia
                                    className="weather-image"
                                    image="https://restcountries.eu/data/ind.svg"
                                    title="Country Flag"
                                />
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Container>
        </div>
    );
}

export default capitalWeatherDetails;