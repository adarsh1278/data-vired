 'use client'
import { toggleModaClose } from "../../redux/features/videoModalSlice";
 
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const VideoModal = () => {
  const dispatch = useAppDispatch();
  const showVideoModal = useAppSelector(
    (state) => state.videoModal.isModalOpen
  );
  const closeModal = () => {
    dispatch(toggleModaClose());
  };
  const videoUrl =
    "https://www.youtube.com/embed/0M1C9yEzplI?si=Z3EwaFEt9ugA_2XS";

  return (
    <>
      <div
        className={`rv-modal-overlay ${showVideoModal ? "active" : ""}`}
        role="button"
        onClick={closeModal}
      ></div>
      <div
        className={`rv-modal-container video-modal-container ${
          showVideoModal ? "active" : ""
        }`}
      >
        <div className="rv-modal-body">
          <iframe
            src={videoUrl}
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default VideoModal;
