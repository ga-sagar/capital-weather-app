import React, { Component } from 'react';

import { connect } from 'react-redux';
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
import { searchCountry } from '../CountrySearch/CountrySearchActions';
import { getCapitalWeather } from '../CountryDetails/CapitalWeatherActions';

class CountryDetails extends Component {

    componentDidMount() {
        // handle refresh case
        if (!this.props.countryData.countryDetails) {
            this.props.searchCountry(this.props.match.params.countryName)
        }
    }

    getCapitalWeatherDetails() {
        this.props.getCapitalWeather(this.props.countryData.countryDetails.capital);
    }

    render() {
        const countryDetails = this.props.countryData.countryDetails;
        const capitalWeatherData = this.props.capitalWeatherData;

        // initial loading on refresh
        if (!countryDetails) {
            return (
                <Typography gutterBottom variant="h5" component="h2" className="marginVertical30 center">
                    Fetching country details.....
                </Typography>
            );
        } else if (this.props.countryData.error) {
            // if api couldn't fetch data, show error
            return (
                <Typography gutterBottom variant="h5" component="h2" className="marginVertical30 center">
                    {this.props.countryData.error}
                </Typography>
            )
        }

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
                                    image={countryDetails.flag}
                                    title="Country Flag"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Country Name : {countryDetails.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Capital : {countryDetails.capital}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Population : {countryDetails.population}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lat Long : {countryDetails.latlng.join(',')}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" onClick={this.getCapitalWeatherDetails.bind(this)}>
                                    Capital Weather
                                </Button>
                            </CardActions>
                        </Card>
                    </Container>
                </div>

                {/* Capital Weather Information */}

                {/* Loading text */}
                {capitalWeatherData && capitalWeatherData.isProcessing && (
                    <Typography gutterBottom variant="h5" component="h2" className="marginVertical30 center">
                        Fetching capital weather details.....
                    </Typography>
                )}

                {/* API error */}
                {capitalWeatherData && capitalWeatherData.weatherError && (
                    <Typography gutterBottom variant="h5" component="h2" className="marginVertical30 center">
                        {capitalWeatherData.weatherError}
                    </Typography>
                )}

                {/* Information */}
                {capitalWeatherData && capitalWeatherData.capitalWeatherDetails && (
                    <CapitalWeatherDetails capitalWeatherData={capitalWeatherData} />
                )}
            </main>
        );
    }
}

const mapStateToProps = state => {
    return {
        countryData: { ...state.countryData },
        capitalWeatherData: { ...state.capitalWeatherData }
    };
}

const mapDispatchToProps = {
    searchCountry,
    getCapitalWeather
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryDetails);