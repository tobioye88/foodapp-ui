import React, { Component } from 'react'


const TableDef = (props) => {
    let header = Object.create(props.header);
    if (props.showButton) {
        header.pop();
    }
    return (<>{
        header.map((e, i) =>
            <td key={i}>{props.row[e]}</td>
        )
    }</>)
}

export default class Table extends Component {
    //pass a heder
    //use the header to determine the rows to be shown in the body

    getHeading(heading) {
        return heading.map((val, index) => <th key={index}>{val.toLocaleUpperCase()}</th>)
    }

    getButtons(buttons, id) {
        return (<td>{
            buttons.map((el, i) => <button key={i} className={el.class} onClick={el.func.bind(this, id)}>{el.text}</button>)
        }</td>)
    }

    getBody(header, body, options) {
        const { showButton, buttons } = options;
        return body.map((row, i) => {
            return <tr key={i}>
                <TableDef row={row} header={header} showButton={showButton} />
                {(showButton) ? this.getButtons(buttons, row.id) : ''}
            </tr>
        });
    }

    render() {
        const { header, body, options } = this.props;
        return (
            <div>
                <table className="table table-borderless" >
                    <thead>
                        <tr>
                            {this.getHeading(header)}
                        </tr>
                    </thead>
                    <tbody>
                        {this.getBody(header, body, options)}
                    </tbody>
                </table>
            </div>
        )
    }
}
