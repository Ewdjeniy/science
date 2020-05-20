import React from 'react';
import ReactDOM from 'react-dom';
import Table from './table/table.js';

columnsWidth.innerHTML = '.tr {grid-template-columns: 1fr 0.5rem 1fr 0.5rem 1fr 0.5rem 1fr 0.5rem 1fr 0.5rem 1fr 0.5rem 1fr 0.5rem 1fr;}';

class Static extends React.Component {
    changeWidth() {
        alert('hi');
    }
    
    render() {
        return (
            <div>
                <div className="tr workersTh">
                    <div className="td">Превью</div>
                    <div className="resizer" onMouseDown={() => this.changeWidth()}></div>
                    <div className="td">Имя</div>
                    <div className="resizer" onMouseDown={() => this.changeWidth()}></div>
                    <div className="td">Фамилия</div>
                    <div className="resizer" onMouseDown={() => this.changeWidth()}></div>
                    <div className="td">Дата Рождения</div>
                    <div className="resizer" onMouseDown={() => this.changeWidth()}></div>
                    <div className="td">Возраст</div>
                    <div className="resizer" onMouseDown={() => this.changeWidth()}></div>
                    <div className="td">Должность</div>
                    <div className="resizer" onMouseDown={() => this.changeWidth()}></div>
                    <div className="td">Удаленная работа</div>
                    <div className="resizer" onMouseDown={() => this.changeWidth()}></div>
                    <div className="td">Адрес проживания</div>
                </div>
                <Table />
            </div>
        );
    }
}









//========================================

ReactDOM.render(
    <Static />,
    document.getElementById('root')
);