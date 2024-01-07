import React from "react";

export default function Player() {
    const [playerName, setPlayerName] = React.useState(null);
    const playerRef = React.useRef();

    const handleClick = () => {
        setPlayerName(playerRef.current.value);
    };

    return (
        <section id="player">
            <h2>Welcome {playerName ?? "unknown entity"}</h2>
            <p>
                <input type="text" ref={playerRef} />
                <button onClick={handleClick}>Set Name</button>
            </p>
        </section>
    );
}
