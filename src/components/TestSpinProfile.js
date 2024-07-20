import React, { Component } from 'react'

import spin from '../image/spin-img.png'
import vel8 from '../image/img_78.png'
import top12 from '../image/img_79.png'
import mecht from '../image/img_77.png'
import big8 from '../image/img_76.png'
import prem from '../image/img_75.png'
import m4x4 from '../image/img_74.png'
import m5x37 from '../image/img_72.png'
import fors from '../image/img_73.png'
import spinmain from "../image/spin-main.png";

class TestForSpin extends React.Component {
    state = {
        availableTickets: 3, // Изначально у пользователя нет билетов
        list: [
            top12,
            mecht,
            big8,
            prem,
            m4x4,
            m5x37,
            fors,
            vel8,
        ],
        // list: ["$100", "$500", "$9,999", "$1", "$60", "$1,000", "$4.44"],
        // list: ["$100","$500","$9,999","$1","$60"],
        radius: 75, // PIXELS
        rotate: 0, // DEGREES
        easeOut: 0, // SECONDS
        angle: 0, // RADIANS
        top: null, // INDEX
        offset: null, // RADIANS
        net: null, // RADIANS
        result: null, // INDEX
        spinning: false
    };

    componentDidMount() {
        // generate canvas wheel on load
        this.renderWheel();
    }
    componentWillUnmount() {
        clearInterval(this.autoSpinInterval); // Очистить интервал перед размонтированием компонента
    }
    autoSpin = () => {
        if (!this.state.spinning) { // если вращение уже не происходит
            this.spin();
        }
    }

    renderWheel() {
        let numOptions = this.state.list.length;
        let arcSize = (2 * Math.PI) / numOptions;
        this.setState({
            angle: arcSize
        });

        this.topPosition(numOptions, arcSize);

        let angle = 0;
        for (let i = 0; i < numOptions; i++) {
            let imageUrl = this.state.list[i]; // Получаем URL-адрес изображения из вашего списка
            this.renderSector(i + 1, imageUrl, angle, arcSize, this.getColor(i));
            angle += arcSize;
        }
    }

    topPosition = (num, angle) => {
        // set starting index and angle offset based on list length
        // works upto 9 options
        let topSpot = null;
        let degreesOff = null;
        if (num === 9) {
            topSpot = 7;
            degreesOff = Math.PI / 2 - angle * 2;
        } else if (num === 8) {
            topSpot = 6;
            degreesOff = 0;
        } else if (num <= 7 && num > 4) {
            topSpot = num - 1;
            degreesOff = Math.PI / 2 - angle;
        } else if (num === 4) {
            topSpot = num - 1;
            degreesOff = 0;
        } else if (num <= 3) {
            topSpot = num;
            degreesOff = Math.PI / 2;
        }

        this.setState({
            top: topSpot - 1,
            offset: degreesOff
        });
    };

    renderSector(index, image, start, arc, color) {
        let canvas = document.getElementById("wheel-profile");
        let ctx = canvas.getContext("2d");

        let borderColor = "black";  // Default border color
        let borderWidth = 4; // Default border width
        let hubRadius = 10;  // Adjust the hub radius as needed

        switch (color) {
            case "fors":
                borderColor = "#7642d0";
                borderWidth = 55;

                let img1 = new Image();
                img1.src = image;
                img1.onload = function() {
                    ctx.save(); // Save the current state of the context
                    ctx.translate(x, y); // Move the origin to the point where the image will be drawn
                    ctx.rotate(Math.PI / 100 * -6); // Rotate the context by a small angle (-4 degrees in this example)
                    let percentageWidth = 110; // Percentage of the canvas width
                    let percentageHeight = 135; // Percentage of the canvas height
                    let width = canvas.width * (percentageWidth / 770); // Calculate the width based on a percentage of the canvas width
                    let height = canvas.height * (percentageHeight / 770); // Calculate the height based on a percentage of the canvas height
                    ctx.drawImage(img1, - -13, -120, width, height); // Draw the image with the calculated size and offset
                    ctx.restore(); // Restore the saved state
                };
                break;
            case "vel8":
                borderColor = "#019221";
                borderWidth = 55;
                let img2 = new Image();
                img2.src = image;
                img2.onload = function() {
                    ctx.drawImage(img2, x - -35, y - 55, 100, 50);
                };

                break;
            case "top12":
                borderColor = "#70c8eb";
                borderWidth = 55;
                let img3 = new Image();
                img3.src = image;
                img3.onload = function() {
                    ctx.drawImage(img3, x - -45, y - -10, 80, 55);
                };
                break;
            case "mecht":
                borderColor = "#0059a7";
                borderWidth = 55;
                let img4 = new Image();
                img4.src = image;
                img4.onload = function() {
                    ctx.save(); // Save the current state of the context
                    ctx.translate(x, y); // Move the origin to the point where the image will be drawn
                    ctx.rotate(Math.PI / 100 * 2); // Rotate the context by a small angle (-4 degrees in this example)
                    let percentageWidth = 110; // Percentage of the canvas width
                    let percentageHeight = 135; // Percentage of the canvas height
                    let width = canvas.width * (percentageWidth / 770); // Calculate the width based on a percentage of the canvas width
                    let height = canvas.height * (percentageHeight / 770); // Calculate the height based on a percentage of the canvas height
                    ctx.drawImage(img4, - -10, - -40, width, height); // Draw the image with the calculated size and offset
                    ctx.restore(); // Restore the saved state
                };
                break;
            case "big8":
                borderColor = "#fcb600";
                borderWidth = 55;
                let img5 = new Image();
                img5.src = image;
                img5.onload = function() {
                    ctx.save(); // Save the current state of the context
                    ctx.translate(x, y); // Move the origin to the point where the image will be drawn
                    ctx.rotate(Math.PI / 100 * -2); // Rotate the context by a small angle (-4 degrees in this example)
                    let percentageWidth = 150; // Percentage of the canvas width
                    let percentageHeight = 135; // Percentage of the canvas height
                    let width = canvas.width * (percentageWidth / 770); // Calculate the width based on a percentage of the canvas width
                    let height = canvas.height * (percentageHeight / 770); // Calculate the height based on a percentage of the canvas height
                    ctx.drawImage(img5, - 93, - -35, width, height); // Draw the image with the calculated size and offset
                    ctx.restore(); // Restore the saved state
                };
                break;
            case "prem":
                borderColor = "#5e67fd";
                borderWidth = 55;
                let img6 = new Image();
                img6.src = image;
                img6.onload = function() {
                    ctx.save(); // Save the current state of the context
                    ctx.translate(x, y); // Move the origin to the point where the image will be drawn
                    ctx.rotate(Math.PI / 100 * 5); // Rotate the context by a small angle (-4 degrees in this example)
                    let percentageWidth = 150; // Percentage of the canvas width
                    let percentageHeight = 100; // Percentage of the canvas height
                    let width = canvas.width * (percentageWidth / 770); // Calculate the width based on a percentage of the canvas width
                    let height = canvas.height * (percentageHeight / 770); // Calculate the height based on a percentage of the canvas height
                    ctx.drawImage(img6, - 130, - -15, width, height); // Draw the image with the calculated size and offset
                    ctx.restore(); // Restore the saved state
                };
                break;

            case "m4x4":
                borderColor = "#00e0d6";
                borderWidth = 55;
                let img7 = new Image();
                img7.src = image;
                img7.onload = function() {
                    ctx.save(); // Save the current state of the context
                    ctx.translate(x, y); // Move the origin to the point where the image will be drawn
                    ctx.rotate(Math.PI / 100 * 5); // Rotate the context by a small angle (-4 degrees in this example)
                    let percentageWidth = 120; // Percentage of the canvas width
                    let percentageHeight = 60; // Percentage of the canvas height
                    let width = canvas.width * (percentageWidth / 770); // Calculate the width based on a percentage of the canvas width
                    let height = canvas.height * (percentageHeight / 770); // Calculate the height based on a percentage of the canvas height
                    ctx.drawImage(img7, - 130, - 40, width, height); // Draw the image with the calculated size and offset
                    ctx.restore(); // Restore the saved state
                };
                break;
            case "m5x37":
                borderColor = "#5e67fd";
                borderWidth = 55;
                let img8 = new Image();
                img8.src = image;
                img8.onload = function() {
                    ctx.save(); // Save the current state of the context
                    ctx.translate(x, y); // Move the origin to the point where the image will be drawn
                    ctx.rotate(Math.PI / 100 * -1); // Rotate the context by a small angle (-4 degrees in this example)
                    let percentageWidth = 24; // Percentage of the canvas width
                    let percentageHeight = 23; // Percentage of the canvas height
                    let width = canvas.width * (percentageWidth / 200); // Calculate the width based on a percentage of the canvas width
                    let height = canvas.height * (percentageHeight / 200); // Calculate the height based on a percentage of the canvas height
                    ctx.drawImage(img8, - 62, - 115, width, height); // Draw the image with the calculated size and offset
                    ctx.restore(); // Restore the saved state
                };
                break;
            default:
                break;
        }

        let x = canvas.width / 2;
        let y = canvas.height / 2;
        let radius = this.state.radius;
        let startAngle = start;
        let endAngle = start + arc;

        ctx.beginPath();
        ctx.arc(x, y, radius, startAngle, endAngle, false);
        ctx.strokeStyle = borderColor;
        ctx.lineWidth = radius * 2;
        ctx.stroke();

        let angle = index * arc;
        let baseSize = radius * 3.32;
        let imageRadius = baseSize - 150;

        let img = new Image();
        img.src = image;
        img.width = 0; // фиксированная ширина
        img.height = 0; // фиксированная высота
        img.onload = function() {
            let aspectRatio = img.height / img.width;
            let newHeight = img.width * aspectRatio;

            ctx.save();
            ctx.translate(baseSize + Math.cos(angle - arc / 2) * imageRadius, baseSize + Math.sin(angle - arc / 2) * imageRadius);
            ctx.rotate(angle - arc / 2 + Math.PI / 1);

            // Поворот изображения на 180 градусов
            ctx.rotate(Math.PI);

            ctx.drawImage(img, -img.width / 2, -newHeight / 2, img.width, newHeight);
            ctx.restore();
        };
    }

    getColor = (index) => {
        switch(this.state.list[index]){
            case fors:
                return "fors"; // синий
            case vel8:
                return "vel8"; // красный
            case top12:
                return "top12"; // желтый
            case mecht:
                return "mecht"; // зеленый
            case big8:
                return "big8"; // зеленый
            case prem:
                return "prem"; // зеленый
            case m4x4:
                return "m4x4"; // зеленый
            case m5x37:
                return "m5x37"; // зеленый
            case "9":
                return "9"; // зеленый



            default:
                return "rgba(0,0,0)"; // цвет по умолчанию
        }
    }

    spin = () => {
        if (!this.state.spinning && this.state.availableTickets >= 3) {
            let randomSpin = Math.floor(Math.random() * 900) + 500;
            this.setState({
                rotate: randomSpin,
                easeOut: 2,
                spinning: true
            });
            return;
        }
        let randomSpin = Math.floor(Math.random() * 900) + 500;
        this.setState({
            rotate: randomSpin,
            easeOut: 2,
            spinning: true
        });

        // calcalute result after wheel stops spinning
        setTimeout(() => {
            this.getResult(randomSpin);
        }, 2000);
    };

    getResult = spin => {
        const { angle, top, offset, list } = this.state;
        let netRotation = ((spin % 360) * Math.PI) / 180; // RADIANS
        let travel = netRotation + offset;
        let count = top + 1;
        // this.setState(prevState => ({
        //     availableTickets: prevState.availableTickets - 3
        // }));
        while (travel > 0) {
            travel = travel - angle;
            count--;
        }
        let result;
        if (count >= 0) {
            result = count;
        } else {
            result = list.length + count;
        }

        // set state variable to display result
        this.setState({
            net: netRotation,
            result: result
        });
    };

    reset = () => {
        // reset wheel and result
        this.setState({
            rotate: 0,
            easeOut: 0,
            result: null,
            spinning: false
        });
    };
    render() {
        return (
            <div className="Appspin">
                <div className={'selectorspin-container'}>
                    <span id="selectorspintest">&#9660;</span>
                </div>
                <div className={'wheel-center-container-profile'}>
                    <span id="wheel-center-test"></span>
                    <span id="wheel-center-2-test"></span>
                    <span id="wheel-center-3-test"></span>
                    <span id="wheel-center-4-test"></span>
                </div>
                <img className={'users-logo-spin spin-test'} src={spin}/>
                {/*<img className={'users-logo-spin spin-main-profile rotating-img'} id={'wheel-test-spin-1'} src={spinmain}*/}
                {/*     alt="Rotating Image"/>*/}
                <canvas
                    id="wheel-profile"
                    width="500"
                    height="500"
                    style={{
                        WebkitTransform: `rotate(${this.state.rotate}deg)`,
                        WebkitTransition: `-webkit-transform ${
                            this.state.easeOut
                        }s ease-out`
                    }}
                />

                {this.state.spinning ? (
                    <button type="button" id="reset" onClick={this.reset}>
                        reset
                    </button>
                ) : (
                    <button type="button" id="spin" onClick={this.spin}>
                        spin
                    </button>
                )}
                <div className="displayspin">
          <span id="readout">
              <span id="result">{this.state.list[this.state.result]}</span>
          </span>
                </div>
            </div>
        );
    }
}

export default TestForSpin;