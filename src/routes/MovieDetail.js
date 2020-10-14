import React from "react";

class MovieDetail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/");
        }
    }

    render() {
        const { location } = this.props;
        if (location.state) {
            return <div className="container mt-5 text-center">
                <h1>{location.state.title} ({location.state.year})</h1>
                <img className="my-4" src={location.state.poster} alt={location.state.title} title={location.state.title} />
                <ul className="genres text-center flex-wrap text-break text-break-1">
                        {location.state.genres.map((genre, index) => <li key={index} className="genres_genre mr-3">#{genre}</li>)}
                    </ul>
                <div className="text-muted">{location.state.summary}</div>
            </div>;
        } else {
            return null;
        }
    }
}

export default MovieDetail;