import React,{Component} from 'react';
import  PlayerApi from'../api';


class Contact extends Component {
    render() {
        return (
            <li>{this.props.contact.name} {this.props.contact.phone}</li>
        )
    }
}

class FilteredList extends  Component{
    constructor() {
        super();
        this.state = {
            search: ''
        };
    }


    updateSearch(event) {
        this.setState({
            // Limit to 10 characters only for search
            search: event.target.value.substr(0, 10)
        });
        //    console.log(this.state.search); // this will show the previous value of state.
    }




    componentWillMount(){
        // this.setState({items: this.state.initialItems})
    }

    render (){
           let data = PlayerApi.all().filter(
            (item) => {
                //Use includes looks cleaner and should be easier to remember.
                //return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
                return item.name.toLowerCase().includes(this.state.search.toLowerCase());
            }
        );
        return (
        <div>
                <input className="text" type="text" value={this.state.search} onChange={this.updateSearch.bind(this)} />
                <hr />
                <ul>
                    {data.map((contact) => {
                        return <Contact contact={contact} key={contact.id} />
                    })}
                </ul>
        </div>
        );
    }
}

export default FilteredList;
