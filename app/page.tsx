'use client'

import { Quicksand, Raleway } from 'next/font/google'
import Map from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import {useState} from "react";
import Link from "next/link";

// Load the Quicksand and Raleway fonts
const quicksand = Quicksand({ subsets: ['latin'] });
const raleway = Raleway({ subsets: ['latin'] });

export default function Home() {
    // State for example data
    const data = useState({
        treeHealth: {
            anomalies: 5,
            lastUpdate: '2024-09-06',
        },
        nutrientLevels: {
            nitrogen: 'Low',
            phosphorus: 'Normal',
            potassium: 'High',
        },
        pestCounts: {
            aphids: 20,
            mites: 15,
            worms: 5,
        },
        productionEstimate: {
            estimatedYield: '12,000 kg',
            lastSurveyDate: '2024-09-01',
        },
    });

    return (
        <div className="w-screen text-black h-screen bg-white flex flex-col items-start justify-start">
            <div
                className={`px-6 text-4xl w-full h-16 flex flex-row items-center font-bold ${quicksand.className} border-b border-b-neutral-300`}>
                <p className={'w-[600px] h-fit'}>Cryomalus Dashboard</p>
                <div className={`h-full items-center flex w-full text-lg space-x-8 ${raleway.className}`}>
                    <Link href={'/'}
                          className={'text-md text-neutral-600 hover:underline'}>Home</Link>
                    <Link href={'/anomalies'}
                          className={'text-md text-neutral-600 hover:underline'}>Anomalies</Link>
                </div>
            </div>
            <div className="flex flex-row h-full w-screen items-center">
                <div className="w-[60%] h-[600px] flex flex-row p-6">
                    <Map
                        mapboxAccessToken="pk.eyJ1IjoicmFjaGl0a3VtYXIyMDUiLCJhIjoiY2xyb28yd2I3MDIxazJrbnpocjN4YTkzcCJ9.nP43qrue0MVVQim3guk0oQ"
                        initialViewState={{
                            latitude: 31.15910322273199,
                            longitude: 77.38675496156976,
                            zoom: 16,
                        }}
                        mapStyle={'mapbox://styles/mapbox/satellite-v9'}
                        style={{borderRadius: '10px'}}
                    />
                </div>
                <div className="w-[40%] p-6">
                    <div className="border p-5 rounded-xl border-neutral-400">
                        <p className={`text-3xl mb-4 ${quicksand.className} font-semibold`}>Dashboard Overview</p>
                        <table className="w-full table-auto border-collapse border border-neutral-300">
                            <thead>
                            <tr>
                                <th className="border border-neutral-300 px-4 py-2 text-left">Category</th>
                                <th className="border border-neutral-300 px-4 py-2 text-left">Metric</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="border border-neutral-300 px-4 py-2 font-medium">Tree Health</td>
                                <td className="border border-neutral-300 px-4 py-2">
                                    <p><span className="font-medium">Anomalies Detected:</span> {data.treeHealth.anomalies}</p>
                                    <p><span className="font-medium">Last Update:</span> {data.treeHealth.lastUpdate}</p>
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-neutral-300 px-4 py-2 font-medium">Nutrient Levels</td>
                                <td className="border border-neutral-300 px-4 py-2">
                                    <p><span className="font-medium">Nitrogen:</span> {data.nutrientLevels.nitrogen}</p>
                                    <p><span className="font-medium">Phosphorus:</span> {data.nutrientLevels.phosphorus}</p>
                                    <p><span className="font-medium">Potassium:</span> {data.nutrientLevels.potassium}</p>
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-neutral-300 px-4 py-2 font-medium">Pest Counts</td>
                                <td className="border border-neutral-300 px-4 py-2">
                                    <p><span className="font-medium">Aphids:</span> {data.pestCounts.aphids}</p>
                                    <p><span className="font-medium">Mites:</span> {data.pestCounts.mites}</p>
                                    <p><span className="font-medium">Worms:</span> {data.pestCounts.worms}</p>
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-neutral-300 px-4 py-2 font-medium">Production Estimate</td>
                                <td className="border border-neutral-300 px-4 py-2">
                                    <p><span className="font-medium">Estimated Yield:</span> {data.productionEstimate.estimatedYield}</p>
                                    <p><span className="font-medium">Last Survey Date:</span> {data.productionEstimate.lastSurveyDate}</p>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
