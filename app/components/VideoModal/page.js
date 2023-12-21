import React, { useState, useEffect, useRef } from "react";
import ReactPlayer from 'react-player/youtube'

const VideoModal = ({ videoLink, play }) => {
    const [isModalOpen, setIsModalOpen] = useState(play);
    const [video, setVideo] = useState(null);

    const src = video;
    const videoRef = useRef();

    useEffect(() => {


        if (videoRef.current) {
            videoRef.current.src = src;
        }

        return () => {
            if (videoRef.current) {
                videoRef.current.src = "";
            }
        };
    }, [videoLink]);

    const handleOpen = () => {
        setIsModalOpen(true);
    };

    const handleClose = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="modal-video row"
            style={{ display: isModalOpen ? "flex" : "none" }}
        >

            <div
                className="modal"
                style={{
                    //display: isModalOpen ? "flex" : "none",
                    width: "820px",
                    height: "460px",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 1000,
                }}
            >
                <ReactPlayer
                    url={videoLink}
                    playing={isModalOpen}
                    width={820}
                    height={460}
                    style={{}}
                    controls
                />
                <img
                    src="/images/x-icon.png"
                    onClick={() => handleClose()}
                    width={35}
                    height={35}
                    style={{
                        position: "absolute",
                        margin: "0px 0px 0px 10px",
                        top: "0%",
                        right: "-6%"
                    }}
                />
            </div>

        </div>
    );
};

export default VideoModal;