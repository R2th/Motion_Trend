import { useEffect, useRef } from "react";
import Images from "../../Constants/Images";
import Arrows from "../Arrows";
import Button from "../Button";
import Comments from "../Comments";
import InfoMovie from "../Common/InfoMovie";
import Title from "../Common/Title";
import MovieList from "../MovieList";
import Owner from "../Owner";
import "./index.scss";

const Modal = (props) => {
  const { title, background_image, movies, firstEl, moviesList } = props;

  const slideRight = () => {
    const slider = document.getElementById("slider");

    slider.scrollLeft += 500;
  };

  function useHorizontalScroll() {
    const elRef = useRef(null);

    useEffect(() => {
      const el = elRef.current;

      if (el) {
        const onWheel = (e) => {
          if (e.deltaY === 0) return;
          e.preventDefault();
          el.scrollTo({
            left: el.scrollLeft + e.deltaY,
            behavior: "smooth",
          });
        };

        el.addEventListener("wheel", onWheel);
        return () => el.removeEventListener("wheel", onWheel);
      }
    }, []);

    return elRef;
  }

  const scrollRef = useHorizontalScroll();

  return (
    <div className="modal__inner">
      <div className="labels-sale">
        {firstEl && (
          <img className="tz-label" src={Images.LABEL_TZ} alt="tz-label" />
        )}
        <img src={Images.IC_HR} alt="hr" />
      </div>
      <div className="container">
        <div className="modal__inner-header">
          <div className="avatar">
            <img src={Images.PROFILE} alt="avatar" />
          </div>
          <div className="info-movie">
            <div className="info-movie__title">
              <Title title={title} />
            </div>
            <div className="info-movie__sub-title">
              <p>Kim Aeyong</p>
              <p>Design, Music Video, Advertising</p>
            </div>
            <div className="info-movie__buttons">
              <div className="info-movie__buttons-feeling">
                <Button icon={Images.IC_LIKE} content="Like" type="white" />
                <Button icon={Images.IC_FOLLOWER_WHITE} content="follow" />
                <Button icon={Images.IC_ADD} content="Add" />
              </div>
              <div className="info-movie__buttons-edit">
                <Button content="Edit project" type="white" />
              </div>
            </div>
          </div>
        </div>
        <div className="modal__inner-video">
          <img src={background_image} alt="" />
          <img className="btn-play" src={Images.BUTTON_PLAY} alt="" />
        </div>
        <div className="modal__inner-desc">
          <p>
            Hello. I ???m Kim Aeyong. This is my first portfolio movement. Thank
            you very much. Hello. I ???m Kim Aeyong. This is my first portfolio
            movement. Thank you very much. Hello. I ???m Kim Aeyong. This is my
            first portfolio movement. Thank you very much. Hello. I ???m Kim
            Aeyong. This is my first portfolio movement. Thank you very much.
          </p>
          <div className="modal__inner-desc--images">
            <img src={Images.VIDEO_THUMB} alt="" />
            <img src={Images.IMG_DESC_1} alt="" />
            <img src={Images.IMG_DESC_2} alt="" />
          </div>
        </div>
        <div className="modal__inner-infoMovie">
          <InfoMovie title={title} />
          <div className="modal__inner-infoMovie__buttons">
            <Button content="Like" icon={Images.IC_LIKE} type="white" />
            <Button content="Add" icon={Images.IC_ADD} />
          </div>
        </div>
      </div>
      <div className="modal__inner-slider">
        <div className="container">
          <div className="modal__inner-slider__owner">
            <img src={Images.PROFILE_BIG} alt="owner" />
            <p>Kim Aeyong</p>
          </div>
          <div
            id="slider"
            ref={scrollRef}
            className="modal__inner-slider__horizontal"
            style={{ overflowX: "scroll" }}
          >
            {movies?.map((item) => (
              <MovieList
                moviesList={moviesList}
                movies={movies}
                id={item.id}
                title="Kim Aeyong"
                background_image={item.background_image}
              />
            ))}
            {moviesList?.map((item) => (
              <MovieList
                moviesList={moviesList}
                movies={movies}
                id={item.id}
                title="Kim Aeyong"
                background_image={item.background_image}
              />
            ))}
          </div>
          <Arrows onClick={slideRight} />
        </div>
      </div>
      <div className="modal__inner-comments">
        <div className="container">
          <div className="comment-inner">
            <Comments />
          </div>
          <div className="owner-inner">
            <Owner />
          </div>
        </div>
      </div>
      <div className="buttons">
        <Button content="page" icon={Images.IC_BACK} type="white square" />
        <Button
          content="Like"
          icon={Images.IC_LIKE_BLACK}
          type="white square"
        />
        <Button content="Add" icon={Images.IC_ADD} type="white square" />
        <Button content="share" icon={Images.IC_SHARE} type="white square" />
      </div>
      <Arrows prev={Images.PREV_BTN} next={Images.NEXT_BTN} />
    </div>
  );
};

export default Modal;
