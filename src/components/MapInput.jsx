import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateLocations, updateSearches } from '../actions/searches-actions'
import Geosuggest from 'react-geosuggest';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function MapInput(props) {
  return <Geosuggest
    style={{
      'input': {
        height: 30,
        width: '100%',
        borderRadius: 5,
        borderWidth: 1,
        padding: 3,
        paddingLeft:10,
      },
      'suggests':{
        position:'absolute',
        padding:0,
        maxWidth: 400,
        listStyleType: 'none'
      }
    }}

    renderSuggestItem={(i)=>{
      return (<Button style={{marginTop:2}} variant="outlined"><span style={{paddingRight:2}}>{i.description}</span><LocationOnIcon /> </Button>)
    }}

    country="MY"
    onSuggestSelect={(e) => {
      if(e){
        props.updateLocations(e.location)
        props.updateSearches([...props.searches.searchHistories].concat(e))
      }
    }}
  />
}

function mapStateToProps(state) {
  return {
    searches: state.searches
  }
}

function mapDispatchProps(dispatch) {
  return bindActionCreators({
    updateLocations,
    updateSearches
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchProps)(MapInput);