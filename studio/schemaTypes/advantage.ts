import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'advantage',
  title: 'Advantage',
  type: 'document',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
    }),
    defineField({
      name: 'isRisk',
      title: 'Is Risk',
      type: 'boolean',
    }),
  ],
})
