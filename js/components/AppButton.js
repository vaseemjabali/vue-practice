export default {
    template: `<button :class="{
            'text-white font-bold py-2 px-4 rounded' : true,
            'bg-blue-500 hover:bg-blue-700 ' : type === 'primary',
            'bg-red-500 hover:bg-red-700 ' : type === 'secondary',
            'bg-green-500 hover:bg-green-700 ' : type === 'muted',
            'cursor-not-allowed' : processing
        }">
        <slot/>
        </button>`,

        props:{
            type:{
                type: String,
                default: 'primary'
            },
            processing: {
                type: Boolean,
                default: true
            }
            
        }, 
}