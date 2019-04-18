import React, { Component } from 'react';
import '../css/App.css';
import { connect } from 'react-redux';
import { fetchData } from '../actions/actions';
import { bindActionCreators } from 'redux';
import loading_icon from '../assets/loader.svg';
import rupeek_logo from '../assets/logo.svg';

const mapStateToProps = (State) => {
    return {
        loading: State.fetch.fetching,
        data: State.fetch.data
    }
}

const mapDispatchToProps = (Dispatch) => {
    return {
        ...bindActionCreators({ fetchData }, Dispatch)
    }
}
class App extends Component {
    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        if (this.props.loading) {
            return (<img className="loading_image" src={loading_icon} alt="Loading" />)
        }
        const product = this.props.data.map((product, key) => {
            let rating;
            if (product.rating == "5") {
                rating = (<div className="product-rating">
                            <i className="fas fa-star full_star"></i>
                            <i className="fas fa-star full_star"></i>
                            <i className="fas fa-star full_star"></i>
                            <i className="fas fa-star full_star"></i>
                            <i className="fas fa-star full_star"></i>
                        </div>)
            }
            if (product.rating == "4.5") {
                rating = (<div className="product-rating">
                            <i className="fas fa-star full_star"></i>
                            <i className="fas fa-star full_star"></i>
                            <i className="fas fa-star full_star"></i>
                            <i className="fas fa-star full_star"></i>
                            <i className="fas fa-star-half-alt half_star"></i>
                        </div>)
            }
            if (product.rating == "4.0") {
                rating = (<div className="product-rating">
                            <i className="fas fa-star full_star"></i>
                            <i className="fas fa-star full_star"></i>
                            <i className="fas fa-star full_star"></i>
                            <i className="fas fa-star full_star"></i>
                            <i className="fas fa-star empty_star"></i>
                        </div>)
            }
            if (product.rating == "3.5") {
                rating = (<div className="product-rating">
                            <i className="fas fa-star full_star"></i>
                            <i className="fas fa-star full_star"></i>
                            <i className="fas fa-star full_star"></i>
                            <i className="fas fa-star-half-alt half_star"></i>
                            <i className="fas fa-star empty_star"></i>
                        </div>)
            }
            if (product.rating == "3.0") {
                rating = (<div className="product-rating">
                            <i className="fas fa-star full_star"></i>
                            <i className="fas fa-star full_star"></i>
                            <i className="fas fa-star full_star"></i>
                            <i className="fas fa-star empty_star"></i>
                            <i className="fas fa-star empty_star"></i>
                        </div>)
            }
            if (product.rating == "2.5") {
                rating = (<div className="product-rating">
                            <i className="fas fa-star full_star"></i>
                            <i className="fas fa-star full_star"></i>
                            <i className="fas fa-star-half-alt half_star"></i>
                            <i className="fas fa-star empty_star"></i>
                            <i className="fas fa-star empty_star"></i>
                        </div>)
            }
            if (product.rating == "2") {
                rating = (<div className="product-rating">
                            <i className="fas fa-star full_star"></i>
                            <i className="fas fa-star full_star"></i>
                            <i className="fas fa-star empty_star"></i>
                            <i className="fas fa-star empty_star"></i>
                            <i className="fas fa-star empty_star"></i>
                        </div>)
            }
            if (product.rating == "1.5") {
                rating = (<div className="product-rating">
                            <i className="fas fa-star full_star"></i>
                            <i className="fas fa-star-half-alt half_star"></i>
                            <i className="fas fa-star empty_star"></i>
                            <i className="fas fa-star empty_star"></i>
                            <i className="fas fa-star empty_star"></i>
                        </div>)
            }
            if (product.rating == "1") {
                rating = (<div className="product-rating">
                            <i className="fas fa-star full_star"></i>
                            <i className="fas fa-star empty_star"></i>
                            <i className="fas fa-star empty_star"></i>
                            <i className="fas fa-star empty_star"></i>
                            <i className="fas fa-star empty_star"></i>
                        </div>)
            }
            if (product.rating == "0.5") {
                rating = (<div className="product-rating">
                            <i className="fas fa-star-half-alt half_star"></i>
                            <i className="fas fa-star empty_star"></i>
                            <i className="fas fa-star empty_star"></i>
                            <i className="fas fa-star empty_star"></i>
                            <i className="fas fa-star empty_star"></i>
                        </div>)
            }
            if (product.rating == "0") {
                rating = (<div className="product-rating">
                            <i className="fas fa-star empty_star"></i>
                            <i className="fas fa-star empty_star"></i>
                            <i className="fas fa-star empty_star"></i>
                            <i className="fas fa-star empty_star"></i>
                            <i className="fas fa-star empty_star"></i>
                        </div>)
            }
            return (
                <div className="outer-product-box" key={key}>
                    <div className="inner-product-box">
                        <div className="product-image">
                            <img src={product.image} alt={product.name} title={product.name} />
                        </div>
                        <div className="product-title">{product.name}</div>
                        <div className="product-middle-content">
                            <span className="product-price">Rs.&nbsp;{product.orginalPrice}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                            <span className="discount-price">Rs.&nbsp;{product.orginalPrice-(product.orginalPrice*product.discountPercentage/100)}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                            <span className="discount-percentage">{product.discountPercentage || 0}%&nbsp;Off</span>
                        </div>
                        
                            {rating}
                        
                    </div>
                </div>
            )

        })
        return (
        <div className="main-container">
        <header>
            <div className="logo"><img src={rupeek_logo} alt="Repeek" title="Rupeek" /></div>
        </header>
            <div className="product-container"> 
          {product}
          </div>
        </div>
            
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);