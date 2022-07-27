import AssignmentListItem from "./AssignmentListItem.js"

export default {
    components: {
        AssignmentListItem
    },
    template: `
        <section v-show="assignments.length">
            <h6 class="font-bold mb-2">In Progress</h6>
            <ul>
                <AssignmentListItem v-for="assignment in assignments" :key="assignment.id" :assignment="assignment" ></AssignmentListItem>
            </ul>
        </section>
    `,
    props: {
        assignments: Array
    }
}