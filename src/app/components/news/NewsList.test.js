import { render, screen } from "@testing-library/react";

import { NewsList } from "./NewsList";

import { newsList } from "../../../api/fakeApi";

const jestFunc = jest.fn();

describe("News List Component", () => {
  it("News List renders", () => {
    render(<NewsList newsList={newsList} newsTotal={21} getNews={jestFunc} />);

    expect(screen.getAllByText(/Фотобудки, GIF стойка/i)).toBe();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("News List renders w/o data", () => {
    render(<NewsList />);

    expect(screen.getByText("Новостей нет")).toBeInTheDocument();
  });
});
