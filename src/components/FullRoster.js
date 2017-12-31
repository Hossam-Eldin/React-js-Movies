import React from "react";
import PlayerAPI from "../api";
import {Link} from "react-router-dom";
import MovieContent from "./movie-content";


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
                                    <span className="movies-heart"><i className="fa fa-heart" aria-hidden="true"></i></span>
                                </div>
                                <p className="movie-card-desc">{p.shortDes}</p>
                                <h3 className="movie-card-title">{p.name}</h3>
                            </div>
                        </Link>
                    </div>))
            }
        </div>
        <MovieContent/>
    </div>
)

export default FullRoster

