import View from './View';
import bookSearchImg from 'url:../../img/book-search.png';
import planSectionImg from 'url:../../img/plan-section.png';
import homeCreatePlansImg from 'url:../../img/home_create-plans.jpg';
import homeSavePlansImg from 'url:../../img/home_save-plans.jpg';
import homeSharePlansImg from 'url:../../img/home_share-plans.jpg';
import homeSearchVideo from 'url:../../video/home_search-vid.mp4';
import sprite from 'url:../../img/sprite.svg';

class HomeView extends View {
  _parentElement = document.querySelector('.container');

  _generateMarkup() {
    return `
          <section class="hero">
        <div class="hero__cta-container">
          <div class="hero__cta-container__text">
            <h1 class="heading-1--white mb-sm">
              explore books, plan your reading journey
            </h1>
            <h4 class="heading-4--white">
              discover, organize, and share a world of stories
            </h4>
          </div>
          <div class="hero__cta-container__btns">
            <button class="btn-primary--complement">Plan Recommendation</button>
            <button class="btn-primary--complement">Find Books</button>
          </div>
        </div>
        <div class="hero__img-container">
          <figure class="hero__img-container__fig--1">
            <img
              class="hero__img-container__img--1"
              src="${bookSearchImg}"
              alt="book-search"
            />
          </figure>
          <figure class="hero__img-container__fig--2">
            <img
              class="hero__img-container__img--2"
              src="${planSectionImg}"
              alt="plan-section"
            />
          </figure>
        </div>
      </section>

      <section class="section-plan">
        <h1 class="section-plan__heading heading-2--white mb-hg">
          Create Your Recommendation Plans
        </h1>
        <div class="section-plan__container">
          <div class="section-plan__plan-info-container">
            <div class="section-plan__plan-info-container__text">
              <h4 class="heading-4 mb-sm">Create Your Own Collection</h4>
              <p class="paragraph-big">
                Browse through our vast collection of a variety of books and
                handpick them for your personalized recommendation plans.
              </p>
            </div>
            <div class="section-plan__plan-info-container__img">
              <img src="${homeCreatePlansImg}" alt="create-plans" />
            </div>
          </div>
          <div class="section-plan__plan-info-container">
            <div class="section-plan__plan-info-container__img">
              <img src="${homeSavePlansImg}" alt="create-plans" />
            </div>
            <div class="section-plan__plan-info-container__text">
              <h4 class="heading-4 mb-sm">Save Your Plans</h4>
              <p class="paragraph-big">
                Bookmark your recommendation plans to access them in future.
                Once you bookmark a plan, it will be available under a separate
                tab in the bookmarks section.
              </p>
            </div>
          </div>
          <div class="section-plan__plan-info-container">
            <div class="section-plan__plan-info-container__text">
              <h4 class="heading-4 mb-sm">Share With Your Friends</h4>
              <p class="paragraph-big">
                You can use our share feature to share your recommendation plans
                with your peers. You get a unique URL for each of your
                recommendation plan that you can share with anyone!
              </p>
            </div>
            <div class="section-plan__plan-info-container__img">
              <img src="${homeSharePlansImg} " alt="create-plans" />
            </div>
          </div>
          <button class="btn-primary section-plan__btn">
            Plan Recommendation
          </button>
        </div>
      </section>

      <section class="section-find">
        <h2 class="section-find__heading heading-2 mb-hg">
          Find the best books for you
        </h2>
        <div class="section-find__container">
          <div class="section-find__search-info-container">
            <div class="section-find__search-info-container__vid">
              <video autoplay loop muted>
                <source
                  src="${homeSearchVideo} "
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div class="section-find__search-info-container__text">
              <div class="section-find__search-info-container__text__icon-box">
                <svg
                  class="section-find__search-info-container__text__icon-box__icon"
                >
                  <use
                    xlink:href="${sprite}#icon-magnifying-glass"
                  ></use>
                </svg>
                <p
                  class="section-find__search-info-container__text__icon-box__text paragraph"
                >
                  Search from a variety of books
                </p>
              </div>
              <div class="section-find__search-info-container__text__icon-box">
                <svg
                  class="section-find__search-info-container__text__icon-box__icon"
                >
                  <use xlink:href="${sprite}#icon-funnel"></use>
                </svg>
                <p
                  class="section-find__search-info-container__text__icon-box__text paragraph"
                >
                  Various filters for a quick search
                </p>
              </div>
              <div class="section-find__search-info-container__text__icon-box">
                <svg
                  class="section-find__search-info-container__text__icon-box__icon"
                >
                  <use xlink:href="${sprite}#icon-bookmark"></use>
                </svg>
                <p
                  class="section-find__search-info-container__text__icon-box__text paragraph"
                >
                  Bookmark your favourite books
                </p>
              </div>
              <div class="section-find__search-info-container__text__icon-box">
                <svg
                  class="section-find__search-info-container__text__icon-box__icon"
                >
                  <use xlink:href="${sprite}#icon-share"></use>
                </svg>
                <p
                  class="section-find__search-info-container__text__icon-box__text"
                >
                  Share with your friends
                </p>
              </div>
            </div>
          </div>
          <button class="section-find__btn btn-primary">Find Books</button>
        </div>
      </section>
    `;
  }
}

export default new HomeView();