const Modal = {

    toggle() {
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

//Dados da tabela

// Calculo da Entrada menos Saída e o Total 
// Eu preciso somar as entradas
// depois eu preciso somar as saídas
// remover das entradas o valor da saídas
// assim, eu terei o total

const Transaction = {
    all: [{
            description: "luz",
            amount: -50000,
            date: "23/01/2021"
        },

        {
            description: "Website",
            amount: 500000,
            date: "23/01/2021"
        },

        {
            description: "Internet",
            amount: -20000,
            date: "23/01/2021"

        }, {
            description: "App",
            amount: 200000,
            date: "23/01/2021"
        },
    ],

    add(transaction) {
        Transaction.all.push(transaction)
        App.reload()
    },

    remove(index) {
        Transaction.all.splice(index, 1)
        App.reload()
    },

    incomes() {
        // somar as entradas
        let income = 0
        // pegar todas as transações
        // para cada transacao
        Transaction.all.forEach(function (transaction) {
            // se ela for maior que zero    
            if (transaction.amount > 0) {
                // somar a uma variavel e retornar a variavel
                income = income + transaction.amount
            }
        })

        return income
    },
    expenses() {
        //somar as saídas
        let expense = 0
        // pegar todas as transações
        // para cada transacao
        Transaction.all.forEach(function (transaction) {
            // se ela for menor que zero    
            if (transaction.amount < 0) {
                // somar a uma variavel e retornar a variavel
                expense = expense + transaction.amount
            }
        })

        return expense
    },
    total() {
        //entradas - saídas
        return Transaction.incomes() + Transaction.expenses()
    }
}

// Substituir os dados do HTML com os dados de JS

const DOM = {
    transactionsContainer: document.querySelector("#data-table tbody"),

    addTransaction(transaction, index) {
        const tr = document.createElement("tr")
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)
        DOM.transactionsContainer.appendChild(tr)

    },

    innerHTMLTransaction(transaction) {

        const CSSclass = transaction.amount > 0 ? "income" : "expense"

        const amount = Utils.formatCurrency(transaction.amount)


        const html = `
            <td class="descripition">${transaction.description}</td>
            <td class="${CSSclass}">${amount}</td>
            <td class="date">${transaction.date}</td>
            <td><img src="./assets/minus.svg" alt="Remover transação"></td>
         `
        return html
    }, // Jogar na tela os resultados das somas 
    updateBalance() {
        document.getElementById("incomeDisplay")
            .innerHTML = Utils.formatCurrency(Transaction.incomes())

        document.getElementById("expenseDisplay")
            .innerHTML = Utils.formatCurrency(Transaction.expenses())

        document.getElementById("totalDisplay")
            .innerHTML = Utils.formatCurrency(Transaction.total())
    },

    clearTransactions() {
        DOM.transactionsContainer.innerHTML = ""
    }

}

//Formatando o numero para REAL

const Utils = {
    formatCurrency(value) {
        const signal = Number(value) < 0 ? "-" : ""

        value = String(value).replace(/\D/g, "")

        value = Number(value) / 100

        value = value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })

        return signal + value

    }
}

const Form = {
    submit(event){
        event.preventDefault()

        // verificar se todas as informaçoes foram preenchidas
        // formatar os dados para salvar
        // salvar
        // apagar os dados do formulario
        // modeal feche
        // atualizar a aplicação
    }
}

// Colocando e removendo os dados na tabela

const App = {
    init() {
        Transaction.all.forEach(function (transaction) {
            DOM.addTransaction(transaction)
        })
        DOM.updateBalance()
    },

    reload() {
        // Limpa todo o codigo com string vazia ""
        DOM.clearTransactions()
        App.init()
    },

}

App.init()