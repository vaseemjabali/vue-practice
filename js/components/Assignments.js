import AssignmentList from "./AssignmentList.js"
import AddAssignment from "./AddAssignment.js"

export default {
    components: {
        AssignmentList, AddAssignment
    },

    template: `
        <section class="space-y-6">
            <AssignmentList :assignments="filters.inProgress" title="In Progress" ></AssignmentList>
            <AssignmentList :assignments="filters.completed" title="Completed" ></AssignmentList>
        </section>

        <AddAssignment @add="add"></AddAssignment>
    `,

    data() {
        return {
            assignments: [],
        }
    },
    computed: {
        filters(){
            return {
                inProgress: this.assignments.filter(a => ! a.complete),
                completed: this.assignments.filter(a => a.complete)
            }
        }
    },
    created() {
        fetch('http://localhost:3001/assignments')
            .then(response => response.json())
            .then(data => {
                this.assignments = data
            })
    },
    methods: {
        add(name) {
            this.assignments.push({
                id : this.assignments.length + 1,
                name : name,
                complete: false
            })
        }
    }
}