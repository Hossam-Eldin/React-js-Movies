import React, {Component} from "react";
import PlayerApi from "../api";
import {Link} from "react-router-dom";


const data = PlayerApi.all();


class FilteredList extends Component {
    constructor() {
        super();
        this.state = {
            search: '',
            hide: false
        };
    }


    updateSearch = (event) => {
        this.setState({
            // Limit to 10 characters only for search
            search: event.target.value.substr(0, 10),
            hide: true,
        });
        //    console.log(this.state.search); // this will show the previous value of state.
    };
    search = (event) => {
        data.filter(
            (item) => {
                //Use includes looks cleaner and should be easier to remember.
                //return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
                // return item.name.toLowerCase().includes(this.state.search.toLowerCase());
                return item.name.toLowerCase().search(event.target.value.toLowerCase()) !== -1;

            }
        );
    };
    onsubmit = () => {
        this.setState({
            hide: false,
        })
    };

    render() {

        return (
            <div className="search-box">
                <div className="box">
                    <div className="container-1">
                        <span className="icon"><i className="fa fa-search"></i></span>
                        <input
                         type="search" id="search" placeholder="Search..."
                        value={this.state.search}
                        onSubmit={this.onsubmit}
                        onChange={this.updateSearch}
                        />
                    </div>
                </div>



                    <ul className={ this.state.hide ? 'display search-list' : 'dont-display search-list' }>
                        {data.map((movie) => {
                            return (
                                <li>
                                    <Link to={`/movie/${movie.number}`} onClick={this.onsubmit}>
                                        <p> {movie.name} {movie.shortDes}</p>
                                    </Link>

                                </li>
                            )
                        })}
                    </ul>


            </div>
        );
    }
}

export default FilteredList;
