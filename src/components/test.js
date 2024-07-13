import React, { Component } from 'react'

import spin from '../image/spin-img.png'

class Test extends React.Component {
    state = {
        availableTickets: 3, // Изначально у пользователя нет билетов
        list: [
            "Форсаж 75",
            "Великолепная 8",
            "Топ 12",
            "Мечталион",
            "Большая 8",
            "Премьер",
            "4х4",
            "5из37"
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
        this.autoSpinInterval = setInterval(this.spin, 5000); // каждые 5 секунд
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
            let text = this.state.list[i];
            this.renderSector(i + 1, text, angle, arcSize, this.getColor(i));
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

    renderSector(index, text, start, arc, color) {
        let canvas = document.getElementById("wheel");
        let ctx = canvas.getContext("2d");

        let borderColor = "black";  // Default border color
        let borderWidth = 4; // Default border width
        let hubRadius = 10;  // Adjust the hub radius as needed

        switch (color) {
            case "blue":
                borderColor = "blue";
                borderWidth = 55;
                break;
            case "red":
                borderColor = "red";
                borderWidth = 55;
                break;
            case "yellow":
                borderColor = "yellow";
                borderWidth = 55;
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
        let textRadius = baseSize - 150;

        ctx.save();
        ctx.translate(
            baseSize + Math.cos(angle - arc / 2) * textRadius,
            baseSize + Math.sin(angle - arc / 2) * textRadius
        );
        ctx.rotate(angle - arc / 2 + Math.PI / 2);
        ctx.font = "17px Arial";
        ctx.fillStyle = "black";
        ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
        ctx.restore();
    }

    getColor = (index) => {
        switch(this.state.list[index]){
            case "Форсаж 75":
                return "blue"; // синий
            case "Великолепная 8":
                return "red"; // красный
            case "Топ 12":
                return "yellow"; // желтый
            case "Мечталион":
                return "blue"; // зеленый
            case "Большая 8":
                return "red"; // зеленый
            case "Премьер":
                return "yellow"; // зеленый
            case "4х4":
                return "blue"; // зеленый
            case "5из37":
                return "red"; // зеленый
            case "9":
                return "yellow"; // зеленый



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
        // find net rotation and add to offset angle
        // repeat substraction of inner angle amount from total distance traversed
        // use count as an index to find value of result from state list
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
                    <span id="selectorspin">&#9660;</span>
                </div>
                <div className={'wheel-center-container'}>
                    <span id="wheel-center"></span>
                    <span id="wheel-center-2"></span>
                    <span id="wheel-center-3"></span>
                    <span id="wheel-center-4"></span>
                </div>
                <img className={'users-logo-spin'} src={spin}/>
                <canvas
                    id="wheel"
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

export default Test;