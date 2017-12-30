import React, {Component} from "react";
import CategoryApi from "../cate-api";
import PlayerApi from "../api";

class MovieContent extends Component {
    render() {
        return (
            <div className="movies-content">
                <div className="col m4 movies-sidebar">
                    <div className="col s12">
                        <p>Tags</p>
                        {
                            CategoryApi.all().map(p => (
                                <a href="" className="waves-effect btn-movie  waves-light">{p.number}</a>
                            ))
                        }
                    </div>

                    <div className="col s12">

                        <p>Date</p>
                        {
                            PlayerApi.all().map(p => (
                                <a href="" className="waves-effect btn-movie  waves-light">{p.date}</a>
                            ))
                        }
                    </div>
                </div>
                <div className="col m8 movies-scroll">
                    <div className="movies-content-grid">
                        {

                                PlayerApi.small().map(p => (
                                     <div className="col m3">
                                         <div>
                                             <img src={p.url} alt="" className="responsive-img movies-content-img"/>
                                         </div>
                                     </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieContent;