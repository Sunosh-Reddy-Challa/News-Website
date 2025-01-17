import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar color="#f11946" progress={this.state.progress} />

          <div className="container my-5">
            <Routes>
              <Route
                exact
                path="/General"
                element={
                  <News
                    setProgress={this.setProgress}
                    key="general"
                    pageSize={5}
                    country="in"
                    category="general"
                  />
                }
              />
              <Route
                exact
                path="/Business"
                element={
                  <News
                    setProgress={this.setProgress}
                    key="business"
                    pageSize={5}
                    country="in"
                    category="business"
                  />
                }
              />
              <Route
                exact
                path="/Entertainment"
                element={
                  <News
                    setProgress={this.setProgress}
                    key="entertainment"
                    pageSize={5}
                    country="in"
                    category="entertainment"
                  />
                }
              />
              <Route
                exact
                path="/Health"
                element={
                  <News
                    setProgress={this.setProgress}
                    key="health"
                    pageSize={5}
                    country="in"
                    category="health"
                  />
                }
              />
              <Route
                exact
                path="/Science"
                element={
                  <News
                    setProgress={this.setProgress}
                    key="science"
                    pageSize={5}
                    country="in"
                    category="science"
                  />
                }
              />
              <Route
                exact
                path="/Sports"
                element={
                  <News
                    setProgress={this.setProgress}
                    key="sports"
                    pageSize={5}
                    country="in"
                    category="sports"
                  />
                }
              />
              <Route
                exact
                path="/Technology"
                element={
                  <News
                    setProgress={this.setProgress}
                    key="technology"
                    pageSize={5}
                    country="in"
                    category="technology"
                  />
                }
              />
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}
