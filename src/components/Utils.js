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

export function Input(props) {
    const { inputClassName = '', inputStyle = {}, placeholder = '' } = props;
    return (
        <input className={inputClassName} style={inputStyle} placeholder={placeholder} />
    )
}

export function FormInput(props) {
    const { labelClassName = 'btn btn-primary', labelStyle = {}, labelText = '' } = props;
    return (
        <div>
            <label className={labelClassName} style={labelStyle}>{labelText}</label>
            <Input props={props} />
        </div>
    )
}

export function Icon(props) {
    const { componentStyle = '', className } = props;

    return (<i className={className} style={componentStyle}></i>)
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

export default function Loading(props) {
    const { className } = props;
    return (
        <div className="test-center">
            <div className={"d-flex justify-content-center " + className}>
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
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

    static formatMoney(amount, decimalCount = 2, decimal = ".", thousands = ",") {
        try {
            decimalCount = Math.abs(decimalCount);
            decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

            const negativeSign = amount < 0 ? "-" : "";

            let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
            let j = (i.length > 3) ? i.length % 3 : 0;

            return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
        } catch (e) {
            console.log(e)
        }
    }
}

