import React from 'react'
import { DetailCard } from '../../components/Utils';

export default function Details() {
    let detailCardStyle = { borderRadius: 30 }
    return (
        <div>
            <div className="row">
                <DetailCard title="Orders" body="3" style={{ ...detailCardStyle, backgroundColor: "" }} />
                <DetailCard title="Food" body="30" />
            </div>
        </div>
    )
}
