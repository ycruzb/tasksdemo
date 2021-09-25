import React from "react";
import { render, screen } from "@testing-library/react";
import TaskItem from "./index"

describe("Testing TaskItem component", () => {
	test("component should be rendered without crashing", () => {
		render(<TaskItem id={1} content="Lorem ipsum" />)
	})
	test("common text is rendered properly", () => {
		render(<TaskItem id={1} content="Lorem ipsum" />)
		const taskText = screen.getByText(/Lorem ipsum/)
		expect(taskText).toBeInTheDocument();
	})
	test("hashtag text is rendered properly", () => {
		const { container } = render(<TaskItem id={1} content="#testing" />)
		const taskText = screen.getByText(/#testing/)
		expect(taskText).toBeInTheDocument();
		expect(container.getElementsByClassName('text-purple-600').length).toBe(1);
		expect(container.getElementsByClassName('bg-purple-200').length).toBe(1);
	})
	test("user text is rendered properly", () => {
		const { container } = render(<TaskItem id={1} content="@userdemo" />)
		const taskText = screen.getByText(/@userdemo/)
		expect(taskText).toBeInTheDocument();
		expect(container.getElementsByClassName('text-green-600').length).toBe(1);
		expect(container.getElementsByClassName('bg-green-200').length).toBe(1);
	})
	test("email text is rendered properly", () => {
		const { container } = render(<TaskItem id={1} content="info@test.com" />)
		const taskText = screen.getByText(/Mail 1/)
		expect(taskText).toBeInTheDocument();
		expect(container.getElementsByClassName('text-yellow-600').length).toBe(1);
		expect(container.getElementsByClassName('bg-yellow-200').length).toBe(1);
	})
	test("link text is rendered properly", () => {
		const { container } = render(<TaskItem id={1} content="testing.com" />)
		const taskText = screen.getByText(/Link 1/)
		expect(taskText).toBeInTheDocument();
		expect(container.getElementsByClassName('text-blue-600').length).toBe(1);
		expect(container.getElementsByClassName('bg-blue-200').length).toBe(1);
	})
	test("counting more than 1 emails properly", () => {
		render(<TaskItem id={1} content="info@testing.com info2@testing.com" />)
		const email1Text = screen.getByText(/Mail 1/)
		expect(email1Text).toBeInTheDocument();
		const email2Text = screen.getByText(/Mail 2/)
		expect(email2Text).toBeInTheDocument();
	})
	test("counting more than 1 links properly", () => {
		render(<TaskItem id={1} content="testing.com testing.org" />)
		const link1Text = screen.getByText(/Link 1/)
		expect(link1Text).toBeInTheDocument();
		const link2Text = screen.getByText(/Link 2/)
		expect(link2Text).toBeInTheDocument();
	})

});
