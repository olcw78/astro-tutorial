import {h} from 'preact';
import {useState} from 'preact/hooks';
import type {FC} from "preact/compat";

interface GreetingsProps {
    messages: ReadonlyArray<string>;
}

const Greetings: FC<GreetingsProps> = ({messages}) => {
    const getRandomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

    const [greeting, setGreeting] = useState(messages[0]);

    return (
        <div>
            <h3>{greeting}! Thank you for visiting</h3>
            <button onClick={() => setGreeting(getRandomMessage())}>New Greeting</button>
        </div>
    )
}
export default Greetings;