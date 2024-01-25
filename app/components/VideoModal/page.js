'use client';
import React, { useState, useEffect, useRef } from "react";
import ReactPlayer from 'react-player/youtube'
import Image from "next/image";
import '../../styles/card.css'

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
                className=" modal-video-body"
            >
                <ReactPlayer
                    url={videoLink}
                    playing={isModalOpen}
                    width="100%"
                    height="100%"
                    style={{}}
                    controls
                    className="video"
                />
                <Image
                    src="/images/x-icon.png"
                    onClick={() => handleClose()}
                    width={35}
                    height={35}
                    style={{
                        position: "absolute",
                        margin: "0px 0px 0px 10px",
                        top: "0%",
                        right: "0%"
                    }}
                />
            </div>

        </div>
    );
};

export default VideoModal;