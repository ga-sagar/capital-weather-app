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

class CountryDetails extends Component {

    componentDidMount() {
        console.log("this.props", this.props);
        // handle refresh case
        if (!this.props.CountryDetails) {
            this.props.searchCountry(this.props.match.params.countryName)
        }
    }

    render() {
        const countryDetails = this.props.countryDetails;

        if (!countryDetails) {
            return (
                <Typography gutterBottom variant="h5" component="h2">
                    Fetching country details.....
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

const mapStateToProps = state => {
    return {
        ...state.countryData
    };
}

const mapDispatchToProps = {
    searchCountry
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryDetails);