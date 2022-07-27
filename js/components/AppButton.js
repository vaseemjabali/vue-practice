export default {
    template: `<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" :class="processing ? 'cursor-not-allowed' : '' ">
        <slot/>
        </button>`,

        data() {
            return {
                processing: true
            }
        }
}