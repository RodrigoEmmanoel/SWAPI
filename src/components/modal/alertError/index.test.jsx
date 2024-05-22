/* eslint-disable no-undef */

import { render, fireEvent } from "@testing-library/react";
import Modal from "./index";

describe("Modal", () => {
  it("should render modal content when isOpen is true", () => {
    // Definindo uma função de mock para onClose
    const mockOnClose = jest.fn();

    // Renderizando o componente com isOpen definido como true
    const { getByText } = render(
      <Modal
        isOpen={true}
        onClose={mockOnClose}
        title="Teste"
        message="Mensagem de teste"
      />,
    );

    // Verificando se o título e a mensagem do modal são renderizados corretamente
    expect(getByText("Teste")).toBeInTheDocument();
    expect(getByText("Mensagem de teste")).toBeInTheDocument();
  });

  it("should call onClose when overlay is clicked", () => {
    // Definindo uma função de mock para onClose
    const mockOnClose = jest.fn();

    // Renderizando o componente com isOpen definido como true
    const { getByText, getByTestId } = render(
      <Modal
        isOpen={true}
        onClose={mockOnClose}
        title="Teste"
        message="Mensagem de teste"
      />,
    );

    // Simulando um clique no overlay
    fireEvent.click(getByTestId("modal-overlay"));

    // Verificando se a função mock de onClose foi chamada
    expect(mockOnClose).toHaveBeenCalled();
  });

  it("should call onClose when close button is clicked", () => {
    // Definindo uma função de mock para onClose
    const mockOnClose = jest.fn();

    // Renderizando o componente com isOpen definido como true
    const { getByText } = render(
      <Modal
        isOpen={true}
        onClose={mockOnClose}
        title="Teste"
        message="Mensagem de teste"
      />,
    );

    // Simulando um clique no botão de fechar
    fireEvent.click(getByText("Fechar"));

    // Verificando se a função mock de onClose foi chamada
    expect(mockOnClose).toHaveBeenCalled();
  });
});
