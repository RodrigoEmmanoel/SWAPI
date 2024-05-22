/* eslint-disable no-undef */

import { render, fireEvent } from "@testing-library/react";
import InputCheckbox from "./index";

describe("InputCheckbox", () => {
  it("should call onValueChange when checkbox state changes", () => {
    // Definindo uma função de mock para onValueChange
    const mockOnValueChange = jest.fn();

    // Renderizando o componente
    const { getByLabelText } = render(
      <InputCheckbox
        id="checkbox"
        label="Checkbox"
        onValueChange={mockOnValueChange}
      />,
    );

    // Obtendo o input pelo seu label
    const checkbox = getByLabelText("Checkbox");

    // Simulando uma mudança no estado do checkbox
    fireEvent.click(checkbox);

    // Verificando se a função mock foi chamada com o valor correto
    expect(mockOnValueChange).toHaveBeenCalledWith(true);
  });
});
