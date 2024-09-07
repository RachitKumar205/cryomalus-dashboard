'use client'

import { Quicksand, Raleway } from 'next/font/google';
import { useState, useEffect } from "react";
import Link from "next/link";
import axios from 'axios';

// Load the Quicksand and Raleway fonts
const quicksand = Quicksand({ subsets: ['latin'] });
const raleway = Raleway({ subsets: ['latin'] });

// Define the time slots
const timeSlots = [
    { start: "06:30", end: "07:00" },
    { start: "07:00", end: "07:30" },
    { start: "07:30", end: "08:00" },
    // Add more time slots as needed
];

function getMostRecentTimeSlot() {
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();

    for (let i = timeSlots.length - 1; i >= 0; i--) {
        const { start, end } = timeSlots[i];
        const [startHour, startMinute] = start.split(':').map(Number);
        const [endHour, endMinute] = end.split(':').map(Number);

        const startTime = startHour * 60 + startMinute;
        const endTime = endHour * 60 + endMinute;

        if (currentTime > startTime && currentTime <= endTime) {
            return { start, end };
        }
    }
    return null;
}

export default function Home() {
    const [data, setData] = useState({
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

    const [recentTimeSlot, setRecentTimeSlot] = useState(null);
    const [anomalyCoordinates, setAnomalyCoordinates] = useState([50, 22]); // Default values
    const [heatmapUrl, setHeatmapUrl] = useState('');

    useEffect(() => {
        const slot = getMostRecentTimeSlot();
        setRecentTimeSlot(slot);

        // Fetch predicted coordinates and heatmap using axios
        axios.get('http://127.0.0.1:8000/infer')
            .then(response => {
                const data = response.data;
                if (data.predicted_coordinates) {
                    setAnomalyCoordinates(data.predicted_coordinates);
                }
                setHeatmapUrl('http://127.0.0.1:8000/heatmap');
            })
            .catch(error => {
                console.error('Error fetching anomaly coordinates and heatmap:', error);
            });
    }, []);

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
                    {/* Display heatmap image */}
                    {heatmapUrl && <img src={heatmapUrl} alt="Heatmap" style={{ borderRadius: '10px', width: '100%' }} />}
                </div>
                <div className="w-[40%] p-6">
                    <div className="border p-5 rounded-xl border-neutral-400">
                        <p className={`text-3xl mb-4 ${quicksand.className} font-semibold`}>Flight Report</p>
                        <table className="w-full table-auto border-collapse border border-neutral-300">
                            <tbody>
                            <tr>
                                <td className="border border-neutral-300 px-4 py-2 font-medium">Last Flight</td>
                                <td className="border border-neutral-300 px-4 py-2">
                                    <p><span className="font-medium">{recentTimeSlot?.start}</span> AM</p>
                                    <p> {data.treeHealth.lastUpdate}</p>
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-neutral-300 px-4 py-2 font-medium">Details</td>
                                <td className="border border-neutral-300 px-4 py-2">
                                    <p><span
                                        className="font-medium">Soil Anomalies Detected:</span> {data.treeHealth.anomalies}
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-neutral-300 px-4 py-2 font-medium">Anomaly Location</td>
                                <td className="border border-neutral-300 px-4 py-2">
                                    <p>X: {anomalyCoordinates[0]}</p>
                                    <p>Y: {anomalyCoordinates[1]}</p>
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
