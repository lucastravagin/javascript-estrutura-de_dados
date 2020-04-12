//O ultimo a entrar é o primeiro a sair

function Stack() {
    let items = []

    this.push = function(element) {
        //Adiciona um novo item a pilha
        items.push(element)
    }

    this.pop = function() {
        //Remove um item do topo da pilha
        return items.pop()
    }

    this.peek = function() {
        //Devolve o elemento que está no topo da pilha
        return items[items.length - 1]
    }

    this.isEmpty = function() {
        //Informar se a pilha está vazia ou não
        return items.length === 0
    }

    this.clear = function() {
        //Limpa a Pilha
        items = []
    }

    this.size = function() {
        //Informa o tamanho da pilha
        return items.length
    }

    this.print = function() {
        //Imprime a pilha no console
        console.log(items.toString())
    }
}

let pilha = new Stack()

pilha.push(2)
pilha.push(3)
pilha.push(5)
pilha.push(1)

pilha.clear()

console.log(pilha.peek());
console.log(pilha.isEmpty());


console.log(pilha.size())


