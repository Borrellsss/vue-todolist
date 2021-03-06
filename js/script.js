// Descrizione:
// Rifare l'esercizio della to do list.
// Questa volta però ogni todo sarà un
// oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che
// indica se il todo è stato fatto oppure no
// MILESTONE 1
// Stampare all'interno di una lista,
// un item per ogni todo.
// Se la proprietà done è uguale a true,
// visualizzare il testo del todo sbarrato.
// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x":
// cliccando su di essa, il todo viene rimosso dalla lista.
// MILESTONE 3
// Predisporre un campo di input testuale e un
// pulsante "aggiungi": cliccando sul pulsante, il
// testo digitato viene letto e utilizzato per
// creare un nuovo todo, che quindi viene aggiunto
// alla lista dei todo esistenti.
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
                    done: true
                },
                {
                    text: "dare il cibo al gatto",
                    done: false
                },
                {
                    text: "pulire la stanza",
                    done: true
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
            }
        },
        mounted() {

        },
    }
);