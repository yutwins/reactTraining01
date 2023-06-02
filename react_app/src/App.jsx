import React, {useEffect, useState} from 'react';
import { ColorfulMessage } from './components/ColorfulMessage';

const App = () => {
    const onClickCountUp = () => {
        setNum(num + 1) // setNumはnumの値を更新する関数
    };
    console.log("最初");
    const [num, setNum] = useState(0);
    const [faceShowFlag, setFaceShowFlag] = useState(true);

    const onClickSwitchShowFlag = () => {
        setFaceShowFlag(!faceShowFlag);
    };

    useEffect(() => {
        if (num > 0) {
            if (num % 3 === 0) {
                faceShowFlag || setFaceShowFlag(true);
            } else {
                faceShowFlag && setFaceShowFlag(false);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [num]);


    return (
        <>
            <h1 style={{color: 'red'}}>Hello</h1>
            <ColorfulMessage color='blue'>
                お元気ですか？
            </ColorfulMessage>
            <ColorfulMessage color='pink' message='元気です'>
                元気です！
            </ColorfulMessage>
            <button onClick={onClickCountUp}>カウントアップ</button>
            <br />
            <button onClick={onClickSwitchShowFlag}>on/off</button>
            <p>{num}</p>
            {faceShowFlag && <p>😆😐</p>}
        </>
    );
}

export default App;