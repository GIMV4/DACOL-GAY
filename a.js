import React from 'react';

export default function ConteudoSite() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Matérias</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Física Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col">
          <h2 className="text-2xl font-semibold mb-4">Física</h2>
          <h3 className="font-medium mb-2">Conteúdo Programático</h3>
          <ul className="list-disc list-inside flex-grow mb-4">
            <li>Cinemática (MRU, MRUV, gráficos)</li>
            <li>Dinâmica e leis de Newton</li>
            <li>Energia e trabalho</li>
            <li>Termodinâmica</li>
            <li>Eletrostática</li>
          </ul>
          <button className="mt-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Ver detalhes
          </button>
        </div>

        {/* Matemática Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col">
          <h2 className="text-2xl font-semibold mb-4">Matemática</h2>
          <h3 className="font-medium mb-2">Conteúdo Programático</h3>
          <ul className="list-disc list-inside flex-grow mb-4">
            <li>Álgebra e sistemas</li>
            <li>Funções e gráficos</li>
            <li>Geometria plana e espacial</li>
            <li>Trigonometria</li>
            <li>Estatística</li>
          </ul>
          <button className="mt-auto px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            Ver detalhes
          </button>
        </div>

        {/* Química Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col">
          <h2 className="text-2xl font-semibold mb-4">Química</h2>
          <h3 className="font-medium mb-2">Conteúdo Programático</h3>
          <ul className="list-disc list-inside flex-grow mb-4">
            <li>Estrutura atômica</li>
            <li>Tabela periódica</li>
            <li>Ligações químicas</li>
            <li>Estequiometria</li>
            <li>Termoquímica</li>
          </ul>
          <button className="mt-auto px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
            Ver detalhes
          </button>
        </div>
      </div>

      {/* Detalhes expansíveis */}
      <div className="mt-12 space-y-12">
        {/* Exemplo: Física detalhes */}
        <section className="bg-gray-50 rounded-2xl p-6">
          <h2 className="text-3xl font-bold mb-4">Física - Atividades e Provas</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-2">Atividades</h3>
              <ol className="list-decimal list-inside space-y-1">
                <li>Quedas livres e análise de dados</li>
                <li>Sistema de polias e forças</li>
                <li>Calorimetria caseira</li>
                <li>Mapeamento de campos magnéticos</li>
              </ol>
            </div>
            <div>
              <h3 className="font-medium mb-2">Provas (Exemplos)</h3>
              <ol className="list-decimal list-inside space-y-1">
                <li>Cinemática: aceleração e distância</li>
                <li>Dinâmica: plano inclinado</li>
                <li>Energia: trabalho e potencial</li>
                <li>Termodinâmica: calor latente</li>
                <li>Eletrostática: força entre cargas</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Você pode replicar para Matemática e Química de maneira similar */}
      </div>
    </div>
  );
}
