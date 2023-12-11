function heapsort(A, n) {
    // Função para construir o heap inicial
    function construirHeap(arr, tamanho) {
        for (let i = Math.floor(tamanho / 2); i >= 1; i--) {
            rebaixar(arr, tamanho, i);
        }
    }

    // Função para rebaixar um elemento no heap
    function rebaixar(arr, tamanho, i) {
        let maior = i;
        const esquerda = 2 * i;
        const direita = 2 * i + 1;

        if (esquerda <= tamanho && arr[esquerda - 1] > arr[maior - 1]) {
            maior = esquerda;
        }

        if (direita <= tamanho && arr[direita - 1] > arr[maior - 1]) {
            maior = direita;
        }

        if (maior !== i) {
            // Troca os elementos
            [arr[i - 1], arr[maior - 1]] = [arr[maior - 1], arr[i - 1]];

            // Recursivamente rebaixa o elemento trocado
            rebaixar(arr, tamanho, maior);
        }
    }

    // Constrói o heap inicial
    construirHeap(A, n);

    // Executa o Heapsort
    for (let i = n; i >= 2; i--) {
        // Troca o primeiro e o último elemento do heap
        [A[0], A[i - 1]] = [A[i - 1], A[0]];

        // Rebaixa o novo primeiro elemento
        rebaixar(A, i - 1, 1);
    }

    return A;
}

// Exemplo de uso
const vetor = [11, 1, 8, 5, 7, 5, 14, 3, 9, 15, 7, 20];
const tamanho = vetor.length;

const vetorOrdenado = heapsort(vetor, tamanho);
console.log("Vetor Ordenado:", vetorOrdenado);


