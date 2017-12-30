import React from 'react'
import PlayerAPI from '../api'
import { Link } from 'react-router-dom'

// The Player looks up the player using the number parsed from
// the URL's pathname. If no player is found with the given
// number, then a "player not found" message is displayed.
const Player = (props) => {
    const player = PlayerAPI.get(
        parseInt(props.match.params.number, 10)
    )

    if (!player) {
        return <div>Sorry, but the player was not found</div>
    }

    return (
        <div className="gird">

            <div className="details-wrap z-depth-5">
                <div className="details-img-wrap">
                <img src={player.url} className="details-img" alt=""/>
                </div>
                    <div className="pl">
                    <h1 className="details-title">{player.name}</h1>
                    <p className="details-desc">{player.des}</p>

                    <Link to='/movie' className="link-back">Back</Link>
                </div>
            </div>
        </div>
    )
}

export default Player
