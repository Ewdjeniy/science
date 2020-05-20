import React from 'react';
import ReactDOM from 'react-dom';

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            sizes: {
                0: '1fr', 
                1: '0.5rem', 
                2: '1fr', 
                3: '0.5rem', 
                4: '1fr', 
                5: '0.5rem', 
                6: '1fr', 
                7: '0.5rem', 
                8: '1fr', 
                9: '0.5rem', 
                10: '1fr', 
                11: '0.5rem', 
                12: '1fr', 
                13: '0.5rem', 
                14: '1fr'
            },
        }
    }
    
    onChangeWidth(i) {
        const that = this.state;
        let left = parseFloat(getComputedStyle(document.body).paddingLeft);
        const viewportWidth = document.documentElement.clientWidth - 0.5 * 7 * parseFloat(getComputedStyle(document.documentElement).fontSize) - 2 * left;
        const frInPx = viewportWidth / 8;
        const oneProcentFr = frInPx / 100;
        
        for (let j = 0; j < i; j += 2) {
            left += parseFloat(this.state.sizes[j]) * 100 * oneProcentFr;
        }
        
        const watchMouse = function() {
            const numberToRound = (event.clientX - left) / 100 / oneProcentFr;
            that.sizes[i] = Math.round(numberToRound * 10) / 10 + 'fr';
            let result = '';
            for (let key in that.sizes) {
                result += that.sizes[key] + ' ';
            }
            columnsWidth.innerHTML = '.tr {grid-template-columns: '+ result +';}';
        }
        document.addEventListener('mouseup', function() {document.removeEventListener('mousemove', watchMouse);});
        document.addEventListener('mousemove', watchMouse);
    }
    
    render() {
        return (
            <div className="tr">
                <div className="td"><img src="https://im0-tub-ru.yandex.net/i?id=14c13556dbc47474132b8bf4a806752e&amp;n=13" /></div>
                <div className="resizer" onMouseDown={() => this.onChangeWidth(0)}></div>
                <div className="td">Иван</div>
                <div className="resizer" onMouseDown={() => this.onChangeWidth(2)}></div>
                <div className="td">Иванов</div>
                <div className="resizer" onMouseDown={() => this.onChangeWidth(4)}></div>
                <div className="td">01.12.2000</div>
                <div className="resizer" onMouseDown={() => this.onChangeWidth(6)}></div>
                <div className="td">33</div>
                <div className="resizer" onMouseDown={() => this.onChangeWidth(8)}></div>
                <div className="td">техник</div>
                <div className="resizer" onMouseDown={() => this.onChangeWidth(10)}></div>
                <div className="td">
                    <input type="checkbox" />
                </div>
                <div className="resizer" onMouseDown={() => this.onChangeWidth(12)}></div>
                <div className="td">г. СПб Невский пр. 3/6 кв.1</div>
            </div>
        );
    }
}









export default Table;