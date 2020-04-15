function Queue() {

    let items = []
    this.enqueue = function(element) {
        //Adicionar um elemento na lista
        items.push(element)
    }

    this.dequeue = function() {
        //Remove um item
        return items.shift()
    }

    this.front = function() {
        //Retorna o primeiro elemento da fila
        return items[0]
    }

    this.isEmpty = function() {
        //Verifica se a fila está vazia ou não
        return items.length === 0
    }

    this.size = function() {
        //retorna o tamanho da fila

        return items.length
    }

    this.print = function() {
        //imprime a fila no console

        console.log(items.toString());
        
    }

}

let queue = new Queue()

queue.enqueue(3)
queue.enqueue(3)

queue.dequeue()

console.log(queue.size())
queue.print()