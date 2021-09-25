import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CustomButton from "./index"

const mockedActionFunction = jest.fn();

describe("Testing CustomButton component", () => {
	test("component should be rendered without crashing", () => {
		render(<CustomButton type="primary" text="OK" disabled={false} action={mockedActionFunction} />)
	})
	test("renders the text", () => {
		render(<CustomButton type="primary" text="OK" disabled={false} action={mockedActionFunction} />);
		const buttonText = screen.getByText(/OK/);
		expect(buttonText).toBeInTheDocument();
	});
	test("button of primary type has its background color, checking the class", () => {
		const { container } = render(<CustomButton type="primary" text="OK" disabled={false} action={mockedActionFunction} />);
		expect(container.firstChild).toHaveClass("bg-blue-600");
	})
	test("button of secondary type has its background color, checking the class", () => {
		const { container } = render(<CustomButton type="secondary" text="OK" disabled={false} action={mockedActionFunction} />);
		expect(container.firstChild).toHaveClass("bg-gray-400");
	})
	test("button of link type has its border color, checking the class", () => {
		const { container } = render(<CustomButton type="link" text="OK" disabled={false} action={mockedActionFunction} />);
		expect(container.firstChild).toHaveClass("border-gray-300");
	})
	test("clicking on button executes action function", () => {
		render(<CustomButton type="primary" text="OK" disabled={false} action={mockedActionFunction} />);
		const buttonText = screen.getByText(/OK/);
		fireEvent.click(buttonText);
		expect(mockedActionFunction.mock.calls.length).toBe(1);
	})
});
