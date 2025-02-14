 'use client'
import { toggleModalOpen } from "../../redux/features/videoModalSlice";
 
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
 
import VideoModal from "../modal/VideoModal";

const VideoSection2 = () => {
  const dispatch = useAppDispatch();
  const openModal = useAppSelector((state) => state.videoModal.isModalOpen);
  const toggleOpen = () => {
    dispatch(toggleModalOpen());
  };
  return (
    <>
      <section
        className="vid_area va2"
        style={{
          backgroundImage: "url(assets/img/bg/video.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 vp_top">
              <div className="video-area2">
                <a
                  className="magnific_popup video-button"
                  role="button"
                  onClick={toggleOpen}
                >
                  <i className="fa fa-play"></i>
                </a>
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
