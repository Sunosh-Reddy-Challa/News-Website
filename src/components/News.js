import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: "10",
    category: "sports",
  };
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      loading: false,
      country: "in",
      totalResults: 0,
    };
  }

  // handlePrevClick = async () => {
  //   let url = `https://newsapi.org/v2/top-headlines?country=${
  //     this.props.country
  //   }&apiKey=2614b254af8f4ac0854a0c767643a4b4&page=${
  //     this.state.page - 1
  //   }&pageSize=10&category=${this.props.category}`;
  //   {
  //     this.setState({ loading: true });
  //   }
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   this.setState({
  //     page: this.state.page - 1,
  //     articles: parsedData.articles,
  //     loading: false,
  //   });
  // };

  // handleNextClick = async () => {
  //   if (this.state.page + 1 > Math.ceil(this.state.totalResults / 10)) {
  //   } else {
  //     let url = `https://newsapi.org/v2/top-headlines?country=${
  //       this.props.country
  //     }&apiKey=2614b254af8f4ac0854a0c767643a4b4&page=${
  //       this.state.page - 1
  //     }&pageSize=10&category=${this.props.category}`;
  //     {
  //       this.setState({ loading: true });
  //     }
  //     let data = await fetch(url);
  //     let parsedData = await data.json();
  //     this.setState({
  //       page: this.state.page + 1,
  //       articles: parsedData.articles,
  //       loading: false,
  //     });
  //   }
  // };

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=2614b254af8f4ac0854a0c767643a4b4&page=${this.state.page}&pageSize=${this.state.pageSize}&category=${this.props.category}`;
    {
      this.setState({ loading: true });
    }
    this.props.setProgress(10);
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=2614b254af8f4ac0854a0c767643a4b4&page=${this.state.page}&pageSize=${this.state.pageSize}&category=${this.props.category}`;

    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  };
  render() {
    return (
      <>
        <h1 className="text-center my-5" style={{ margin: "40px 0px" }}>
          "The News Nexus: Where Stories Converge" - Top Headlines
        </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length} //This is important field to render the next data
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-3" key={element.url}>
                    <NewsItems
                      title={element.title}
                      description={element.description}
                      imageurl={element.urlToImage}
                      newsurl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}
