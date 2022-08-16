function App() {
  return (
    <div>
      Treinando useEffect do Hooks
    </div>
  );
}

export default App;

// A cada 10 segundos ele gera e exibe na tela um número aleatório de 1 a 100;
// Se o número for múltiplo de 3 ou 5, uma mensagem "Acerto" é exibida na tela;
// A mensagem de acerto é removida 4 segundos depois de ser exibida;
// O timer é removido quando o componente é desmontado.
