export default class Device {
    public manufacturer: string;
    public model: string;
    protected simId: string; // any descendant can access this member
    public on() { };
    public off() { };
}