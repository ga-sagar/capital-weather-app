import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import './CountrySearch.scss';

export default class CountrySearch extends Component {

    state = {
        searchTerm: '',
        isSubmitted: false
    };

    onSearchCountry(e) {
        const searchTerm = e.target.value;
        this.setState({ searchTerm, isSubmitted: false });
    }

    onSubmit(e) {
        e.preventDefault();
        this.setState({ isSubmitted: true });
    }

    render() {
        return (
            <main className="marginVertical30">
                <div>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Capital Weather App
                        </Typography>
                    </Container>
                </div>
                <Container maxWidth="md" className="formContainer">
                    <form className="form" noValidate autoComplete="off" onSubmit={this.onSubmit.bind(this)}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="searchCountry"
                            label="Enter country"
                            name="searchCountry"
                            autoFocus
                            helperText={this.state.searchTerm.length < 3 ? 'Please enter atleast 3 characters before proceeding further.' : ''}
                            value={this.state.searchTerm}
                            onChange={this.onSearchCountry.bind(this)}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className="submit"
                            disabled={this.state.searchTerm.length < 3 || this.state.isSubmitted}>
                            Submit
                        </Button>
                    </form>
                </Container>

                {/* Show loading text while api is fetching data */}
                {this.state.isSubmitted && (
                    <div className="marginVertical30">
                        <Typography variant="h6" align="center" color="textPrimary" gutterBottom>
                            Fetching country details.....
                    </Typography>
                    </div>
                )}
            </main>
        );
    }
}