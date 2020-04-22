import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import './CountryDetails.scss';
import CapitalWeatherDetails from '../../components/CapitalWeatherDetails/CapitalWeatherDetails';

export default class CountryDetails extends Component {
    render() {
        return (
            <main className="marginVertical30">
                {/* Country Information */}
                <div className="marginVertical30">
                    <Container maxWidth="md">
                        <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
                            Country Information
                        </Typography>
                        <Card >
                            <CardActionArea>
                                <CardMedia
                                    className="country-flag"
                                    image="https://restcountries.eu/data/ind.svg"
                                    title="Country Flag"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Country Name : XYZ
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Capital : XYZ
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Population : XYZ
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lat Long : XYZ
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Capital Weather
                                </Button>
                            </CardActions>
                        </Card>
                    </Container>
                </div>

                {/* Capital Weather Information */}
                <CapitalWeatherDetails />
            </main>
        );
    }
}