import React from 'react'
import './HomeSection.css';
import Fade from 'react-reveal/Fade';

function HomeSection(props) {
    return (
        <div style={{ backgroundImage: `url(/images/${props.img})` }} className="wrap">
            <Fade bottom>
                <div className="item-text">
                    <h1 className="car-name">{props.title}</h1>
                    <p className="car-del">{props.desc}</p>
                </div>
            </Fade>
            <div className="sec-bottom">
                <Fade bottom>
                    <div className="btn-group">
                        <div className="left-btn btn">
                            {props.leftBtnText}
                        </div>
                        {
                            props.rightBtnText &&
                            <div className="right-btn btn">
                                {props.rightBtnText}
                            </div>
                        }
                    </div>
                </Fade>
                {
                    props.isDownArrow ?
                        <img className="down-arrow" src="/images/down-arrow.svg" /> :
                        <img className="down-arrow1" src="" />
                }
            </div>
        </div>
    )
}

export default HomeSection
