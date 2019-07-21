import React, { Component } from 'react';

export function Heading(props) {
    const { text, className = 'py-3 m-0' } = props;
    return (
        <h3 className={className}>{text}</h3>
    );
}

export function Button(props) {
    const { className = 'btn btn-primary', style = {} } = props;
    return (
        <button className={className} style={style}>{props.children}</button>
    )
}

export function DetailCard(props) {
    const { title, subtitle, body, className = "col-4", style = { borderRadius: 30 } } = props;
    return (
        <div className={className}>
            <div className="card" style={style}>
                <div className="card-body text-center">
                    <h5 className="card-title">{title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
                    <p className="display-1">{body}</p>
                </div>
            </div>
        </div>
    )
}

export class Modal extends Component {

    getButtons(buttons) {
        return (<>{
            buttons.map((el, i) => <button key={i} className={el.class} onClick={el.func.bind(this)}>{el.text}</button>)
        }</>)
    }

    render() {
        const { title, buttons = [], toggleEditModal, dismissable = true, showCloseButton = true } = this.props
        return (
            <>
                <div className="modal-backdrop fade show"></div>
                <div className="modal fade show" style={{ display: 'block' }} id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content border-0" style={{ borderRadius: 30 }}>
                            <div className="modal-header border-0 p-4">
                                <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
                                {(dismissable) ? (
                                    <button type="button" className="close" onClick={toggleEditModal.bind(this)} aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                ) : ''
                                }

                            </div>
                            <div className="modal-body px-4">
                                {this.props.children}
                            </div >
                            <div className="modal-footer border-0 p-4">
                                {(showCloseButton) ?
                                    <button type="button" className="btn btn-secondary" onClick={toggleEditModal.bind(this)}>Close</button> : ''}
                                {this.getButtons(buttons)}
                            </div>
                        </div >
                    </div >
                </div >
            </>
        )
    }
}
export class Utils {
    static addToSet(item, set, condition = null) {
        const mSet = new Set(set);
        if (typeof condition === "function" && condition()) {
            mSet.add(item);
            return [...mSet];
        }
        mSet.add(item);
        return [...mSet];
    }

    static removeFromSet(item, set) {
        let mSet = [...set];
        let index = mSet.indexOf(item);
        if (index >= 0) {
            console.log(index);
            mSet.splice(index, 1);
        }
        return [...mSet];
    }
}

