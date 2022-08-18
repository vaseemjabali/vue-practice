import AssignmentListItem from "./AssignmentListItem.js"
import AssignmentTag from "./AssignmentTag.js"

export default {
    components: {
        AssignmentListItem, AssignmentTag
    },
    template: `
        <section v-show="assignments.length">
            <h6 class="font-bold mb-2"> {{ title }} <span> ({{ assignments.length }}) </span> </h6>
            <AssignmentTag :initialTags="assignments.map(a => a.tag)" 
            v-model:currentTag="currentTag" />
            <ul class="border border-gray-600 divide-y divide-gray-600 mt-4">
                <AssignmentListItem v-for="assignment in filteredAssignments" :key="assignment.id" :assignment="assignment" ></AssignmentListItem>
            </ul>
        </section>
    `,
    props: {
        assignments: Array,
        title: String
    },
    data() {
        return {
            currentTag: 'all'
        }
    },
    computed: {
        filteredAssignments(){
            if(this.currentTag === 'all'){
                return this.assignments 
            }
            return this.assignments.filter(a => a.tag === this.currentTag)
        }
    }
}