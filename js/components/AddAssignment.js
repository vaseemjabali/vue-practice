export default {
    template: `
        <form @submit.prevent="add" class="mt-5">
            <div class="text-black bg-white">
                <input v-model="newAssignment" type="text" class="p-2" />
                <button class="border-l p-2">Add</button>
            </div>
        </form>
    `,
    data() {
        return {
            newAssignment: ''
        }
    },
    methods: {
        add() {
            this.$emit('add', this.newAssignment)
            this.newAssignment =  ''
        }
    }
}