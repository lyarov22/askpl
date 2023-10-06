import { startWaitingForTag, stopWaitingForTag } from '@/redux/slices/rfidSlice';
import { RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';

const auth = () => {
    const uid = useSelector((state: RootState) => state.rfid.uid);
    const waitingForTag = useSelector((state: RootState) => state.rfid.waitingForTag);

    const dispatch = useDispatch();

    const handleStartWaiting = () => {
        dispatch(startWaitingForTag());
    };

    const handleStopWaiting = () => {
        dispatch(stopWaitingForTag());
    };
    return (
        <div className="bg-gray-100 p-4 rounded-md">
            <h1 className="text-2xl font-semibold mb-4">RFID Reader</h1>
            {waitingForTag ? (
                <div>
                    <p className="mb-2">Please place the RFID tag near the reader.</p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handleStopWaiting}>
                        Stop
                    </button>
                </div>
            ) : (
                <div>
                    {uid ? (
                        <div className="bg-green-100 p-2 rounded-md mb-4">
                            <p className="mb-2">RFID Tag UID:</p>
                            <p className="font-semibold">{uid}</p>
                        </div>
                    ) : (
                        <p className="mb-2">Press the button to start waiting for an RFID tag.</p>
                    )}
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handleStartWaiting}>
                        Start waiting
                    </button>
                </div>
            )}
        </div>
    );
};

export default auth;
