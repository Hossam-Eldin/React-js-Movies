import React from "react";
import PlayerAPI from "../api";
import {Link} from "react-router-dom";
import MovieContent from "./movie-content";
import FilterList from './search';
// The FullRoster iterates over all of the players and creates
// a link to their movie page.
const FullRoster = () => (
    <div>
        <div className="gird">
            {
                PlayerAPI.all().map(p => (

                    <div className="col m3 float-right" key={p.number}>
                        <Link to={`/movie/${p.number}`}>
                            <div className="movie-card">
                                <div className="movie-card-wrap">
                                    <img src={p.url} className="movie-card-image" alt=""/>
                                    <span className="movie-card-badge">{p.rating}</span>
                                </div>
                                <p className="movie-card-desc">{p.shortDes}</p>
                                <h3 className="movie-card-title">{p.name}</h3>
                            </div>
                        </Link>
                    </div>))
            }
        </div>
        <MovieContent/>
        <FilterList/>
    </div>
)

export default FullRoster

