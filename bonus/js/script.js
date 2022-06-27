// Bonus:
// 1- oltre al click sul pulsante, intercettare anche
// il tasto ENTER per aggiungere il todo alla lista
// 2- cliccando sul testo dell'item, invertire il
// valore della proprietà done del todo corrispondente
// (se done era uguale a false, impostare true e viceversa)
var app = new Vue(
    {
        el: "#root",
        data: {
            newToDo: {
                newItemText: null,
                newItemDone: false
            },
            toDos: [
                {
                    text: "spesa",
                    done: false
                },
                {
                    text: "esercizi",
                    done: false
                },
                {
                    text: "dare il cibo al gatto",
                    done: false
                },
                {
                    text: "pulire la stanza",
                    done: false
                },
                {
                    text: "fare benzina",
                    done: false
                },
                {
                    text: "pulire l'auto",
                    done: false
                },
            ],
        },
        methods: {
            // *aggiungo un nuovo elemento all'array "newToDo" al "click"*
            // *o alla presiione del tasto "enter". L'"object" aggiunto avrà*
            // *come "text" il valore della input in "input-side" e come*
            // *"done" avrà di default "false"*
            addToList () {
                this.toDos.push({
                    text: this.newToDo.newItemText,
                    done: this.newToDo.newItemDone
                });
                this.newToDo.newItemText = "";
            },
            // *al "click" sulla "X" rimuovo l'elemento dell'array*
            // *con lo stesso indice della "X" sulla quale si è cliccato*
            removeFromList(todoIndex) {
                this.toDos.splice(todoIndex, 1);
            },
            // *al "click" sul testo della lista viene cambia il valore di*
            // *"done" dell'elemnto con indice corrispondente*
            todoDone(todoIndex) {
                this.toDos[todoIndex].done = !this.toDos[todoIndex].done;
            }
        },
        mounted() {

        },
    }
);