import { Rule } from "sanity";

export default {
    title: "Navigation Button Element",
    name: "navElement",
    type: 'object',
    fields: [{
        type: 'localeString',
        name: 'title',
        description: 'The title of the navigation element',
        validation: (rule: Rule) => rule.required()
    }, {
        type: "string",
        name: "subUrl",
        title: "Url Path",
        description: "the relative path to this button navigates to. Relative here means that for 'hulen/people', just add 'people' as value. For further chaining, add 'people/somePerson'.",
        validation: (rule: Rule) => rule.required()
    }]


}