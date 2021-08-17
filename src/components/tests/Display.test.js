import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Display from "../Display";

const testData = {
  name: "Stranger Things",
  image: {
    medium:
      "https://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg",
    original:
      "https://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg",
  },
  summary:
    "A love letter to the '80s classics that captivated a generation, Stranger Things is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.",
  seasons: [
    {
      id: 0,
      name: "Season 1",
      episodes: [],
    },
    {
      id: 1,
      name: "Season 2",
      episodes: [],
    },
    {
      id: 2,
      name: "Season 3",
      episodes: [],
    },
    {
      id: 3,
      name: "Season 4",
      episodes: [],
    },
  ],
};

const mockDisplay = () => {
    console.log('function triggered');
}

test("Does component render without errors", () => {
  render(<Display />);
});

test("Test if data can be fetched", () => {
    render(<Display displayFunc={mockDisplay}/>)

    const show = screen.queryByTestId('show-container');
    waitFor(() => expect(show).toBeInTheDocument());

    const button = screen.getByRole('button');
    userEvent.click(button);
});

test("Check if seasons is equal to the test data", () => {
    render (<Display show={testData}/>);

    const button = screen.getByRole('button');
    userEvent.click(button);

    waitFor(() => expect(screen.getAllByTestId('season-option')).toHaveLength(testDisplay.seasons.length));
});

test("Check if the optional function is being triggered", () => {
    const mockClick = jest.fn();

    render(<Display handleClick = {mockClick}/>);

    const button = screen.getByRole('button');
    userEvent.click(button);

    waitFor(() => expect(mockClick).toHaveBeenCalledTimes(1));
});

///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.
