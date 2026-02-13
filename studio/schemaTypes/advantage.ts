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
      name: 'language',
      title: 'Language',
      type: 'string',
      options: {
        list: [
          { title: 'English', value: 'en' },
          { title: 'Türkçe', value: 'tr' }
        ]
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'isRisk',
      title: 'Is Risk',
      type: 'boolean',
    }),
    defineField({
      name: 'translationId',
      title: 'Translation ID',
      type: 'string',
      description: 'Use the same ID for all translations of this record'
    }),
  ],
})
