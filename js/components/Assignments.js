import AssignmentList from "./AssignmentList.js"

export default {
    components: {
        AssignmentList
    },

    template: `
        <section class="space-y-6">
            <AssignmentList :assignments="filters.inProgress" ></AssignmentList>
            <AssignmentList :assignments="filters.completed" ></AssignmentList>
        </section>
    `,

    data() {
        return {
            assignments: [
                {
                    'id' : 1,
                    'name' : 'Finish Task',
                    'complete': false
                },
                {
                    'id' : 2,
                    'name' : 'Complete Homework',
                    'complete': false
                },
                {
                    'id' : 3,
                    'name' : 'Complete Assignments',
                    'complete': false
                }
            ]
        }
    },
    computed: {
        filters(){
            return {
                inProgress: this.assignments.filter(a => ! a.complete),
                completed: this.assignments.filter(a => a.complete)
            }
        }
    }
}