import React, {Component} from 'react';
import {Jsme as JsmeReact} from 'jsme-react';
import {defaultProps, propTypes} from '../components/Jsme.react';

export default class Jsme extends Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }

    setSmiles(smiles) {
        const {setProps} = this.props;

        setProps({eventSmiles: smiles});
    }

    componentDidMount() {
        const POPUP_TIMEOUT = 500;

        this.ref.current.addEventListener('wheel', preventWheelAction(this.props.id));
        function preventWheelAction(div_name) {
            return function (event) {
                if(!event.target.matches("#" + div_name + " > div > div > div > div:nth-child(2) > svg > g > rect") &&
                    !event.target.matches("#" + div_name + " > div")) {
                    event.preventDefault();
                }
            };
        }

        document.addEventListener('mouseup', function() {
            endMovePopup();
            setTimeout(function() {
                const popupWindows = document.getElementsByClassName("mosaic-Caption dragdrop-handle");
                for (const window of popupWindows) {
                    const newWindow = window.cloneNode(false);
                    newWindow.classList.remove('dragdrop-handle');
                    newWindow.classList.add('dragdrop-handle-new');
                    newWindow.addEventListener('mousedown', startMovePopup);
                    while (window.hasChildNodes()) {
                        newWindow.appendChild(window.firstChild);
                    }
                    window.parentNode.replaceChild(newWindow, window);
                }
            }, POPUP_TIMEOUT)
        })

        function endMovePopup() {
            document.removeEventListener('mousemove', movePopup);
            const currentPopupWindow = document.getElementById("PopupDraggable");
            if(currentPopupWindow) {
                currentPopupWindow.removeAttribute('id');
                currentPopupWindow.removeAttribute('posX');
                currentPopupWindow.removeAttribute('posY');
            }
        }

        function startMovePopup(event) {
            event.preventDefault();
            const currentPopupWindow = event.target.closest(".gwt-DecoratedPopupPanel");
            if(currentPopupWindow) {
                currentPopupWindow.id = "PopupDraggable";
                currentPopupWindow.posX = event.clientX;
                currentPopupWindow.posY = event.clientY;

                document.addEventListener('mousemove', movePopup);
            }
        }

        function movePopup(event) {
            event.preventDefault();
            const currentPopupWindow = document.getElementById("PopupDraggable");
            if(currentPopupWindow) {
                currentPopupWindow.style.left = (
                    currentPopupWindow.offsetLeft - (currentPopupWindow.posX - event.clientX)) + "px";
                currentPopupWindow.style.top = (
                    currentPopupWindow.offsetTop - (currentPopupWindow.posY - event.clientY)) + "px";
                currentPopupWindow.posX = event.clientX;
                currentPopupWindow.posY = event.clientY;
            }
        }
    }

    render() {
        const {
            id,
            style,
            options,
            height,
            width,
            smiles,
        } = this.props;

        return (
            <div id={id} style={style} ref={this.ref}>
                <JsmeReact options={options}
                           height={height}
                           width={width}
                           smiles={smiles}
                           onChange={this.setSmiles.bind(this)}/>
            </div>
        );
    }
}

Jsme.defaultProps = defaultProps;
Jsme.propTypes = propTypes;
