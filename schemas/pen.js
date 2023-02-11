import {defineField, defineType} from 'sanity'

export default defineType(
{
name:'pen',
title:'Pen Used',
type:'document'
,
fields:[
    defineField({
        name:'company',
        title:'Which brand',
        type:'string',
    })

]







}
)