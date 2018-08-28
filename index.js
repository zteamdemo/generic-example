import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Swiper from 'react-id-swiper';
import CatImageLink from '../CatImageLink';

export default class Slider extends PureComponent {
  render() {
    const params = {
      slidesPerView: 'auto',
      spaceBetween: 20,
      rebuildOnUpdate: true,
      navigation: {
        nextEl: '.swiper-button.swiper-button-next',
        prevEl: '.swiper-button.swiper-button-prev',
      },
    };
    const keys = Object.keys(this.props.beautyCategories);
    return (
      <div className="container">
        <div className="title homepage-title">
          <h2>{this.props.title}</h2>
          <p>{this.props.subtitle}</p>
        </div>
        <div className="swipper_block">
          <Swiper {...params}>
            {keys.map(el => (
              <div>
                <CatImageLink
                  src={this.props.beautyCategories[el].media}
                  href={this.props.beautyCategories[el].href}
                  title={this.props.beautyCategories[el].type}
                  photoCount={this.props.beautyCategories[el].photoCount}
                />
              </div>
            ))}
          </Swiper>
        </div>
      </div>
    );
  }
}
Slider.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  beautyCategories: PropTypes.shape({
    media: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    photoCount: PropTypes.number.isRequired,
  }).isRequired,
};
