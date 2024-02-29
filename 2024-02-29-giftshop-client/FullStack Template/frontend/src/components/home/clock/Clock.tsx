import { Component } from "react";
import "./Clock.css";
import Product from "../../../models/LoremIpsum";

interface ClockProps {
    name: string;
}

interface ClockState {
    time: string;
}

// class Clock extends Component { // no props, no state
// class Clock extends Component<ClockProps> { // has props, no state
// class Clock extends Component<{}, ClockState> { // has state, no props
class Clock extends Component<ClockProps, ClockState> { // has props, has state

    private timerId: number = 0;
    public constructor(props: ClockProps) {
        super(props);
        this.state = {
            time: 'initial time'
        };
    }

    // here i can do stuff do initialize the component
    public componentDidMount(): void {
        // alert('clock component created')
        this.timerId = window.setInterval(() => {
            const now = new Date();
            const value = now.toLocaleTimeString()
            this.setState({ time: value })
        }, 1000)
    }

    public componentWillUnmount(): void {
        // alert('clock component will destroy now...')
        clearInterval(this.timerId)
    }

    public render(): JSX.Element {
        return (
            <div className="Clock">
                <p>time now is: {this.state.time}</p>
                <p>clock type is: {this.props.name}</p>
            </div>
        );
    }
}

export default Clock;
