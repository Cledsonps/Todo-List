var todos = [
    {
        text: 'Aprender Vue.js',
        done: false
    },
    {
        text: 'Aprender JavaScript',
        done: true
    }
];

const todosApp = {
    data() {
        return {
            todos: window.todos            
        }
    }
};

// Linha que inicializa o app
// e monta o componente no elemento com id "app"
// VTTCue.Create(todosApp).mount('#app');
Vue.createApp(todosApp).mount('#app');
