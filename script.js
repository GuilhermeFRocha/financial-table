const Modal = {

    toggle (){
        document.querySelector(".modal-overlay").classList.toggle("active")
    }

    /*  O codigo acima simplifica o abaixo com a tag toggle

    open () {
        // Abrir modal
        // Adicionar a class active ao modal
        
        document.querySelector(".modal-overlay").classList.add("active")
    },
    close () {
        // Fechar modal
        // Remover a class active ao modal

        document.querySelector(".modal-overlay").classList.remove("active")
    }
    */
} 

const transactions = [
    {
        id: 1,
        description:"luz",
        amount: -50000,
        date: "23/01/2021"
    },

    {
        id: 2,
        description:"Website",
        amount: 500000,
        date: "23/01/2021"
    },

    {
        id: 3,
        description:"Internet",
        amount: -20000,
        date: "23/01/2021"
    }
]

// Eu preciso somar as entradas
// depois eu preciso somar as saídas
// remover das entradas o valor da saídas
// assim, eu terei o total

const Transaction = {

    incomes() {
        //somar as entradas
    },
    expenses(){
        //somar as saídas
    },
    total() {
        //entradas - saídas
    }
}

// Substituir os dados do HTML com os dados de JS

const DOM = {
    transactionsContainer: document.querySelector("#data-table tbody"),

    addTraansaction (transaction, index){
        const tr = document.createElement("tr")
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)
        DOM.transactionsContainer.appendChild(tr)
        
    },
   
    innerHTMLTransaction(transaction) {

        const CSSclass = transaction.amount > 0 ? "income" : "expense"

        const amount = Utils.formatCurrency(transaction.amount)
        
        
        const html = `
            <td class="descripition">${transaction.description}</td>
            <td class="${CSSclass}">${transaction.amount}</td>
            <td class="date">${transaction.date}</td>
            <td><img src="./assets/minus.svg" alt="Remover transação"></td>
         `
         return html
    }
}

const Utils = {
    formatCurrency(value){
        const signal = Number(value) < 0 ? "-" : ""
    }
}

transactions.forEach(function(transaction){
    DOM.addTraansaction(transaction)
})