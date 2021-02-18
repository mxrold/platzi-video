import React, { useState, useMemo } from 'react';

import { connect } from 'react-redux';
import { getVideosSearch } from '../actions';

import '../assets/styles/components/Search.scss';


const Search = props => {
    const { getVideosSearch } = props;

    const handleQuery = event => {
        getVideosSearch(event.target.value);
    }
 
    return (
        <section className="main">
            <h2 className="main__title">¿Qué quieres ver hoy?</h2>
            <input 
                type="text"
                className="input"
                placeholder="Buscar..."
                onChange={handleQuery} 
            />
        </section>
    );
}

const mapStateToProps = state => {
    return {
        searchVideos: state.searchVideos
    };
}

const mapDispatchToProps = {
    getVideosSearch,
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);