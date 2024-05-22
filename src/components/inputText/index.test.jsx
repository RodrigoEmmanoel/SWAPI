/* eslint-disable no-undef */

import { render, fireEvent } from "@testing-library/react";
import InputText from "./index";

describe("InputText", () => {
  it("should call onValueChange when input value changes", () => {
    // Definindo uma função de mock para onValueChange
    const mockOnValueChange = jest.fn();

    // Renderizando o componente
    const { getByPlaceholderText } = render(
      <InputText
        label="Teste"
        placeholder="Digite algo..."
        onValueChange={mockOnValueChange}
      />,
    );

    // Obtendo o input pelo placeholder
    const input = getByPlaceholderText("Digite algo...");

    // Simulando uma mudança no valor do input
    fireEvent.change(input, { target: { value: "Teste" } });

    // Verificando se a função mock foi chamada com o valor correto
    expect(mockOnValueChange).toHaveBeenCalledWith("Teste");
  });
});
