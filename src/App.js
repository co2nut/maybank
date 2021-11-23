import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import MapInput from './components/MapInput'
import Map from './components/Map'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Badge from '@mui/material/Badge';
import Card from '@mui/material/Card';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function App(props) {

  useEffect(() => {
    console.log(props.searches)
  }, [])

  return (
    <>
      <div className="App">
        <Container style={{ padding: 10 }} fixed>
          <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2} >
            <Grid item xs={8}>
              <Card>
                <Map />
              </Card>
            </Grid>
          </Grid>
          <br />
          <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2} >
            <Grid item xs={4}>
              <MapInput />
            </Grid>
            <Grid style={{textAlign:'right'}} item xs={1}>
              <Badge color="secondary" badgeContent={props.searches.searchHistories.length} max={99}>
                <LocationOnIcon />
              </Badge>
            </Grid>
          </Grid>
        </Container>

      </div>
    </>
  );
}

function mapStateToProps(state) {
  return {
    searches: state.searches
  }
}

function mapDispatchProps(dispatch) {
  return bindActionCreators({
    // updateLocations: updateLocations
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchProps)(App);
