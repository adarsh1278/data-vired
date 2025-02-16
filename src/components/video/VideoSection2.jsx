'use client'
import { useDispatch, useSelector } from "react-redux";
import { toggleModalOpen } from "../../redux/features/videoModalSlice";
// import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import VideoModal from "../modal/VideoModal";

const VideoSection2 = () => {
  const dispatch = useDispatch();
  const openModal = useSelector((state) => state.videoModal.isModalOpen);

  const handleVideoClick = (e) => {
    e.preventDefault();
    dispatch(toggleModalOpen());
  };

  return (
    <>
      <section
        className="vid_area va2"
        style={{
          backgroundImage: "url(/assets/img/bg/video.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
        aria-label="Video Section"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 vp_top">
              <div className="video-area2">
                <button
                  className="magnific_popup video-button"
                  onClick={handleVideoClick}
                  aria-label="Play Video"
                  type="button"
                >
                  <i className="fa fa-play" aria-hidden="true" />
                  <span className="sr-only">Play Video</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {openModal && <VideoModal />}
    </>
  );
};

export default VideoSection2;