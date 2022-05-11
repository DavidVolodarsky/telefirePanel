import {Greeter} from "../../dist/Greeter";

test('My Greeter', () => {
    expect(Greeter('Carl')).toBe('Hello Carl');
});