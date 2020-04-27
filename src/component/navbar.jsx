import React from "react";
import { Switch, Link, Route } from "react-router-dom";
import Home from "./home.jsx";
import Indonesia from "./indonesia.jsx";
import About from './about.jsx';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "home"
        };
    }
    handleClick = name => {
        this.setState({
            name: name
        });
    };
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark justify-content-sm-start fixed-top">
                    <div class="container-fluid">
                        <a
                            class="navbar-brand order-1 order-lg-0 ml-lg-0 ml-2 mr-auto"
                            href="#"
                        >
                            InfoCorona
                        </a>
                        <button
                            class="navbar-toggler align-self-start"
                            type="button"
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div
                            class="collapse navbar-collapse bg-dark p-3 p-lg-0 mt-5 mt-lg-0 d-flex flex-column flex-lg-row flex-xl-row justify-content-lg-end mobileMenu"
                            id="navbarSupportedContent"
                        >
                            <ul class="navbar-nav align-self-stretch">
                                <li
                                    class={
                                        this.state.name === "home"
                                            ? "nav-item active"
                                            : "nav-item"
                                    }
                                    onClick={() => this.handleClick("home")}
                                >
                                    <Link class="nav-link" to="/">
                                        Home
                                    </Link>
                                </li>
                                <li
                                    class={
                                        this.state.name === "indonesia"
                                            ? "nav-item active"
                                            : "nav-item"
                                    }
                                    onClick={() =>
                                        this.handleClick("indonesia")
                                    }
                                >
                                    <Link class="nav-link" to="/indonesia">
                                        Indonesia
                                    </Link>
                                </li>
                                <li
                                    class={
                                        this.state.name === "about"
                                            ? "nav-item active"
                                            : "nav-item"
                                    }
                                    onClick={() =>
                                        this.handleClick("about")
                                    }
                                >
                                    <Link class="nav-link" to="/about">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div class="overlay"></div>
                <div class="container-fluid py-4 my-5">
                    <div class="row">
                        <div class="col-md-12">
                            <Switch>
                                <Route path="/" exact component={Home} />
                                <Route path="/about" exact component={About} />
                                <Route
                                    path="/indonesia"
                                    exact
                                    component={Indonesia}
                                />
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;
